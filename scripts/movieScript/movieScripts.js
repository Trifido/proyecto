function startAnimation() {
    var time = Math.floor(Date.now() / 1000);

    $('#timeSensorCamera').attr('startTime', time);
}

function stopAnimation() {
    var time = Math.floor(Date.now() / 1000);

    $('#timeSensorCamera').attr('stopTime', time);
}