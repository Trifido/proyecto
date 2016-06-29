<?php
    $vrScene = $_REQUEST["vrScene"];
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">


    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <title>TFG-VRMODE</title>

    <!-- CSS -->
    <!--<link href="./css/style.css" rel="stylesheet" type='text/css' /> -->

    <script  type="text/javascript" src="./scripts/createJSONScene.js"></script>
    <script  type="text/javascript" src="./scripts/redireccionar/redireccionarExportar.js"></script>
    <script  type="text/javascript" src="./scripts/redireccionar/redireccionarMostrar.js"></script>
    <script  type="text/javascript" src="./scripts/cargarMiEscenario.js"></script>
    <script  type="text/javascript" src="./scripts/eliminarDatos.js"></script>
    <script  type="text/javascript" src="./scripts/editarDatos.js"></script>
    <script  type="text/javascript" src="./scripts/updateInfoEscultura.js"></script>

    <script  type="text/javascript" src="./scripts/cargarEscenarios.js"></script>
    <!-- Bootstrap Core CSS -->
    <link href="./bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="./bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="./dist/css/sb-admin-2.css" rel="stylesheet">
    <!-- CSS -->
    <link href="./css/style.css" rel="stylesheet" type='text/css' />

    <!-- Scripts para montar escenario X3D -->
    <script type="text/javascript" src="x3dom/x3dom.js"></script>
    <link rel='stylesheet' type='text/css' href='x3dom/x3dom.css'>

    <script  type="text/javascript" src="scripts/createX3DScene.js"></script>
    <script  type="text/javascript" src="scripts/loadX3DScene.js"></script>
    <script  type="text/javascript" src="scripts/loadFirstCameraX3D.js"></script>
    <script  type="text/javascript" src="./scripts/cargarEscenarios.js"></script>

    <!-- Custom Fonts -->
    <link href="./bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

</head>

<body style='width:100%; height:100%; border:0; margin:0; padding:0;'>
    <div onclick="fullscreen();" id="fsbutton"><h1>Fullscreen<br/>Mode</h1></div>

    <div id="CameraVR">
        <X3D id="VRScene" style="height:100%; width:100%;" >
            <Scene>
                <inline url="./x3d/visionar.x3d"  translation="0 0 0"> </inline>
            </Scene>
        </X3D>
    </div>

    <?php
        echo '<script> CargarVRMode("' . $vrScene . '");</script>';
        ?>

        <script>
            var runtime = null;
            var rtLeft, rtRight;
            var lastW, lastH;
            var degreeToRadiansFactor = Math.PI / 180;

            x3dom.fields.Quaternion.prototype.setFromEulerYXZ = function (alpha, beta, gamma) {

                var c1 = Math.cos( alpha / 2 );
                var c2 = Math.cos( beta / 2 );
                var c3 = Math.cos( gamma / 2 );
                var s1 = Math.sin( alpha / 2 );
                var s2 = Math.sin( beta / 2 );
                var s3 = Math.sin( gamma / 2 );

                this.x = s1 * c2 * c3 + c1 * s2 * s3;
                this.y = c1 * s2 * c3 - s1 * c2 * s3;
                this.z = c1 * c2 * s3 - s1 * s2 * c3;
                this.w = c1 * c2 * c3 + s1 * s2 * s3;
            }

            var MYAPP={"deviceOrientation":null, "screenOrientation":null};
            onDeviceOrientationChangeEvent = (function(rawEvtData) {
                this.deviceOrientation = rawEvtData;
            }).bind(MYAPP);

            window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);

            function deg2rad(deg){return deg * degreeToRadiansFactor;}

            document.onload = function ()
            {
                runtime = document.getElementById('x3dElement').runtime;
                rtLeft = document.getElementById('rtLeft');
                rtRight = document.getElementById('rtRight');
                //rtLeft._x3domNode.lensCenter = 0;
                //rtRight._x3domNode.lensCenter = 0;

                lastW = +runtime.getWidth();
                lastH = +runtime.getHeight();

                var hw = Math.round(lastW / 2);
                rtLeft.setAttribute('dimensions',  hw + ' ' + lastH + ' 4');
                rtRight.setAttribute('dimensions', hw + ' ' + lastH + ' 4');

                var element = document.getElementById("x3dElement");
                MYAPP.viewpoint = document.getElementById('vpp');

                element.runtime.exitFrame = function() {
                    // check if screensize changed
                    var w = +runtime.getWidth();
                    var h = +runtime.getHeight();
                    if (w != lastW || h != lastH)
                    {
                        var half = Math.round(w / 2);
                        rtLeft.setAttribute('dimensions',  half + ' ' + h + ' 4');
                        rtRight.setAttribute('dimensions', half + ' ' + h + ' 4');
                        lastW = w;
                        lastH = h;
                    }
                    //handle device orientation change
                    if(!MYAPP.deviceOrientation)
                        return;
                    var q0 = x3dom.fields.Quaternion.axisAngle(new x3dom.fields.SFVec3f(0,0,1),-deg2rad(window.orientation)); // phone rotation offset
                    var q = new x3dom.fields.Quaternion();
                    q.setFromEulerYXZ(deg2rad(MYAPP.deviceOrientation.beta), deg2rad(MYAPP.deviceOrientation.alpha), -deg2rad(MYAPP.deviceOrientation.gamma));

                    var q1 = new x3dom.fields.Quaternion.axisAngle(new x3dom.fields.SFVec3f(1,0,0),-Math.PI/2); // device orientation points upwards. rotate down to camera orientation

                    q = q.multiply(q1);
                    q = q.multiply(q0);

                    var aa = q.toAxisAngle();

                    MYAPP.viewpoint.setAttribute("orientation", aa[0].x + " " + aa[0].y + " " + aa[0].z + " " + aa[1]);
                };
            }

            function fullscreen() {
                //lens center auf null setzten
                rtLeft = document.getElementById('rtLeft');
                rtRight = document.getElementById('rtRight');
                rtLeft._x3domNode.lensCenter = 0;
                rtRight._x3domNode.lensCenter = 0;

                //fullscreen aktivieren
                container = document.getElementById('x3dElement');
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                } else if (container.msRequestFullscreen) {
                    container.msRequestFullscreen();
                } else if (container.mozRequestFullScreen) {
                    container.mozRequestFullScreen();
                } else if (container.webkitRequestFullscreen) {
                    container.webkitRequestFullscreen();
                }
            }

    </script>
    

    <!-- Frame auxiliar para la redireccion de formularios -->
    <iframe name="form_aux_frame" width="1" height="1" style="border:none"></iframe>

    <!-- jQuery -->
    <script src="./bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="./bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="./bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="./dist/js/sb-admin-2.js"></script>

</body>

</html>