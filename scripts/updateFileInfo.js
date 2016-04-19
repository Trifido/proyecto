/**
 * Created by Alba on 18/04/2016.
 */

// Actualiza las coordenadas de la Ficha del objeto que se está moviendo
function updateFileCoords (vclass, vname, nX, nY) {
    if (vclass == 'sculpture') {
        
    }
    if (vclass == 'camera') {
        $('#aCameraX').val(Math.round(nX));
        $('#aCameraY').val(Math.round(nY));
        $('#aCameraZ').val(0);
    }
    if (vclass == 'point') {
        var id = vname.substr(vname.length-1);

        $('#aPoint'+id+'X').val(Math.round(nX));
        $('#aPoint'+id+'Y').val(Math.round(nY));
        $('#aPoint'+id+'Z').val(0);
    }
}