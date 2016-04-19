/**
 * Created by Alba on 18/04/2016.
 */

function updateFileCoords (vclass, nX, nY) {
    if (vclass == 'sculpture') {
        
    }
    if (vclass == 'camera') {
        $('#aCameraX').val(Math.round(nX));
        $('#aCameraY').val(Math.round(nY));
        $('#aCameraZ').val(0);
    }
    if (vclass == 'point') {
        
    }
}