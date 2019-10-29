const request = require('request');
const cheerio = require('cheerio');
let materiasNaoCursadas = []
let requisitosMateriasNaoCursadas = []
chrome.storage.local.get(["materias"], function(result){
    //console.log(result.materias);
    let materias = result.materias;
    for(i = 0; i < result.materias.length; i++){
        if(!result.materias[i].aprovado){
            materiasNaoCursadas.push([i, result.materias[i].codigo]);
        }
    }

    for(i = 0; i < materiasNaoCursadas.length; i++){
        request('https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod='.concat(materiasNaoCursadas[i][1]), (error, response, html) => {
            if(!error && response.statusCode == 200){
                let $ = cheerio.load(html) 
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
                }
                //console.log(vetorFinal)
                requisitosMateriasNaoCursadas.push(vetorFinal);
            }
            //console.log(requisitosMateriasNaoCursadas.length)
            if(requisitosMateriasNaoCursadas.length == materiasNaoCursadas.length){
                completarRequisitos(requisitosMateriasNaoCursadas, materias, materiasNaoCursadas)
            }
        })
    }
})

function completarRequisitos(requisitos, index, materiasNaoCursadas){
    for(i = 0, j = 0; i < index.length && j != materiasNaoCursadas.length; i++){
        if(index[i].codigo == materiasNaoCursadas[j][1]){
            index[i].requisitos = requisitos[j]
            j++
            //console.log(index[i])
        }
    }
    chrome.storage.local.set({
        materias : index
    }, function(result){
        console.log("requisitos salvos");
    })
}
