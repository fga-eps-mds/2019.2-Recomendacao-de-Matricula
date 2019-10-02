//Esse script vai passar as infomações necessárias para a extensão funcionar corretamente com
//a pop-up
console.log('jonas brothers');

function DOMisLoaded(){
    console.log('working');
    let message = {
        status : 'loaded'
    };
    chrome.runtime.sendMessage(message);
}


/*
Chamando a função que passa pro background.js que a página foi carregada
e então o background.js vai checar se a página é do Matrícula Web e vai
passar a informação para o script da popup
para que a popup cheque o state da extensão e veja se o usuário está/estava
já acessando o Matricula Web
*/
//Tentei implementar usando 'document.addEventListener('DOMContentLoaded', func);' mas não funcionou
DOMisLoaded();