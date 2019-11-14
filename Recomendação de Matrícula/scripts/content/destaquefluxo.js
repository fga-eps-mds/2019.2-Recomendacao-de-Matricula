let elements = document.querySelectorAll("tr"); //Seleciona as materias da tabela
let orangeHex = "#ff00d6" //Cor de destaque para matérias que não podem ser cursadas ainda
let greenHex = "#ceffca" //Cor de destaque de materias ja cursadas
let yellowHex = "#ffff00" //Cor de destaque de materias nao cursadas

chrome.storage.local.get(["status", "materias"], function(result){
    if (result.status != null) {
        let materiasCursadas = []; //Materias já cursadas as quais o aluno já está aprovado ou fazendo
        let materiasRequisitosAtendidos = []; //Materias não cursadas que atendem aos pré-requisitos
        let materiasRequisitosNaoAtendidos = []; //Materias não cursadas que não atendem os pré-requisitos

        for (i = 0; i < result.materias.length; i++) {
            if (result.materias[i].aprovado) {
                materiasCursadas.push(result.materias[i].codigo);
            }
            else if (!result.materias[i].aprovado && result.materias[i].podeSerFeita) {
                materiasRequisitosAtendidos.push(result.materias[i].codigo);
            }
            else if (!result.materias[i].aprovado && !result.materias[i].podeSerFeita) {
                materiasRequisitosNaoAtendidos.push(result.materias[i].codigo)
            }
        }

        for(elt of elements) {
            let codigoDaMateria = elt.querySelectorAll("td")[3]
            if(codigoDaMateria){
                console.log(codigoDaMateria)
                if (materiasCursadas.includes(codigoDaMateria.innerText)) {
                    elt.style['background-color'] = greenHex;
                } else if (materiasRequisitosAtendidos.includes(codigoDaMateria.innerText)) {
                    elt.style['background-color'] = yellowHex;
                } else if (materiasRequisitosNaoAtendidos.includes(codigoDaMateria.innerText)) {
                    elt.style['background-color'] = orangeHex;
                }
            }
        }
    }
})
