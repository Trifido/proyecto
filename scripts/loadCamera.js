//Variables
var activeCameras = 0;
var maxCameras = 5;
var selectedCamera = 0;

//Funcion para cargar una camara nueva
function loadNewCamera(){
    if (activeCameras >= maxCameras || !RoomInit)
        return;
    else {
        activeCameras += 1;
        $("#camera"+activeCameras+" img").css("visibility","visible");
        loadCamera(activeCameras);

        newCamera = new Camera("camara"+activeCameras, "./img/camera/cameraT.png", 0, 0);
    }
}

//Funcion para seleccionar una camara ya creada
function loadCamera( id ){
    if ( isVisible(id) ) {
        selectedCamera = id;

        updateBordersC(); //Desactiva todos
        $("#camera" + id + " img").css("border", "3px solid #1C1C1C"); //Activa el especifico

        //updateVisibilityC();

        activateControl(); // Viewpoints
    }
    else
        return;
}

function removeCamera(id) {
    $("#camera"+id+" img").css("visibility","hidden");
}

//Dice si una camara esta visible o no
function isVisible( id ){
    var visible = $("#camera"+id+" img").css("visibility");

    if (visible == "visible")
        return true;
    else
        return false;
}

//Desactivar todos los bordes
function updateBordersC(){
    for (i=1; i<=activeCameras;i++){
        $("#camera"+i+" img").css("border", "3px solid #73AD21");
    }
}

//Desactivar todas las visibilidades
function updateVisibilityC(){
    /*$(".camera").each(function( i, obj ) {
        obj.setVisibility("visible");
        if (i == (selectedCamera-1)){
            window.alert("Hola: "+ i + " asd " + selectedCamera)
            }
        else{
            obj.setVisibility("hidden");}
    });*/
}

//Activa la caja de los puntos de control
function activateControl(){
    $("#box_control").css("visibility", "visible");
}
