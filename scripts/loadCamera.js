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

        // HTML - Actualizar menú
            var img = $('<img/>', {style: "position: relative;", src : './img/camera/camera.png', alt : 'Image', class: 'img-responsive', onclick : 'loadCamera(' + activeCameras + ')'});
            var a = $('<div/>', {});
            var p = $('<p/>', {text: activeCameras, style: "pointer-events: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 500%; color: white; opacity: 0.75;"});
            var div = $('<div/>', {class: 'col-xs-3', id : 'camera'+activeCameras});
            $('#cameras').append(div.append(a.append(img), p));

        // JS - Actualizar canvas
            newCamera = new Camera('camara'+activeCameras, './img/camera/cameraT.png', 0, 0);

        // AJAX - Interaccion con DB
            var variables = 'idCamera='+activeCameras;

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    // Cargar la camara recien creada
                    loadCamera(activeCameras);
                }
            };
            xmlhttp.open('GET', './php/cameras/createCamera.php?'+variables, true);
            xmlhttp.send();
    }

    // HTML - Actualizar botones
        $('#btnRemCamera').removeAttr('disabled');
        $('#btnAddPoint').removeAttr('disabled');
        $('#btnRemPoint').attr('disabled','disabled');
        $('#btnSubmit').removeAttr('disabled');
        //Eliminar alerta
        $('#noCameraAlert').css('display', 'none');
}

//Funcion para seleccionar una camara ya creada
function loadCamera( id ) {
    selectedCamera = id;

    //Actualizar el canvas
    updateCamera();
    updatePoints();
    updateLines();

    //Seleccionar en el menú
    updateCameraBorder(id);

    // Actualizar la ficha
    // Camara
    $('#idCamera').val(id); // Actualizar valor oculto del formulario con la cámara activa
    $('#numPoint').val(activePoints[selectedCamera-1]); // Actualizar el número de puntos
    $('#durationCamera').val(10);
    // Actualizar las coordenadas
    $('.camera').each(function (i, obj) { //Buscar el objeto SVG
        var id = obj.getAttributeNS(null, 'nombre').substr(6, 1); //Indice
        if (selectedCamera == id) updateFileCoords('camera', '', obj.getAttributeNS(null, 'cX'), obj.getAttributeNS(null, 'cY'));
    });
    //Puntos
    $('#pointAccordion').empty(); //Limpia todos los hijos

    for (i = 0; i < activePoints[selectedCamera-1]; i++) { //Crea los hijos correspondientes
        var id = i + 1;

        createFilePoint(id);

        // Se desactiva la modificación de tiempo para el primer y último punto
        if (id == activePoints[selectedCamera-1]) $('#timePoint'+id).attr('readonly', true);
    }

    // Actualizar botones de la interfaz
    if (activePoints[selectedCamera-1] > 0) {
        $('#btnRemPoint').removeAttr('disabled');
        $('#noPointAlert').css('display', 'none'); // Desactivar alerta
    }
    else {
        $('#btnRemPoint').attr('disabled', 'disabled');
        $('#noPointAlert').css('display', ''); //Activar alerta
    }
}

function removeSelectedCamera() {
    removeElement("camera", "camara"+selectedCamera);
}

function removeCamera( id ) {
    $('#camera'+id).remove();

    // AJAX - Interaccion con DB
    var variables = 'idCamera='+id;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            updateCameraIndex( id ); //Acualizar los índices

            activeCameras -= 1;
            activePoints.splice( id-1 , 1 );

            if (selectedCamera == id)
                loadCamera(1);

            if (activeCameras == 0) {
                // Botones
                $('#btnRemCamera').attr('disabled', 'disabled');
                $('#btnAddPoint').attr('disabled', 'disabled');
                $('#btnSubmit').attr('disabled', 'disabled');

                $('#cameraForm').trigger("reset"); // Resetea el formulario entero

                $('#noCameraAlert').css('display', ''); //Activar alerta
            }
        }
    };
    xmlhttp.open('GET', './php/cameras/deleteCamera.php?'+variables, true);
    xmlhttp.send();
}

//Activa el borde en el carousel para la cámara activa
function updateCameraBorder( id ){
    for (i=1; i<=activeCameras; i++){
        $('#camera'+i+' img').css('opacity', '0.5');
    }
    $('#camera'+id+' img').css('opacity', '1');
}

// Activar los puntos de control correspondientes a la camara cargada
function updateCamera() {
    $('.camera').each(function (i, obj) {
        var id = obj.getAttributeNS(null, 'nombre').substr(6, 1); //Indice de la camara a la que pertenece

        if (selectedCamera == id){ // Traer al frente
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
        var id = obj.getAttributeNS(null, 'nombre').substr(5, 1); //Indice de la camara a la que pertenece

        if (selectedCamera == id){ // Traer al frente
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
        var id= obj.getAttributeNS(null, 'name').substr(5, 1); //Indice de la linea a la que pertenece

        if (selectedCamera == id){ // Traer al frente
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

        $('#camera' + i + ' p').text(indice); // Actualizar el numero que sale encima

        var nuevoNombre = 'loadCamera(' + indice + ')';
        $('#camera' + i + ' img').attr('onclick', nuevoNombre);

        nuevoNombre = 'camera' + indice;
        $('#camera' + i).attr('id', nuevoNombre);


        // AJAX - Interaccion con DB
        var variables = 'idCamera='+i;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', './php/cameras/updateCameraIndex.php?'+variables, true);
        xmlhttp.send();
    }
}
