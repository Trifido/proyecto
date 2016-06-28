
function EditarEscultura( nombre ){
	var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        }
    };

    xmlhttp.open("GET", "./guardarNombreEdicion.php?nombreEditado=" + nombre, false);
    xmlhttp.send();

    LoadEditarEscultura();
}

function EditarSala( nombre ){
	var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        }
    };

    xmlhttp.open("GET", "./guardarNombreEdicion.php?nombreEditado=" + nombre, false);
    xmlhttp.send();

    LoadEditarSala();
}

function EditarCuadro( nombre ){
	var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        }
    };

    xmlhttp.open("GET", "./guardarNombreEdicion.php?nombreEditado=" + nombre, false);
    xmlhttp.send();

    LoadEditarCuadro();
}