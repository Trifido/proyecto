var viewpointName = 'camera';
var transformPosName = 'transform_pos_camera';
var transformRotName = 'transform_rot_camera';
var positionInterpolatorName = 'translate_camera';
var orientationInterpolatorName = 'rotate_camera';
var timeSensorName = 'time';

function loadX3D360() {
    if (activeCameras == 0 && activePoints[selectedCamera-1] == 0) { // Si no hay una cámara activa
        //$('#sceneCamera').html('\n'); // Actualizar el contenido
    }
    else {
        var content = '';

        content += '<x3d id=\'x3dSceneCamera\' class="col-lg-10 col-lg-offset-1" showStat=\'false\' showLog=\'false\' style=\'width:100%; height:100%; border:0; margin:0; padding:0;\'>\n';
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

    //content += '\t\t<transform DEF = "' + transformPosName + '">\n';
    //content += '\t\t<transform DEF = "' + transformRotName + '">\n';

    // Interaccion con la base de datos !
        var variables = 'idCamera=' + selectedCamera;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                ajaxResponse = JSON.parse(xmlhttp.responseText);
                console.log("Ajax", xmlhttp.statusText);
            }
        };

        xmlhttp.open('GET', './php/cameras/readCamera.php?' + variables, false);
        xmlhttp.send();
    // -----------------------------------!

    // Viewpoint

    content += '\t\t\t<ViewPoint id="' + viewpointName + '" description="Camera" centerOfRotation="3.4625 1.73998 -5.55" fieldOfView="1.5" ' +
                'position="0 0 0" orientation="0 1 0 0" zNear="0.001" zFar="100"></Viewpoint>\n';

    //'position="' + ajaxResponse.cX + ' ' + ajaxResponse.cY + ' ' + ajaxResponse.cZ +
    
    //content += '\t\t</transform>\n';

    // Time Sensor
    content += '\t\t<timeSensor id="timeSensorCamera" DEF="' + timeSensorName + '" cycleInterval="' + ajaxResponse.cycle + '" loop="false" startTime="0"></timeSensor>\n';

    // Position Interpolator
    content += '\t\t<PositionInterpolator DEF="' + positionInterpolatorName + '" key="' + ajaxResponse.keys + '" keyValue="' + ajaxResponse.keyPosValue + '"></PositionInterpolator>\n';

    // Route para la traslacion
    content += '\t\t<Route fromNode="' + timeSensorName + '" fromField ="fraction_changed" toNode="' + positionInterpolatorName + '" toField="set_fraction"></Route>\n';
    content += '\t\t<Route fromNode="' + positionInterpolatorName + '" fromField ="value_changed" toNode="' + viewpointName + '" toField="position"></Route>\n';

    // Orientation Interpolator
    //content += '\t\t<OrientationInterpolator DEF="' + orientationInterpolatorName + '" key="' + ajaxResponse.keys + '" keyValue="' + ajaxResponse.keyRotValue + '"></OrientationInterpolator>\n';

    // Route para la traslacion
    //content += '\t\t<Route fromNode="' + timeSensorName + '" fromField ="fraction_changed" toNode="' + orientationInterpolatorName + '" toField="set_fraction"></Route>\n';
    //content += '\t\t<Route fromNode="' + orientationInterpolatorName + '" fromField ="value_changed" toNode="' + transformRotName + '" toField="set_rotation"></Route>\n';

    return content;
};