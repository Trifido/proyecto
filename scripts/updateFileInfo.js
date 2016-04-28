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