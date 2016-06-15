// Actualiza los valores de tiempo si son incorrectos
function validatePointTime( id ) {
    var pointTime = parseInt($('#timePoint' + id).val());
    var prevPointId = parseInt(id) - 1, prevPoint = parseInt($('#timePoint' + prevPointId).val());
    var nextPointId = parseInt(id) + 1, nextPoint = parseInt($('#timePoint' + nextPointId).val());

    if (id == 1) {
        if (pointTime < 0) $('#timePoint' + id).val(0.0001);
        else if (pointTime > nextPoint) $('#timePoint' + id).val((nextPoint - 0.0001).toFixed(4));
    }
    else {
        if (pointTime < prevPoint) $('#timePoint' + id).val( (prevPoint + 0.0001).toFixed(4) );
        if (pointTime > nextPoint) $('#timePoint' + id).val( (nextPoint - 0.0001).toFixed(4) );
    }
}