console.log("oferta individual")

let elements = document.querySelectorAll("tr"); //Seleciona as materias da tabela
console.log(elements)

let codigosExemplo = ["104779", "113476", "201341", "208213"] //Exemplos para teste

for(elt of elements) {
    let codigoDaMateria = elt.innerText.slice(0, 6)
    
    if (codigosExemplo.includes(codigoDaMateria)) {
        elt.style['background-color'] = '#00CED1';
    }
}
