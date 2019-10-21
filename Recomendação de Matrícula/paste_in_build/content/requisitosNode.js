const request = require('request');
const cheerio = require('cheerio');
let pre = ""
request('https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod=193674', (error, response, html) => {
    if(!error && response.statusCode == 200){
        let $ = cheerio.load(html);
        //console.log($("document"))
        let requisitos = $('#datatable tbody tr').eq(5)
        //let a = requisitos.children('td').children('strong')
        //let b = requisitos.children('td').children('a').children('strong')
        requisitos.children('td').children().each((i, el) => {
            //console.log(el.tagName)
            if(el.tagName == 'a'){
                let a = $(el).children('strong').text().trim()
                console.log(a)
            }
            else if(el.tagName == 'strong'){
                let b = $(el).text().trim()
                console.log(b)
            }
            /*if($(el).children('a')){
                codigo[i] = $(el).children('a').children('strong').text()
                let logic = $(el).children('strong').text()               
            }*/
        })
    }
});



/*var materias

chrome.storage.local.get(["materiasR"], function(result){ 
    //materias = result.materiasR
    for(codigo of result.materiasR){
        $.get( "https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod=".concat(codigo), function( data ) {
            console.log(data)
        });
    }
})
*/