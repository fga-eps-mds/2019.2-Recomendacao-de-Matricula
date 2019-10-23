//var option = document.getElementById("lblOpcOpcao").innerText
//var student = document.getElementById("lblAluNome").innerText 
//var curse = document.getElementById("lblOpcDenominacao").innerText
var index = []
var codigo, aprovado;

//var materiasAprovadas = new Array();
//var materiasNaoAprovadas = new Array();
var leituraFeita

chrome.storage.local.get(["status"], function(result){
    if(result.status == null){
        leituraFeita = false;
    }
    else{
        leituraFeita = true;
    }
    console.log(leituraFeita)
    if(leituraFeita == false){
        let materias = $(".col-md-1")
        for(let mat of materias){
            if(mat.style.color == "rgb(85, 85, 85)"){
                //materiasAprovadas.push(mat.children[1].innerText)
                codigo = mat.children[1].innerText;
                aprovado = true;
                index.push({codigo, aprovado});
            }
            else if(mat.style.color == "rgb(244, 67, 54)"){
                if(mat.children[1].innerText != ""){
                    //materiasNaoAprovadas.push(mat.children[1].innerText)
                    codigo = mat.children[1].innerText;
                    aprovado = false;
                    index.push({codigo, aprovado});
                }
            }
        }
        //console.log(index);
        chrome.storage.local.set({
            status : 1,
            materias : index
        }, function(result){
            console.log("enviado");
        })
    }
})
/*
var teste 
chrome.storage.local.get(["materias"], function(result){
    teste = result.materias;
    teste[0].codigo = "123"
    chrome.storage.local.set({
        status : 1,
        materias : teste
    }, function(result){
        console.log("ok");
    })
})
*/
/*
console.log("Opção de curso: " + option)
console.log("Nome do curso: " + curse)
console.log("Nome do aluno: " + student)
console.log(materiasAprovadas)
console.log(materiasNaoAprovadas)
*/