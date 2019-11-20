let usuario = document.querySelector(".user-info");

if(usuario){
    //console.log("usuário logado");
    chrome.runtime.sendMessage({login : true}, function(response){
        console.log(response.estado);
    })
}
else{
    //console.log("usuário não logado");
    chrome.runtime.sendMessage({login : false}, function(response){
        console.log(response.estado);
        chrome.storage.local.clear()
    })
}