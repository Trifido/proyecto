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
    var valueX = -1, valueY = -1, valueZ = -1; // Para que no se modifiquen tienen que valer -1
    if (coord.toLowerCase() == 'x')
        valueX = $('#aCameraX').val();
    if (coord.toLowerCase() == 'y')
        valueY = $('#aCameraY').val();
    if (coord.toLowerCase() == 'z')
        valueZ = $('#aCameraZ').val();

    $('.camera').each(function (i, obj) { //Buscar el objeto SVG
        var aux = obj.getAttributeNS(null, 'nombre').substr(6, 1); //Indice
        if (selectedCamera == aux) obj.updateCoords(valueX, valueY, valueZ); //Actualiza las coordenadas
    });
}