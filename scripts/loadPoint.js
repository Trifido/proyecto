//Variables
var maxPoints = 10; //Maximo de puntos por camara

var activePoints = []; // Vector

//Funcion para cargar un punto nuevo
function loadNewPoint() {
    if (activePoints[selectedCamera-1] >= maxPoints || !RoomInit)
        return;
    else {
        activePoints[selectedCamera-1] += 1;

        // JS - Actualizar canvas
            // Nombre: "puntoX_Y". X es la cámara a la que pertenece el punto. Y es el número del punto.
            newPoint = new Point(activePoints[selectedCamera-1], "./img/camera/controlT.png", 0, 0);

        // HTML - Crear la ficha
            createFilePoint(activePoints[selectedCamera-1]); // Con el ID del punto a crear
    
            // Actualizar la ficha
                // Camara
            $('#numPoint').val(activePoints[selectedCamera-1]); // Actualizar el número de puntos
                // Coordenadas Punto
            $('.point').each(function (i, obj) { //Buscar el objeto SVG
                var nombre = obj.getAttributeNS(null, 'nombre'); //Indice
                var id = nombre.substr(nombre.length-1);
                if ('punto'+selectedCamera+'_' + id == obj.getAttributeNS(null, 'nombre'))
                    updateFileCoords('point', nombre, obj.getAttributeNS(null, 'cX'), obj.getAttributeNS(null, 'cY'));
            });

        // AJAX - Interaccion con DB
            // Crear punto
        var variables = 'idPoint='+activePoints[selectedCamera-1]+'&idCamera='+selectedCamera;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', './php/cameras/createPoint.php?'+variables, true);
        xmlhttp.send();

            // Actualizar puntos
        updatePointsTime();

        //Activar boton "eliminar"
        $('#btnRemPoint').removeAttr('disabled');
        //Eliminar alerta
        $('#noPointAlert').css('display', 'none');
    }
}

//Eliminar uel último punto
function removePointLine() {
    removePoint(activePoints[selectedCamera-1]); //Eliminar punto svg
    removeLine(activePoints[selectedCamera-1]); //Eliminar linea svg

    //Eliminar la ficha
    removeFilePoint(activePoints[selectedCamera-1]); //Con el ID del punto a borrar

    // AJAX - Interaccion con DB
        // Borrar punto
    var variables = 'idPoint='+activePoints[selectedCamera-1]+'&idCamera='+selectedCamera;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', './php/cameras/deletePoint.php?'+variables, true);
    xmlhttp.send();

    activePoints[selectedCamera-1] -= 1;

        // Actualizar puntos
    updatePointsTime();

    // Actualizar ficha
        // Camara
    $('#numPoint').val(activePoints[ selectedCamera - 1 ]); // Actualizar el número de puntos

    if (activePoints[selectedCamera-1] == 0) {
        $('#btnRemPoint').attr('disabled', 'disabled'); //Desactivar boton "eliminar"
        $('#noPointAlert').css('display', ''); //Activar alerta
    }
}

// Actualiza el valor del tiempo de los puntos en relación al tiempo total de la cámara
function updatePointsTime() {
    var timeAux = parseInt($('#durationCamera').val()) / parseInt(activePoints[selectedCamera-1]);
    for (i = 1; i <= activePoints[selectedCamera-1]; i++) {
        var timePos = (timeAux * i).toFixed(4);

        updateFilePoint( i, timePos ); // Actualizar en la ficha

        var variables = 'idPoint='+activePoints[i-1]+'&idCamera='+selectedCamera
            +'&timePos='+timePos;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', './php/cameras/updatePointTime.php?'+variables, true);
        xmlhttp.send();
    }
}
