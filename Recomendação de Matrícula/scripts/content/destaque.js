let elements = document.querySelectorAll("tr"); //Seleciona as materias da tabela
let purpleHex = "#ff00d6" //Cor de destaque para matérias que não podem ser cursadas ainda
let greenHex = "#ceffca" //Cor de destaque de materias ja cursadas
let yellowHex = "#ffff00" //Cor de destaque de materias nao cursadas
let redHex = "#ff4000" //Cor de destaque para materias em risco de desligamento

chrome.storage.local.get(["status", "materias", "materiasHistorico"], function(result){
    if (result.status) {
        let materiasCursadas = []; //Materias já cursadas as quais o aluno já está aprovado ou fazendo
        let materiasRequisitosAtendidos = []; //Materias não cursadas que atendem aos pré-requisitos
        let materiasRequisitosNaoAtendidos = []; //Materias não cursadas que não atendem os pré-requisitos
        let materiasEmCondicao = [] //Materias em risco de desligamento

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
        
        for (materia of result.materiasHistorico) {
            if (!materia.aprovado && materia.reprovacoes >= 2) {
                materiasEmCondicao.push(materia.codigo);
            }
        } 

        for(elt of elements) {
            let codigoDaMateria = elt.innerText.slice(0, 6)
            if (materiasCursadas.includes(codigoDaMateria)) {
                elt.style['background-color'] = greenHex;
            } else if (materiasEmCondicao.includes(codigoDaMateria)){
                elt.style['background-color'] = redHex;
            } else if (materiasRequisitosAtendidos.includes(codigoDaMateria)) {
                elt.style['background-color'] = yellowHex;
            } else if (materiasRequisitosNaoAtendidos.includes(codigoDaMateria)) {
                elt.style['background-color'] = purpleHex;
            }
        }
    }
})
