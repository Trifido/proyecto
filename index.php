<!--
    SOLO HAY QUE CAMBIAR LA LINEA 67, index_web enseña el visor normal e index_phone enseña el visor en VR
-->

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">


    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <title>TFG</title>

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
    <script type='text/javascript' src='http://www.x3dom.org/download/x3dom.js'> </script> 
    <link rel='stylesheet' type='text/css' href='http://www.x3dom.org/download/x3dom.css'>
    <script  type="text/javascript" src="scripts/createX3DScene.js"></script>
    <script  type="text/javascript" src="scripts/loadX3DScene.js"></script>
    <script  type="text/javascript" src="scripts/loadFirstCameraX3D.js"></script>

    <!-- Custom Fonts -->
    <link href="./bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

</head>

<body>

    <?php
        include('./php/Mobile_Detect.php');
        $detect = new Mobile_Detect(); 
     
        include('./php/menuSup.php');

        if ($detect->isMobile())
            include('./php/index_phone.php');
        else
            include('./php/index_phone.php');       //<----  ESTA LINEA CAMBIAR index_web.php por index_phone.php
    ?>

    <!-- Modal -->
    <div class="modal fade" id="myModalIndexWeb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content" id="FirstCameraVRIndex">
                <X3D id="VRCamera">
                    <Scene>
                        <inline url="./x3d/visionar.x3d"  translation="0 0 0"> </inline>
                    </Scene>
                </X3D>
            </div>
        </div>
    </div>
    

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