//Variables
var activePoints = 0;
var maxPoints = 5;
var selectedPoint = 0;

//Funcion para cargar un punto nuevo
function loadNewPoint() {
    if (activePoints >= maxPoints)
        return;
    else {
        activePoints += 1;

        //Crear un punto nuevo
        var img = $("<img/>", { src : "./img/camera/control.jpg", alt : "Add more" });
        var label = $("<label/>", { for : "botonControl" + activePoints, class : "boton" });
        var input = $("<input/>", { type : "radio", id : "botonControl" + activePoints, onclick : "loadPoint(" + activePoints + ")" });
        var li = $("<li/>", { id : "control"+activePoints });
        //Aniadir el punto nuevo
        $("#controls").append(li.append(input, label.append(img)));

        loadPoint(activePoints);

        newPoint = new Point(activePoints, "./img/camera/controlT.png", 0, 0);
    }
}

//Funcion para seleccionar un punto ya creado
function loadPoint( id ) {
    selectedPoint = id;
    updateBordersP();
    $("#control" + id + " img").css("border", "3px solid #1C1C1C");
}

//Eliminar uel último punto
function removePoint() {
    // ------------------------------------- hacer
    $("#control"+activePoints).remove();

    if (selectedPoint == activePoints)
        selectedPoint = 1;

    activePoints-=1;
}

//Desactivar todos los bordes
function updateBordersP() {
    for(i = 1; i <= activePoints; i++){
        $("#control" + i + " img").css("border", "3px solid #73AD21");
    }
}

