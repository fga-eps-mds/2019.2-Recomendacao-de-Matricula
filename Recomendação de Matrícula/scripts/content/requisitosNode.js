const request = require('request');
const cheerio = require('cheerio');
let materiasCursadas = []
let materiasNaoCursadas = []
let contador = 0;
chrome.storage.local.get(["materias", "status"], function(result){
    if(result.status != undefined && result.status.quadroResumo && !result.status.requisitos){
        alert("Favor, não recarregar ou sair da página.\nOs pré-requisitos das matérias serão lidos.");
        //console.log(result.materias);
        let materias = result.materias;
        for(i = 0; i < result.materias.length; i++){
            if(!result.materias[i].aprovado){
                materiasNaoCursadas.push([i, result.materias[i].codigo]);
            }
            else{
                materiasCursadas.push(result.materias[i].codigo);
            }
        }

        for(i = 0; i < materiasNaoCursadas.length; i++){
            request('https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod='.concat(materiasNaoCursadas[i][1]), (error, response, html) => {
                if(!error && response.statusCode == 200){
                    let $ = cheerio.load(html) 
                    let codigoAtual = $('#datatable tbody tr').eq(1).children('td').text().trim()
                    let requisitos = $('#datatable tbody tr').eq(5)
                    let vetorGeral = []
                    requisitos.children('td').children().each((iterador, el) => {
                        if(el.tagName == 'a'){
                            let a
                            a = $(el).children('strong').text().trim()
                            vetorGeral.push(a);
                            //console.log(a);
                        }
                        if(el.tagName == 'strong'){
                            let b = $(el).text().trim()
                            vetorGeral.push(b)
                            //console.log(b)
                        }
                    })
                    //Implemetações para o vetorGeral
                    let vetorFinal = []
                    for(j = 0, vetorTemp = []; j < vetorGeral.length; j++){
                        if(j == 0){
                            vetorTemp.push(vetorGeral[j])
                        }
                        else if(vetorGeral[j] == "E"){
                            if(!vetorTemp.includes(vetorGeral[j-1])){
                                vetorTemp.push(vetorGeral[j-1]);
                            }
                            vetorTemp.push(vetorGeral[j+1]);
                        }
                        else if(vetorGeral[j] == "OU" || vetorGeral[j] == ""){
                            if(vetorTemp.length == 0){
                                vetorTemp.push(vetorGeral[j-1])
                            }
                            vetorFinal.push(vetorTemp);
                            vetorTemp = []
                        }
                        else if(vetorGeral[j] == " "){
                            vetorFinal.push(vetorTemp);
                        }
                    }
                    for(j = 0; j < materias.length; j++){
                        if(materias[j].codigo == codigoAtual){
                            materias[j].requisitos = vetorFinal;
                        }
                    }
                    //avaliarSePodeSerFeita(materias);
                    contador = contador + 1;
                    if(contador == materiasNaoCursadas.length){
                        avaliarSePodeSerFeita(materias);
                        result.status.requisitos = true;
                        chrome.storage.local.set({
                            status : result.status,
                            materias : materias
                        }, function(result){
                            console.log("Requisitos Salvos");
                            chrome.runtime.sendMessage({requisitos : true}, function(response){
                                console.log(response.resposta);
                                alert("Leitura dos pré-requisitos completa.");
                            });
                        })
                    }
                }
            })
        }
        //console.log(materias);
    }
})

function avaliarSePodeSerFeita(index){
    for(i = 0; i < index.length; i++){
        if(index[i].aprovado || index[i].requisitos.length == 0){
            index[i].podeSerFeita = true;
        }
        else if(!index[i].aprovado){
            for(j = 0; j < index[i].requisitos.length; j++){
                let count = 0;
                for(k = 0; k < index[i].requisitos[j].length; k++){
                    if(materiasCursadas.includes(index[i].requisitos[j][k])){
                        count++;
                    }
                }
                if(count == index[i].requisitos[j].length){
                    index[i].podeSerFeita = true;
                    break;
                }
                index[i].podeSerFeita = false;
            }
        }
    }
}
