
function LoadExportar(){

	//Leemos el DOM y obtenemos el JSON
	var texto = createJSONScene();
    var texto2 = createJSONSaveScene();

	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        }
    };
    
    xmlhttp.open("GET", "./php/guardarVarJSON.php?tipo=app&contenido="+texto, true);
    xmlhttp.send();


    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        }
    };
    
    xmlhttp.open("GET", "./php/guardarVarJSON.php?tipo=save&contenido="+texto2, true);
    xmlhttp.send();

	location.href='./php/opciones.php?seccion=exportarEscenario';
}

function backIndex(){
    location.href='../index.php';
}

function LoadNuevoEscenario(){
    location.href='./opciones.php?seccion=nuevoEscenario';
}

