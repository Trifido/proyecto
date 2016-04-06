//Variables
var activePoints = 0;
var maxPoints = 4;
var selectedPoint = 0;

//Funcion para cargar un punto nuevo
function loadNewPoint() {
    if (activePoints >= maxPoints)
        return;
    else {
        activePoints += 1;

        loadPoint(activePoints);

        newPoint = new Point(activePoints, "./img/camera/controlT.png", 0, 0);
    }
}

//Funcion para seleccionar un punto ya creado
function loadPoint( id ) {
    selectedPoint = id;
}

//Eliminar uel último punto
function removePointLine() {
    if (selectedPoint == activePoints)
        loadPoint(1);

    removePoint(activePoints);
    removeLine(activePoints);

    activePoints-=1;
}

