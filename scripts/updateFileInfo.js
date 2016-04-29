/**
 * Created by Alba on 18/04/2016.
 */

// Actualiza las coordenadas de la Ficha del objeto que se está moviendo
function updateFileCoords (vclass, vname, nX, nY) {
    if (vclass == 'sculpture') {
        
    }
    if (vclass == 'camera') {
        interpolador.InterpolCamera(nX, nY, 0);

        $('#aCameraX').val(interpolador.getXCam());
        $('#aCameraY').val(interpolador.getYCam());
        $('#aCameraZ').val(interpolador.getZCam());
    }
    if (vclass == 'point') {
        var id = vname.substr(vname.length-1);
        interpolador.InterpolCamera(nX, nY, 0);

        $('#aPoint'+id+'X').val(interpolador.getXCam());
        $('#aPoint'+id+'Y').val(interpolador.getYCam());
        $('#aPoint'+id+'Z').val(interpolador.getZCam());
    }
}

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