$("body").append("<div id = \"mds\"></div>");

var option = "193674"
gettingInfo(option);

function gettingInfo(option){
    url = "https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod=" + option
    $("#mds").load(url + " #datatable tbody tr", function(){
        console.log("ok")
    })
}

//console.log(celula)