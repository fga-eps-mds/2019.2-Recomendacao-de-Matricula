/*chrome.browserAction.onClicked.addListener(function(activeTab){
    var quadroResumoURL = "https://matriculaweb.unb.br/graduacao/sec/qr.aspx";
    chrome.tabs.create({ url: quadroResumoURL });
});
*/
var dados = null
var lido = false

chrome.runtime.onMessage.addListener(
    function(request, sender, response){
        if(request["leitura"] == "isScrapped"){
            response({valor : lido})
            //console.log(response)
        }
        if(request["pedido"] == "ler"){
            dados = request
            console.log(dados)
            lido = true
            response({text : "lido"})
        }
    }
)
/*
chrome.runtime.onMessage.addListener(
    function(request, sender, response){
        if(a == null){
            a = request
        }
        return true
    }
)
*/
window.isMatriculaWeb = false;
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse){ //Função que é ativada caso seja recebida uma mensagem de que uma pagina foi carregada
    console.log(request);
    let aux = false;    
    chrome.tabs.query({
        'url' : "*://matriculaweb.unb.br/*", /* Padrão de url do domínio do matrícula web */
        'active': true,
        'lastFocusedWindow': true},
        function(tabs){ /*Função que executa caso a url seja compativel com o padrão*/
                let url = tabs[0].url;                            
                console.log(url);
                window.isMatriculaWeb = true;
                aux = true;
        });
    if(aux===false){
        window.isMatriculaWeb = false;
    }    
}

//let bgpage = chrome.extension.getBackgroundPage();    
//let isMatriculaWeb = bgpage.isMatriculaWeb;
