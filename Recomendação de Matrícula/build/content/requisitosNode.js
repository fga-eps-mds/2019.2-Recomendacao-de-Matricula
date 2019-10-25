const request = require('request');
const cheerio = require('cheerio');
let pre = ""
let materiasNaoCursadas = []
let teste = []
chrome.storage.local.get(["materias"], function(result){
    for(materia of result.materias){
        if(!materia.aprovado){
            materiasNaoCursadas.push(materia.codigo);
        }
    }  
    for(codigo of materiasNaoCursadas){                                           //193674
        request('https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod='.concat(codigo), (error, response, html) => {
            if(!error && response.statusCode == 200){
                let $ = cheerio.load(html)

                let requisitos = $('#datatable tbody tr').eq(5)
                
                requisitos.children('td').children().each((i, el) => {
                    if(el.tagName == 'a'){
                        let a = $(el).children('strong').text().trim()
                        teste.push(a);
                    }
                    else if(el.tagName == 'strong'){
                        let b = $(el).text().trim()
                        //console.log(b)
                    }
                    
                })
            }
        })
    }
})

console.log(teste)