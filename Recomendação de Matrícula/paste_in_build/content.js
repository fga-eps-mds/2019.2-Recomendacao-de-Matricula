var option = document.getElementById("lblOpcOpcao").innerText
var student = document.getElementById("lblAluNome").innerText 
var curse = document.getElementById("lblOpcDenominacao").innerText
var quadroResumo = document.getElementsByClassName("col-md-1 col-sm-1 col-xs-1")
var materiasAprovadas = new Array();
var materiasNaoAprovadas = new Array();

var aux =""
for(var i = 0; i < 107; i++){ // for para passar por todas as materias do quadro resumo
    var x = quadroResumo[i].textContent[0]
    if(x === "0" || x === "1" || x === "2" || x === "3" || x === "4" || x === "5" || x === "6" || x === "7" || x === "8" || "x" === "9"){ // checa se ha alguma materia
        if(quadroResumo[i].style.color == "rgb(85, 85, 85)"){
            if(quadroResumo[i].textContent[12] == "*"){ // se for uma materia em andamento
                for(var j=23; j<29; j++){
                    aux += quadroResumo[i].textContent[j]
                }
                materiasNaoAprovadas[materiasNaoAprovadas.length] = aux
                aux=""
            } else { // se for uma materia aprovada
                for(var j=23; j<29; j++){
                    aux += quadroResumo[i].textContent[j]
                }
                materiasAprovadas[materiasAprovadas.length] = aux
                aux=""
            }
        } else { // se for uma materia sem aprovação
            for(var j = 21; j < 27; j++){
                aux += quadroResumo[i].textContent[j]
            }
            materiasNaoAprovadas[materiasNaoAprovadas.length] = aux
            aux = ""
        }
    }
}

console.log("Opção de curso: " + option)
console.log("Nome do curso: " + curse)
console.log("Nome do aluno: " + student)
console.log(materiasAprovadas)
console.log(materiasNaoAprovadas)
