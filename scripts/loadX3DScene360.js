var transformName = 'transform_camera';
var positionInterpolatorName = 'translate_camera';
var translateTimeSensorName = 'translate_time';

function loadX3D360() {
    if (activeCameras == 0) { // Si no hay una cámara activa
        $('#sceneCamera').html('\n'); // Actualizar el contenido
    }
    else {
        var content = '';

        content += '<X3D id = "the_sceneCamera">\n';
        content += '\t<Scene>\n';

        //--------------------------------------------------------------------------------------------------------------
        
        content += '\t\t<transform DEF = "' + transformName + '">\n';

        // Interaccion con la base de datos !
            var variables = 'idCamera=' + selectedCamera;

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    response = JSON.parse(xmlhttp.responseText);
                }
            };

            xmlhttp.open('GET', './php/cameras/readCamera.php?' + variables, false);
            xmlhttp.send();

        // Viewpoint
        content += '\t\t\t<ViewPoint id="camera" position="' + response.cX + ' ' + response.cY + ' ' + response.cZ + '" orientation="0 0 0 1"></Viewpoint>\n';

        content += '\t\t</transform>\n';

        // Position Interpolator
        content += '\t\t<PositionInterpolator DEF="' + positionInterpolatorName + '" key="' + response.keys + '" keyValue="' + response.keyValues + '"></PositionInterpolator>\n';

        // Time Sensor
        content += '\t\t<timeSensor DEF="' + translateTimeSensorName + '" cycleInterval="' + response.cycle + '" loop="false"></timeSensor>\n';

        // Route para la traslacion
        content += '\t\t<Route fromNode="' + translateTimeSensorName + '" fromField ="fraction_changed" toNode="' + positionInterpolatorName + '" toField="set_fraction"></Route>\n';
        content += '\t\t<Route fromNode="' + positionInterpolatorName + '" fromField ="value_changed" toNode="' + transformName + '" toField="translation"></Route>\n';

        //--------------------------------------------------------------------------------------------------------------

        content += initX3DScene();

        content += '\t</Scene>\n';
        content += '</X3D>\n';

        //console.log(content);

        $('#sceneCamera').html(content); // Actualizar el contenido

        x3dom.reload();
    }
};