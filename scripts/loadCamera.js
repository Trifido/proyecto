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

        //Crear una camara
        var img = $("<img/>", { src : "./img/camera/camera.jpg", alt : "Camera" });
        var label = $("<label/>", { for : "botonCamera" + activeCameras, class : "boton" });
        var input = $("<input/>", { type : "radio", id : "botonCamera" + activeCameras, onclick : "loadCamera(" + activeCameras + ")" });
        var li = $("<li/>", { id : "camera"+activeCameras });
        //Aniadir la camara
        $("#cameras").append(li.append(input, label.append(img)));

        /*$("#camera"+activeCameras+" img").css("visibility","visible");*/
        loadCamera(activeCameras);

        newCamera = new Camera("camara"+activeCameras, "./img/camera/cameraT.png", 0, 0);
    }
}

//Funcion para seleccionar una camara ya creada
function loadCamera( id ){
    selectedCamera = id;
    updateBordersC();
    $("#camera" + id + " img").css("border", "3px solid #1C1C1C");
    activateControl();
}

function removeCamera( id ) {
    $("#camera"+id).remove();

    if (selectedCamera == id)
        loadCamera(1);

    actualizarIndices( id );

    activeCameras -= 1;
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

//Cambia los nombres de las etiquetas correspondientes al índice anterior
//Por ejemplo: camara2 -> camara1
function actualizarIndices( indiceEliminado ) {
    for (i = indiceEliminado; i <= activeCameras; i++) {
        var indice = (i - 1);

        var nuevoNombre = 'botonCamera' + indice;
        $('#camera' + i + " input").attr('id', nuevoNombre);
        $('#camera' + i + " label").attr('for', nuevoNombre);

        nuevoNombre = 'loadCamera(' + indice + ')';
        $('#camera' + i + " input").attr('onclick', nuevoNombre);

        nuevoNombre = 'camera' + indice;
        $('#camera' + i).attr('id', nuevoNombre);
    }
}

//Activa la caja de los puntos de control
function activateControl(){
    $("#box_control").css("visibility", "visible");
}
