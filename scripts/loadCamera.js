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
        var img = $('<img/>', { src : './img/camera/camera.png', alt : 'Image', class: 'img-responsive', onclick : 'loadCamera(' + activeCameras + ')' });
        var a = $('<a/>', {});
        var div = $('<div/>', {class: 'col-xs-3', id : 'camera'+activeCameras });
        //Aniadir la camara
        $('#cameras').append(div.append(a.append(img)));

        newCamera = new Camera('camara'+activeCameras, './img/camera/cameraT.png', 0, 0);

        loadCamera(activeCameras);
    }
    
    $('#btnAddPoint').removeAttr('disabled'); 
    $('#btnRemPoint').attr('disabled','disabled');
}

//Funcion para seleccionar una camara ya creada
function loadCamera( id ){
    selectedCamera = id;

    //Actualizar el canvas
    updateCamera();
    updatePoints();
    updateLines();

    //Seleccionar en el menú
    updateCameraBorder( id );

    // Actualizar la ficha
        // Camara
    $('.camera').each(function (i, obj) { //Buscar el objeto SVG
        var aux = obj.getAttributeNS(null, 'nombre').substr(6, 1); //Indice
        if (selectedCamera == aux) updateFileCoords('camera', obj.getAttributeNS(null, 'cX'), obj.getAttributeNS(null, 'cY'));
    });
        //Puntos
    $('#pointAccordion').empty(); //Limpia todos los hijos

    for (i = 0; i < activePoints[selectedCamera-1]; i++) //Crea los hijos correspondientes (no se actualizan aun)
        createFilePoint(i+1);

    // Actualizar botones de la interfaz
    if (activePoints[selectedCamera-1] > 0)
        $('#btnRemPoint').removeAttr('disabled');
    else
        $('#btnRemPoint').attr('disabled','disabled');
}

function removeCamera( id ) {
    $('#camera'+id).remove();

    updateCameraIndex( id );

    activeCameras -= 1;
    activePoints.splice( id-1 , 1 );

    if (selectedCamera == id)
        loadCamera(1);

    if (activeCameras == 0)
        $('#btnAddPoint').attr('disabled','disabled');
}

//Activa el borde en el carousel para la cámara activa
function updateCameraBorder( id ){
    for (i=1; i<=activeCameras; i++){
        $('#camera'+i+' img').css('border', '0px solid #D80000');
    }
    $('#camera' + id + ' img').css('border', '2px solid #D80000');
}

// Activar los puntos de control correspondientes a la camara cargada
function updateCamera() {
    $('.camera').each(function (i, obj) {
        var aux = obj.getAttributeNS(null, 'nombre').substr(6, 1); //Indice de la camara a la que pertenece

        if (selectedCamera == aux){ // Traer al frente
            document.getElementById('camera_level').appendChild(obj);
        }
        else{ //Llevar al fondo
            document.getElementById('hidden_level').appendChild(obj);
        }
    });
}

// Activar los puntos de control correspondientes a la camara cargada
function updatePoints() {
    $('.point').each(function (i, obj) {
        var aux = obj.getAttributeNS(null, 'nombre').substr(5, 1); //Indice de la camara a la que pertenece

        if (selectedCamera == aux){ // Traer al frente
            document.getElementById('point_level').appendChild(obj);
        }
        else{ //Llevar al fondo
            document.getElementById('hidden_level').appendChild(obj);
        }
    });
}

// Activar los puntos de control correspondientes a la camara cargada
function updateLines() {
    $('.line').each(function (i, obj) {
        var aux = obj.getAttributeNS(null, 'name').substr(5, 1); //Indice de la linea a la que pertenece

        if (selectedCamera == aux){ // Traer al frente
            document.getElementById('line_level').appendChild(obj);
        }
        else{ //Llevar al fondo
            document.getElementById('hidden_level').appendChild(obj);
        }
    });
}

//Cambia los nombres de las etiquetas correspondientes al índice anterior
//Por ejemplo: camara2 -> camara1
function updateCameraIndex( deletedIndex ) {
    for (i = deletedIndex; i <= activeCameras; i++) {
        var indice = (i - 1);

        var nuevoNombre = 'loadCamera(' + indice + ')';
        $('#camera' + i + ' img').attr('onclick', nuevoNombre);

        nuevoNombre = 'camera' + indice;
        $('#camera' + i).attr('id', nuevoNombre);
    }
}
