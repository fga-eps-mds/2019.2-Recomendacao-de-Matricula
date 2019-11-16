/*chrome.browserAction.onClicked.addListener(function(activeTab){
    var quadroResumoURL = "https://matriculaweb.unb.br/graduacao/sec/qr.aspx";
    chrome.tabs.create({ url: quadroResumoURL });
});
*/

chrome.runtime.onMessage.addListener(
    function(request, sender, response){
        if(request["requisitos"] == true){
            response({resposta : "requisitos lidos"});
            //console.log(response)
        }
        if(request["quadroResumo"] == true){
            response({resposta : "Quadro resumo lido"});
        }
        if(request["historico"] == true){
            response({resposta : "Historico lido"})
        }
        if(request["login"] == true){
            response({estado : "Usuário logado"});
        }
        else if(request["login"] == false){
            response({estado : "Usuário não está logado"});
        }
    }
)

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
