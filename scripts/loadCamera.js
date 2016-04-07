//Variables
var activeCameras = 0;
var maxCameras = 4;
var selectedCamera = 0;

//Funcion para cargar una camara nueva
function loadNewCamera(){
    if (activeCameras >= maxCameras || !RoomInit)
        return;
    else {
        activePoints.push(0);
        activeCameras += 1;

        //Crear una camara
        var img = $("<img/>", { src : "./img/camera/camera.png", alt : "Image", class: "img-responsive", onclick : "loadCamera(" + activeCameras + ")" });
        var a = $("<a/>", {});
        var div = $("<div/>", {class: "col-xs-3", id : "camera"+activeCameras });
        //Aniadir la camara
        $("#cameras").append(div.append(a.append(img)));

        loadCamera(activeCameras);

        newCamera = new Camera("camara"+activeCameras, "./img/camera/cameraT.png", 0, 0);
    }
}

//Funcion para seleccionar una camara ya creada
function loadCamera( id ){
    selectedCamera = id;
    updateBorders();
    $("#camera" + id + " img").css("border", "2px solid #D80000");
}

function removeCamera( id ) {
    $("#camera"+id).remove();

    if (selectedCamera == id)
        loadCamera(1);

    actualizarIndices( id );

    activeCameras -= 1;
    activePoints.splice( id-1 , 1 );
}

//Desactivar todos los bordes
function updateBorders(){
    for (i=1; i<=activeCameras; i++){
        $("#camera"+i+" img").css("border", "0px solid #D80000");
    }
}

//Cambia los nombres de las etiquetas correspondientes al índice anterior
//Por ejemplo: camara2 -> camara1
function actualizarIndices( indiceEliminado ) {
    for (i = indiceEliminado; i <= activeCameras; i++) {
        var indice = (i - 1);

        var nuevoNombre = 'loadCamera(' + indice + ')';
        $('#camera' + i + " img").attr('onclick', nuevoNombre);

        nuevoNombre = 'camera' + indice;
        $('#camera' + i).attr('id', nuevoNombre);
    }
}
