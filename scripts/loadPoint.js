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
                // Coordenadas Punto
            $('.point').each(function (i, obj) { //Buscar el objeto SVG
                var nombre = obj.getAttributeNS(null, 'nombre'); //Indice
                var id = nombre.substr(nombre.length-1);
                if ('punto'+selectedCamera+'_' + id == obj.getAttributeNS(null, 'nombre'))
                    updateFileCoords('point', nombre, obj.getAttributeNS(null, 'cX'), obj.getAttributeNS(null, 'cY'));
            });

        // AJAX - Interaccion con DB
        var variables = 'idPoint='+activePoints[selectedCamera-1]+'&idCamera='+selectedCamera;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', './php/createPoint.php?'+variables, true);
        xmlhttp.send();

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
    var variables = 'idPoint='+activePoints[selectedCamera-1]+'&idCamera='+selectedCamera;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', './php/deletePoint.php?'+variables, true);
    xmlhttp.send();

    activePoints[selectedCamera-1] -= 1;

    if (activePoints[selectedCamera-1] == 0) {
        $('#btnRemPoint').attr('disabled', 'disabled'); //Desactivar boton "eliminar"
        $('#noPointAlert').css('display', ''); //Activar alerta
    }
}

//Crea el punto en la ficha de puntos de la página
function createFilePoint( id ){
    var div = $('<div/>', {id: 'pointLi'+id, class: 'panel panel-info'});

    var heading = $('<div/>', {class: 'panel-heading'});
    var a = $('<a/>', {"data-toggle": 'collapse', "data-parent": '#pointAccordion', href:'#pointCollapse'+id, "aria-expanded": 'false', class: 'collapsed', text: 'Punto '+id});
    div.append(heading.append(a));

    var content = $('<div/>', {id: 'pointCollapse'+id, class: 'panel-collapse collapse', "aria-expanded": 'false', style: 'height: 0px;'});
    var body = $('<div/>', {class: 'panel-body'});
    var form = $('<form/>', {role: 'form', id: 'pointForm', action: './php/updatePoint.php'});

    //Coord X
    var col1 = $('<div/>', {class: 'col-lg-4'});
    var group1 = $('<div/>', {class: 'form-group'});
    var label1 = $('<label/>', {text: 'Coord X'});
    var input1 = $('<input/>', {type: 'number', class: 'form-control', id: 'aPoint'+id+'X', onchange:'updatePointCoords("x")', required : ''});
    col1.append(group1.append(label1, input1));

    //Coord Y
    var col2 = $('<div/>', {class: 'col-lg-4'});
    var group2 = $('<div/>', {class: 'form-group'});
    var label2 = $('<label/>', {text: 'Coord Y'});
    var input2 = $('<input/>', {type: 'number', class: 'form-control', id: 'aPoint'+id+'Y', onchange:'updatePointCoords("y")', required : ''});
    col2.append(group2.append(label2, input2));

    //Coord Z
    var col3 = $('<div/>', {class: 'col-lg-4'});
    var group3 = $('<div/>', {class: 'form-group'});
    var label3 = $('<label/>', {text: 'Coord Z'});
    var input3 = $('<input/>', {type: 'number', class: 'form-control', id: 'aPoint'+id+'Z', onchange:'updatePointCoords("z")', required : ''});
    col3.append(group3.append(label3, input3));

    //Tiempo llegada
    var col4 = $('<div/>', {class: 'col-lg-6'});
    var group4 = $('<div/>', {class: 'form-group'});
    var label4 = $('<label/>', {text: 'Tiempo Llegada'});
    var input4 = $('<input/>', {type: 'number', class: 'form-control', required : ''});
    col4.append(group4.append(label4, input4));

    //Submit
    var col5 = $('<div/>', {class: 'col-lg-12'});
    var button5 = $('<button/>', {type: 'submit', id: 'btnSubmit', class: 'btn btn-default'});
    button5.text('Actualizar datos');
    col5.append(button5);

    div.append(content.append(body.append(form.append(col1, col2, col3, col4, col5))));

    $('#pointAccordion').append(div);
}

function removeFilePoint( id ) {
    $('#pointLi'+id).remove();
}

