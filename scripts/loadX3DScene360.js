var transformName = 'transform_camera';
var positionInterpolatorName = 'translate_camera';
var translateTimeSensorName = 'translate_time';

function loadX3D360() {
    if (activeCameras == 0) { // Si no hay una cámara activa
        //$('#sceneCamera').html('\n'); // Actualizar el contenido
    }
    else {
        var content = '';

        content += '<x3d id=\'x3dSceneCamera\' showStat=\'false\' showLog=\'false\' style=\'width:100%; height:100%; border:0; margin:0; padding:0;\'>\n';
        content += '\t<scene id=\'sceneCamera\'>\n';
        content += '\t<Environment frustumCulling=\"false\"></Environment>\n';
        content += '\t<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'20 20 20\' radius=\'5000000\' ></PointLight>\n';
        content += '\t<navigationInfo avatarSize=\'0.001 0.15 0.15\' type=\'\"game\"\'></navigationInfo>\n';

        content += load360Camera();

        content += '\t<background DEF=\'bgnd\' backUrl=\'space.jpg\'></background>\n';

        content += initX3DScene();

        content += '\t</scene>\n';
        content += '</x3d>\n';

        //console.log(content);

        $('#sceneCamera').html(content); // Actualizar el contenido

        x3dom.reload();
    }
};

function load360Camera() {
    var content = '', ajaxResponse;

    content += '\t\t<transform DEF = "' + transformName + '">\n';

    // Interaccion con la base de datos !
        var variables = 'idCamera=' + selectedCamera;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                ajaxResponse = JSON.parse(xmlhttp.responseText);
            }
            else {
                console.log("Error", xmlhttp.statusText);
            }
        };

        xmlhttp.open('GET', './php/cameras/readCamera.php?' + variables, false);
        xmlhttp.send();
    // -----------------------------------!

    // Viewpoint

    content += '\t\t\t<ViewPoint id="camera" description="Camera" centerOfRotation="3.4625 1.73998 -5.55" fieldOfView="1.5" ' +
                'position="' + ajaxResponse.cX + ' ' + ajaxResponse.cY + ' ' + ajaxResponse.cZ + '" orientation="0 1 0" zNear="0.001 zFar="100"></Viewpoint>\n';

    content += '\t\t</transform>\n';

    // Position Interpolator
    content += '\t\t<PositionInterpolator DEF="' + positionInterpolatorName + '" key="' + ajaxResponse.keys + '" keyValue="' + ajaxResponse.keyValues + '"></PositionInterpolator>\n';

    // Time Sensor
    content += '\t\t<timeSensor DEF="' + translateTimeSensorName + '" cycleInterval="' + ajaxResponse.cycle + '" loop="false"></timeSensor>\n';

    // Route para la traslacion
    //content += '\t\t<Route fromNode="' + translateTimeSensorName + '" fromField ="fraction_changed" toNode="' + positionInterpolatorName + '" toField="set_fraction"></Route>\n';
    //content += '\t\t<Route fromNode="' + positionInterpolatorName + '" fromField ="value_changed" toNode="' + transformName + '" toField="translation"></Route>\n';


    return content;
};