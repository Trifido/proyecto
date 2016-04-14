//Variables
var maxPoints = 10; //Maximo de puntos por camara

var activePoints = []; // Vector

var selectedPoint = 0; //?????????????????????????????????????????????????????????????????????????????????????

//Funcion para cargar un punto nuevo
function loadNewPoint() {
    if (activePoints[selectedCamera-1] >= maxPoints || !RoomInit)
        return;
    else {
        activePoints[selectedCamera-1] += 1;

        // Nombre: "puntoX_Y". X es la cámara a la que pertenece el punto. Y es el número del punto.
        newPoint = new Point(activePoints[selectedCamera-1], "./img/camera/controlT.png", 0, 0);
    }

    $('#btnRemPoint').removeAttr('disabled');
}

//Eliminar uel último punto
function removePointLine() {
    removePoint(activePoints[selectedCamera-1]);
    removeLine(activePoints[selectedCamera-1]);

    activePoints[selectedCamera-1] -= 1;

    if (activePoints[selectedCamera-1] == 0)
        $('#btnRemPoint').attr('disabled','disabled');
}

