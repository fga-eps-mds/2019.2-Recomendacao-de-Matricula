const request = require('request');
const cheerio = require('cheerio');
let pre = ""             
chrome.storage.local.get(["materiasR"], function(result){  
    for(codigo of result.materiasR){                                           //193674
        request('https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod='.concat(codigo), (error, response, html) => {
            if(!error && response.statusCode == 200){
                let $ = cheerio.load(html)

                let requisitos = $('#datatable tbody tr').eq(5)
                
                requisitos.children('td').children().each((i, el) => {
                    if(el.tagName == 'a'){
                        let a = $(el).children('strong').text().trim()
                        console.log(a)
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