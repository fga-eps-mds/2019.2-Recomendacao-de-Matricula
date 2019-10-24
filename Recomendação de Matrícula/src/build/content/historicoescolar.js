var elements = document.querySelectorAll("tr");

for (element of elements) {
    console.log(element.textContent[0]);
    if (!isNaN(parseInt(element.textContent[0]))) { //Seleciona apenas as linhas da tabela de materias
        element.style['background-color'] = "#ceffca";
    }
}