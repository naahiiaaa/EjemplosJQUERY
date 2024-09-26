jQuery(document).ready(function(){
    //$("h1").text("Artean Goyena");
    $("#categories li:first").text("TL");
    $("#primerElemto").text("SMR");

    var nuevoCurso = $("<li>RJA</li>");
    $("#categories li:last").after(nuevoCurso)
});    