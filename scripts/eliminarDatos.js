
function EliminarEscenario( nombre ){
	var xmlhttp = new XMLHttpRequest();
	var ajaxResponse;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ajaxResponse = xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", "./deleteEscenario.php?nameEscenario=" + nombre, false);
    xmlhttp.send();

    alert(ajaxResponse);

    LoadMostrarEscenarios();
}

function EliminarEscultura( nombre ){
	var xmlhttp = new XMLHttpRequest();
	var ajaxResponse;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ajaxResponse = xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", "./deleteEscultura.php?nameEscultura=" + nombre, false);
    xmlhttp.send();

    alert(ajaxResponse);

    LoadMostrarEsculturas();
}

function EliminarSala( nombre ){
	var xmlhttp = new XMLHttpRequest();
	var ajaxResponse;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ajaxResponse = xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", "./deleteSala.php?nameSala=" + nombre, false);
    xmlhttp.send();

    alert(ajaxResponse);

    LoadMostrarSalas();
}

function EliminarCuadro( nombre ){
	var xmlhttp = new XMLHttpRequest();
	var ajaxResponse;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ajaxResponse = xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", "./deleteCuadro.php?nameCuadro=" + nombre, false);
    xmlhttp.send();

    alert(ajaxResponse);

    LoadMostrarCuadros();
}