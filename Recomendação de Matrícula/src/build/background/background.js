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