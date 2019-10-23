let elements = document.querySelectorAll("tr"); //Seleciona as materias da tabela
let greenHex = "#ceffca" //Cor de destaque de materias ja cursadas
let yellowHex = "#ffff00" //Cor de destaque de materias nao cursadas

chrome.storage.local.get(["status", "materias"], function(result){
    if (result.status != null) {
        let materiasCursadas = [] //Array de materias ja cursadas
        let materiasNaoCursadas = [] //Array de materias nao cursadas

        for (dados of result.materias) {
            if (dados.aprovado) {
                materiasCursadas.push(dados.codigo);
            }
            else {
                materiasNaoCursadas.push(dados.codigo);
            }
        }

        console.log(materiasCursadas)

        for(elt of elements) {
            let codigoDaMateria = elt.innerText.slice(0, 6)
            if (materiasNaoCursadas.includes(codigoDaMateria)) {
                elt.style['background-color'] = yellowHex;
            } else if (materiasCursadas.includes(codigoDaMateria)) {
                elt.style['background-color'] = greenHex;
            }
        }
    }
})
