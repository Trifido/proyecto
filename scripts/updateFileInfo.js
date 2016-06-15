/**
 * Created by Alba on 18/04/2016.
 */

var changed = false;

// Actualiza las coordenadas de la Ficha del objeto que se está moviendo
function updateFileCoords (vclass, vname, nX, nY) {
    var valueX, valueY, valueZ;

    if (nX < 0) valueX = parseFloat(0).toFixed(4); else if (nX > 500) valueX = parseFloat(500).toFixed(4); else valueX = parseFloat(nX).toFixed(4);
    if (nY < 0) valueY = parseFloat(0).toFixed(4); else if (nY > 500) valueY = parseFloat(500).toFixed(4); else valueY = parseFloat(nY).toFixed(4);
    valueZ = (0.3).toFixed(4);

    if (vclass == 'camera') {
        $('#aCameraX').val(valueX);
        $('#aCameraY').val(valueY);
        $('#aCameraZ').val(valueZ);
    }
    if (vclass == 'point') {
        var id = vname.substr(vname.length-1);

        $('#aPoint'+id+'X').val(valueX);
        $('#aPoint'+id+'Y').val(valueY);
        $('#aPoint'+id+'Z').val(valueZ);
    }
}

// Actualizar las coordenadas de la cámara
function updateCameraCoords (coord) {
    var valueX = -1, valueY = -1, valueZ = -1;
    $('.camera').each(function (i, obj) { //Buscar el objeto SVG
        var id = obj.getAttributeNS(null, 'nombre').substr(6, 1); //Indice

        if (selectedCamera == id){
            //Actualizar coordenadas de camara
            if (coord == 'x'){
                valueX = $('#aCameraX').val();
                valueY = obj.getAttributeNS(null, 'coordY');

                obj.setAttributeNS(null, 'transform', 'rotate(0, 0, 0) translate(' + valueX +', ' + valueY + ')');
            }
            else if (coord == 'y'){
                valueX = obj.getAttributeNS(null, 'coordX');
                valueY = $('#aCameraY').val();

                obj.setAttributeNS(null, 'transform', 'rotate(0, 0, 0) translate(' + valueX +', ' + valueY + ')');
            }
            else if (coord == 'z'){
                valueZ = $('#aCameraZ').val();
            }
            
            obj.updateCoords(valueX, valueY, valueZ);

            //Actualizar coordenadas de linea
            var vancho = obj.getAttributeNS(null, 'width')/2, valto = obj.getAttributeNS(null, 'height')/2;
            if (coord != 'z') {
                translateCameraLine(valueX, valueY, vancho, valto);
                obj.style.display='';
            }
        }
    });
}

//Actualiza las coordenadas del punto
function updatePointCoords (coord) {
    var valueX = -1, valueY = -1, valueZ = -1;
    $('.point').each(function (i, obj) { //Buscar el objeto SVG
        var nombre = obj.getAttributeNS(null, 'nombre'); //Indice
        var id = nombre.substr(nombre.length-1);

        if ('punto'+selectedCamera+'_' + id == nombre){
            if (coord == 'x'){
                valueX = $('#aPoint'+id+'X').val();
                valueY = obj.getAttributeNS(null, 'coordY');

                obj.setAttributeNS(null, 'transform', 'rotate(0, 0, 0) translate(' + valueX +', ' + valueY + ')');
            }
            else if (coord == 'y'){
                valueX = obj.getAttributeNS(null, 'coordX');
                valueY = $('#aPoint'+id+'Y').val();

                obj.setAttributeNS(null, 'transform', 'rotate(0, 0, 0) translate(' + valueX +', ' + valueY + ')');
            }
            else if (coord == 'z'){
                valueZ = $('#aPoint'+id+'Z').val();
            }

            obj.updateCoords(valueX, valueY, valueZ);

            //Actualizar coordenadas de linea
            var vancho = obj.getAttributeNS(null, 'width')/2, valto = obj.getAttributeNS(null, 'height')/2;
            if (coord != 'z') {
                translatePointLine(nombre, valueX, valueY, vancho, valto);
                obj.style.display='';
            }
        }
    });
}

//Crea el punto ID en la ficha de puntos de la página
function createFilePoint( id ){
    var div = $('<div/>', {id: 'pointLi'+id, class: 'panel panel-info'});

    var heading = $('<div/>', {class: 'panel-heading'});
    var a = $('<a/>', {"data-toggle": 'collapse', "data-parent": '#pointAccordion', href:'#pointCollapse'+id, "aria-expanded": 'false', class: 'collapsed', text: 'Punto '+id});
    div.append(heading.append(a));

    var content = $('<div/>', {id: 'pointCollapse'+id, class: 'panel-collapse collapse', "aria-expanded": 'false', style: 'height: 0px;'});
    var body = $('<div/>', {class: 'panel-body'});
    var form = $('<form/>', {role: 'form', id: 'pointForm'+id, action: './php/cameras/updatePoint.php', target: 'form_aux_frame', onsubmit: 'submitPointForm('+id+')'});

    //Coord X
    var col1 = $('<div/>', {class: 'col-lg-4'});
    var group1 = $('<div/>', {class: 'form-group'});
    var label1 = $('<label/>', {text: 'Coord X'});
    var input1 = $('<input/>', {type: 'number', class: 'form-control', id: 'aPoint'+id+'X', step: '0.0001', onchange:'updatePointCoords("x")', required : ''});
    col1.append(group1.append(label1, input1));

    //Coord Y
    var col2 = $('<div/>', {class: 'col-lg-4'});
    var group2 = $('<div/>', {class: 'form-group'});
    var label2 = $('<label/>', {text: 'Coord Y'});
    var input2 = $('<input/>', {type: 'number', class: 'form-control', id: 'aPoint'+id+'Y', step: '0.0001', onchange:'updatePointCoords("y")', required : ''});
    col2.append(group2.append(label2, input2));

    //Coord Z
    var col3 = $('<div/>', {class: 'col-lg-4'});
    var group3 = $('<div/>', {class: 'form-group'});
    var label3 = $('<label/>', {text: 'Coord Z'});
    var input3 = $('<input/>', {type: 'number', class: 'form-control', id: 'aPoint'+id+'Z', name: 'cZ', step: '0.0001', onchange:'updatePointCoords("z")', required : ''});
    col3.append(group3.append(label3, input3));

    //Tiempo llegada
    var col4 = $('<div/>', {class: 'col-lg-6'});
    var group4 = $('<div/>', {class: 'form-group'});
    var label4 = $('<label/>', {text: 'Tiempo Llegada'});
    var input4 = $('<input/>', {type: 'number', class: 'form-control', id: 'timePoint'+id , name: 'timePos', step: '0.0001', onchange:'validatePointTime('+id+')', required : ''});
    col4.append(group4.append(label4, input4));

    //Submit
    var col5 = $('<div/>', {class: 'col-lg-12'});
    var button5 = $('<button/>', {type: 'submit', id: 'btnSubmit', class: 'btn btn-default'});
    button5.text('Actualizar datos');
    col5.append(button5);

    //Hidden
    var inputHiddenC = $('<input/>', {type: 'hidden', name: 'idCamera', value : selectedCamera});
    var inputHiddenP = $('<input/>', {type: 'hidden', name: 'idPoint', value : id });
    var inputHiddenCordX = $('<input/>', {type: 'hidden', id: 'aPoint'+id+'XN', name: 'cX', step: '0.0001'});
    var inputHiddenCordY = $('<input/>', {type: 'hidden', id: 'aPoint'+id+'YN', name: 'cY', step: '0.0001'});


    div.append(content.append(body.append(form.append(col1, col2, col3, col4, col5, inputHiddenC, inputHiddenP, inputHiddenCordX, inputHiddenCordY))));

    $('#pointAccordion').append(div);
}

//Elimina el punto ID en la ficha de puntos de la página
function removeFilePoint( id ) {
    $('#pointLi'+id).remove();
}

//Actualiza el tiempo del punto ID con el valor VALUE en la ficha de puntos de la página
function updateFilePoint( id, value ) {
    $('#timePoint'+id).val(value);
}

// Obtiene las coordenadas interpoladas de la cámara para almacenarlas en la base de datos
function submitCameraForm() {
    var inicialX = $('#aCameraX').val();
    var inicialY = $('#aCameraY').val();

    interpolador.Interpolacion(inicialX, inicialY);

    $('#aCameraXN').val( parseFloat(interpolador.getX()).toFixed(4) );
    $('#aCameraYN').val( parseFloat(interpolador.getZ()).toFixed(4) );
    
    if (changed) { // Si se ha modificado el tiempo
        updatePointsTime(); // Actualizar el tiempo de los puntos en la BD y en la ficha
    }
    
    changed = false; // Resetear la variable que indica el cambio del tiempo de la cámara desde el último submit
}


// Obtiene las coordenadas interpoladas de los puntos para almacenarlas en la base de datos
function submitPointForm( id ) {
    var inicialX = $('#aPoint'+id+'X').val();
    var inicialY = $('#aPoint'+id+'Y').val();

    interpolador.Interpolacion(inicialX, inicialY);

    $('#aPoint'+id+'XN').val( parseFloat(interpolador.getX()).toFixed(4) );
    $('#aPoint'+id+'YN').val( parseFloat(interpolador.getZ()).toFixed(4) );
}

// True si el tiempo se ha modificado y hay que cambiar las cámaras desde el último submit.
// Se llama cada vez que se cambia el valor del tiempo
function timeChanged() {
    changed = true;
}