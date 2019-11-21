var requisitos;
var quadroResumo;
var historico;
var login;
var oferta;

chrome.runtime.onMessage.addListener(
    function(request, sender, response){
        if(request["requisitos"] == true){
            response({resposta : "requisitos lidos"});
            //console.log(response)
            requisitos = true;
        }
        if(request["quadroResumo"] == true){
            response({resposta : "Quadro resumo lido"});
            quadroResumo = true;
        }
        if(request["historico"] == true){        
            response({resposta : "Historico lido"});
            historico = true;
        }
        if(request["oferta"] == true){        
            response({resposta : "Página de oferta acessada"});
            oferta = true;
        }
        if(request["login"] == true){
            response({estado : "Usuário logado"});
            login = true;
        }
        else if(request["login"] == false){
            response({estado : "Usuário não está logado"});
            login = false;
            requisitos = false;
            quadroResumo = false;
            historico = false;
            oferta = false;
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
