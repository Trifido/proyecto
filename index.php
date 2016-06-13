
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

	<!-- Script para jquery -->
    <script  type="text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.js"></script>
    <script  type="text/javascript" src="scripts/loadInfo.js"></script>
    <script  type="text/javascript" src="scripts/redireccionarMostrar.js"></script>

    <!-- Script para threeJS (visualizar modelos) -->
	<script  type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.js"></script>
	<script  type="text/javascript"  src="./scripts/threejs/Camara.js"></script>
	<script  type="text/javascript"  src="./scripts/threejs/Luz.js"></script>
	<script  type="text/javascript"  src="./scripts/threejs/mtl.js"></script>
	<script  type="text/javascript"  src="./scripts/threejs/obj.js"></script>
	<script  type="text/javascript"  src="./scripts/threejs/Objetos.js"></script>
	<script  type="text/javascript"  src="./scripts/threejs/objmtl.js"></script>
	<script  type="text/javascript"  src="./scripts/threejs/orbit.js"></script>
	<script  type="text/javascript"  src="./scripts/threejs/script.js"></script> 

	<!-- Scripts para SVG -->
	<script  type="text/javascript" src="scripts/loadRoom.js"></script>
	<script  type="text/javascript" src="scripts/loadMenu.js"></script>
	<script  type="text/javascript" src="scripts/loadSculpture.js"></script>
    <script  type="text/javascript" src="scripts/loadPicture.js"></script>
	<script  type="text/javascript" src="scripts/removeElement.js"></script>
	<script  type="text/javascript" src="scripts/dragDropFunctions.js"></script>
	<script  type="text/javascript" src="scripts/room.js"></script>
	<script  type="text/javascript" src="scripts/sculpture.js"></script>
    <script  type="text/javascript" src="scripts/picture.js"></script>
	<script  type="text/javascript" src="scripts/firstCamera.js"></script>
	<script  type="text/javascript" src="scripts/addPedestal.js"></script>
	<script  type="text/javascript" src="scripts/limitador.js"></script>
	<script  type="text/javascript" src="scripts/interpolarCoords.js"></script>

	<!-- Scripts para montar escenario X3D -->
	<script type='text/javascript' src='http://www.x3dom.org/download/x3dom.js'> </script> 
	<link rel='stylesheet' type='text/css' href='http://www.x3dom.org/download/x3dom.css'>
	<script  type="text/javascript" src="scripts/createX3DScene.js"></script>
	<script  type="text/javascript" src="scripts/loadX3DScene.js"></script>
	<script  type="text/javascript" src="scripts/loadFirstCameraX3D.js"></script>

	<!-- CSS -->
	<link href="./css/style.css" rel="stylesheet" type='text/css' />

	<!-- Scripts Alba -->
    <script  type="text/javascript" src="scripts/showHideDiv.js"></script>

        <script  type="text/javascript" src="scripts/loadCamera.js"></script>
        <script  type="text/javascript" src="scripts/loadPoint.js"></script>
        <script  type="text/javascript" src="scripts/camera.js"></script>
        <script  type="text/javascript" src="scripts/point.js"></script>
        <script  type="text/javascript" src="scripts/updateFileInfo.js"></script>
        <script  type="text/javascript" src="scripts/loadX3DScene360.js"></script>
        <script type="text/javascript" src="scripts/audioScripts/createWave.js"></script>
            <!-- Scripts para WaveSurfer -->
            <script src="//cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.0.52/wavesurfer.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.0.57/plugin/wavesurfer.regions.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.0.57/plugin/wavesurfer.timeline.min.js"></script>
            <!-- Activar tooltips en todo el documento -->
            <script>
                $(document).ready(function(){
                    $('[data-toggle="tooltip"]').tooltip();
                });
            </script>

    <!-- Bootstrap Core CSS -->
    <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.0/bootstrap.min.js"></script>

    <!-- MetisMenu CSS -->
    <link href="bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body onload="main();">
    <div id="wrapper">

        <?php
            $_SESSION["seccion"] = "editor";
            include('./php/menuSupYLat.php');
        ?>

        <!-- Page Content -->
        <div id="page-wrapper">
            <div class="container-fluid">
            <!-------------------------------------------------------------- COLUMNA IZQUIERDA ----------------------------------------------------------------->
			    <div class="col-md-6" id="columna1">
                    <!---------------------------------------------------------- EDITOR ---------------------------------------------------------------------------->
                    <div class="row">
                        <!------------------------------------------------------ MENÚ ESCENARIOS ------------------------------------------------------------------->
                        <div class="well">
				            <div id="myCarousel1" class="carousel slide">
				                <!-- Carousel items -->
				                <div class="carousel-inner">
				                    <div class="item active">
				                        <div class="row">
				                            <div class="col-xs-3"><a><img src="img/menu/scene1.png" alt="Image" class="img-responsive" onclick="loadRoom( 0 )"></a>

				                            </div>
				                            <div class="col-xs-3"><a><img src="img/menu/scene2.png" alt="Image" class="img-responsive" onclick="loadRoom( 2 )"></a>

				                            </div>
				                            <div class="col-xs-3"><a><img src="img/menu/scene3.png" alt="Image" class="img-responsive" onclick="loadRoom( 3 )"></a>

				                            </div>
				                            <div class="col-xs-3"><a><img src="img/menu/scene4.png" alt="Image" class="img-responsive" onclick="loadRoom( 4 )"></a>

				                            </div>
				                        </div>
				                        <!--/row-->
				                    </div>
				                    <!--/item-->
				                    <div class="item">
				                        <div class="row">
				                            <div class="col-xs-3"><a><img src="img/menu/scene5.png" alt="Image" class="img-responsive" onclick="loadRoom( 1 )"></a>

				                            </div>
				                            <div class="col-xs-3"><a><img src="img/menu/scene1.png" alt="Image" class="img-responsive" onclick="loadRoom( 5 )"></a>

				                            </div>
				                            <div class="col-xs-3"><a><img src="img/menu/scene2.png" alt="Image" class="img-responsive" onclick="loadRoom( 2 )"></a>

				                            </div>
				                            <div class="col-xs-3"><a><img src="img/menu/scene3.png" alt="Image" class="img-responsive" onclick="loadRoom( 3 )"></a>

				                            </div>
				                        </div>
				                        <!--/row-->
				                    </div>
				                    <!--/item-->
				                </div>
				                <!--/carousel-inner--> 
				                <a class="left carousel-control" href="#myCarousel1" data-slide="prev">‹</a>
				 				<a class="right carousel-control" href="#myCarousel1" data-slide="next">›</a>

				            </div>
				            <!--/myCarousel-->
				        </div>
                        <!------------------------------------------------------ INICIO CANVAS SVG ----------------------------------------------------------------->
	                    <div class="panel panel-primary" id="panelCanvas">
	                        <svg id="lienzo" viewbox="0 0 500 500"
	                        onload='Init(evt)'
							onmousedown='Grab(evt)'
							onmousemove='Drag(evt)'
							onmouseup='Drop(evt)'
                            > <!-- onmousewheel='Zoom(evt)' -->
                                <g id="hidden_level"></g>
					            <g id="room_level"></g>
					            <g id="limit_level"></g>
								<g id="sculpture_level"></g>
                                <g id="picture_level"></g>
					            <g id="line_level"></g>
					            <g id="camera_level"></g>
								<g id="point_level"></g>
								<g id="VRcamera_level"></g>
							</svg>
	                    </div>

                        <div class="panel">
                            <button id="buttonCameraMode" type="button" class="btn btn-danger btn-outline btn-block" onclick="activateCameraMode()">
                                Activar/Desactivar Modo Generación de Rutas
                            </button>
                        </div>
            		</div>

                    <!----------------------------------------------------------- AUDIO ---------------------------------------------------------------------------->
                    <div class="row">
                        <div class="panel panel-primary" id="panelAudio">
                        <div class="panel-heading">
                            <i class="fa fa-music fa-fw"></i> Audio
                        </div>
                        <div class="panel-body">
                            <div class="form-group">
                                <label>Cargar Audio</label>
                                <!---<label for="loadAudio"> <span class="btn btn-primary">Seleccionar archivo</span></label> -->
                                <input type="file" accept="audio/*" id="loadAudio" onchange="handleAudioFile(this.files)" style="width: 100%;"><!--style="visibility: hidden; position: absolute;" id="audioFiles"-->
                            </div>
                            <label>Controles</label>
                            <div class="form-group col-lg-offset-4">
                                <button id="playAudio" type="button" class="btn btn-primary btn-circle"
                                        data-toggle="tooltip" data-placement="top" title="Comenzar" onclick="playAudioWave();this.blur();" disabled>
                                    <i class="fa fa-play"></i>
                                </button>
                                <button id="pauseAudio" type="button" class="btn btn-primary btn-circle"
                                        data-toggle="tooltip" data-placement="top" title="Pausar" onclick="pauseAudioWave();this.blur();" disabled>
                                    <i class="fa fa-pause"></i>
                                </button>
                                <button id="stopAudio" type="button" class="btn btn-primary btn-circle"
                                        data-toggle="tooltip" data-placement="top" title="Detener" onclick="stopAudioWave();this.blur();" disabled>
                                    <i class="fa fa-stop"></i>
                                </button>
                                <button style="margin-left: 2.5%;" id="removeAudio" type="button" class="btn btn-danger btn-circle"
                                        data-toggle="tooltip" data-placement="top" title="Eliminar" onclick="destroyAudioWave();" disabled>
                                    <i class="fa fa-times"></i>
                                </button>
                            </div>
                            <div id="waveform"></div>
                            <div id="waveform-timeline"></div>
                        </div>
                    </div>
                    </div>

			    </div>
<!--  --------------------------------------------------------------------------------------------------------------------- FIN CANVAS SVG -------------------- -->

<!--  --------------------------------------------------------------------------------------------------------------------- INICIO MENÚ OBJETOS --------------- -->
			    <!-- /col -->
			    <div class="col-md-6" id="columna2">

                    <div id="accordion" class="panel-group">
                        <!-------------------------------------------------------------- ESCULTURAS -------------------------------------------------------------->
                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"> <i class="fa fa-qq fa-fw"></i>Esculturas</a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in">
    <!--  --------------------------------------------------------------------------------------------------------------------- INICIO SLIDER ESCULTURAS ---------- -->
                                <div class="well">
						            <div id="myCarouselEscultura" class="carousel slide">
						                <!-- Carousel items -->
						                <div class="carousel-inner">
						                    <div class="item active">
						                        <div class="row">
						                            <div class="col-xs-3"><a><img src="./img/menu/venus.png" alt="Image" class="img-responsive" onclick="loadSculpture( 6 )"></a>

						                            </div>
						                            <div class="col-xs-3"><a><img src="./img/menu/thinker.png" alt="Image" class="img-responsive" onclick="loadSculpture( 7 )"></a>

						                            </div>
						                            <div class="col-xs-3"><a><img src="./img/menu/david.png" alt="Image" class="img-responsive" onclick="loadSculpture( 8 )"></a>

						                            </div>
						                            <div class="col-xs-3"><a><img src="./img/menu/dragon.png" alt="Image" class="img-responsive" onclick="loadSculpture( 9 )"></a>

						                            </div>
						                        </div>
						                        <!--/row-->
						                    </div>
						                    <!--/item-->
						                    <div class="item">
						                        <div class="row">
						                            <div class="col-xs-3"><a><img src="./img/menu/ramses2.png" alt="Image" class="img-responsive" onclick="loadSculpture( 10 )"></a>

						                            </div>
						                            <div class="col-xs-3"><a><img src="./img/menu/pascua.png" alt="Image" class="img-responsive" onclick="loadSculpture( 11 )"></a>

						                            </div>
						                        </div>
						                        <!--/row-->
						                    </div>
						                    <!--/item-->
						                </div>
						                <!--/carousel-inner--> 
						                <a class="left carousel-control" href="#myCarouselEscultura" data-slide="prev">‹</a>
						 				<a class="right carousel-control" href="#myCarouselEscultura" data-slide="next">›</a>

						            </div>
						            <!--/myCarousel-->
						        </div>
    <!--  --------------------------------------------------------------------------------------------------------------------- FIN SLIDER ESCULTURAS ------------- -->
    <!--  --------------------------------------------------------------------------------------------------------------------- INICIO SLIDER CUADROS ---------- -->
                            </div>
                        </div>
                        <!-------------------------------------------------------------- CUADROS    -------------------------------------------------------------->
                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"> <i class="fa fa-picture-o fa-fw"></i>Cuadros</a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse">
                                <div class="well">
                                    <div id="myCarouselCuadro" class="carousel slide">
                                        <!-- Carousel items -->
                                        <div class="carousel-inner">
                                            <div class="item active">
                                                <div class="row">
                                                    <div class="col-xs-3"><a><img src="./img/menu/elgrito.png" alt="Image" class="img-responsive" onclick="loadPicture( 1 )"></a>

                                                    </div>
                                                    <div class="col-xs-3"><a><img src="./img/menu/guernica.png" alt="Image" class="img-responsive" onclick="loadPicture( 2 )"></a>

                                                    </div>
                                                    <div class="col-xs-3"><a><img src="./img/menu/meninas.png" alt="Image" class="img-responsive" onclick="loadPicture( 3 )"></a>

                                                    </div>
                                                    <div class="col-xs-3"><a><img src="./img/menu/miro.png" alt="Image" class="img-responsive"  onclick="loadPicture( 4 )"></a>

                                                    </div>
                                                </div>
                                                <!--/row-->
                                            </div>
                                            <!--/item-->
                                            <div class="item">
                                                <div class="row">
                                                    <div class="col-xs-3"><a><img src="./img/menu/monalisa.png" alt="Image" class="img-responsive" onclick="loadPicture( 5 )"></a>

                                                    </div>
                                                    <div class="col-xs-3"><a><img src="./img/menu/nocheestrellada.png" alt="Image" class="img-responsive" onclick="loadPicture( 6 )"></a>
                                                    </div>
                                                </div>
                                                <!--/row-->
                                            </div>
                                            <!--/item-->
                                        </div>
                                        <!--/carousel-inner--> 
                                        <a class="left carousel-control" href="#myCarouselCuadro" data-slide="prev">‹</a>
                                        <a class="right carousel-control" href="#myCarouselCuadro" data-slide="next">›</a>

                                    </div>
                                    <!--/myCarousel-->
                                </div>
                            </div>
                        </div>
                        <!-------------------------------------------------------------- OTROS      -------------------------------------------------------------->
                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"> <i class="fa fa-rebel fa-fw"></i>Otros Objetos</a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!------------------------------------------------------------------ CÁMARA     -------------------------------------------------------------->
                    <div id="panelCamerasPoints" class="panel panel-success" style="display: none;">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <i class="fa fa-gear fa-fw"></i>&nbsp;Control de Cámaras y Puntos de Ruta
                            </h4>
                        </div>
                        <div class="panel-body">

                            <div class="panel panel-primary">
                                <div class="panel-heading text-center" style="padding: 1%;"> <small> Cámaras Activas </small> </div>
                                <div class="panel-body">
                                    <div id="box_camera">
                                        <div class="item active">
                                            <div id="cameras" class="row"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Botones -->
                            <div class="row">
                                <div class="col-md-6 text-center">
                                    <label>Cámaras</label>
                                    </br>
                                    <button type="button" id="btnAddCamera" class="btn btn-primary" onclick="loadNewCamera()" disabled><i class="fa fa-plus-circle"></i>&nbsp;Nueva Cámara</button>                                    </br></br>
                                    <button type="button" id="btnRemCamera" class="btn btn-primary" onclick="removeSelectedCamera()" disabled><i class="fa fa-times-circle"></i>&nbsp;Eliminar Cámara</button>
                                </div>
                                <div class="col-md-6 text-center">
                                    <label>Puntos de Ruta</label>
                                    </br>
                                    <button type="button" id="btnAddPoint" class="btn btn-success" onclick="loadNewPoint()" disabled><i class="fa fa-plus-circle"></i>&nbsp;Nuevo Punto Ruta</button>
                                    </br></br>
                                    <button type="button" id="btnRemPoint" class="btn btn-success" onclick="removePointLine()" disabled><i class="fa fa-times-circle"></i>&nbsp;Eliminar Punto Ruta</button>
                                </div>
                            </div>
                            <!-- !Botones -->

                        </div>
                    </div>

                    <!--------------------------------------------- INICIO INFORMACIÓN --------------------------------------------->
                    <div class="panel panel-primary" id="panelInfo">
                        <div class="panel-heading">
                            <i class="fa fa-info fa-fw"></i>
                            Información General
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <!-- Nav tabs -->
                            <ul class="nav nav-pills" id="labels">
                                <li class="active"><a href="#ficha-pills" data-toggle="tab">Ficha Técnica</a>
                                </li>
                                <li><a href="#escena-pills" data-toggle="tab" onclick="loadX3D()">Escenario</a>
                                </li>
                                <li><a href="#camara-pills" data-toggle="tab">Primera Persona</a>
                                </li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content">
                            <!------------------------------------ INICIO FICHA TÉCNICA ------------------------------------>
                                <div class="tab-pane fade in active" id="ficha-pills">
                                	<div class="row" id="formSculpture">
	                                	<div class="col-lg-6">
		                                    <form role="form">
		                                        <div class="form-group">
		                                            <label>Nombre</label>
		                                            <input class="form-control">
		                                        </div>
		                                        <div class="form-group">
		                                            <label>Cronología</label>
		                                            <input class="form-control">
		                                        </div>
		                                        <div class="form-group">
		                                            <label>Técnica</label>
		                                            <input class="form-control">
		                                        </div>
		                                    </form>
	                                    </div>

	                                    <!--
										<div class="col-lg-6" id="viewSculture">
	                                    	<div class="panel panel-primary">
	                                    		<div id="viewElement"></div>
	                                    	</div>
	                                    </div>
	                                    -->

	                                    <div class="col-md-6" id="visorEscultura">
											<!--<X3D id="the_monument_viewer">
												<Scene>
													<Viewpoint description="Faceted box, smooth shading" position="0 0.5 0.5"></Viewpoint>
													<inline url="./models/X3D/venus.x3d" translation="0 0 0"> </inline>
												</Scene>
											</X3D> -->
											<div class="panel panel-primary">
	                                    		<div id="viewElement"></div>
	                                    	</div>
	                                    </div>
	                                </div>
	                                <div class="row">
	                                	<div class="col-lg-6">
		                                	<div class="form-group">
                                             	<label>Ancho Pedestal</label>
	                                            <input class="form-control" onkeyup="addAnchuraPedestal(this.value)">
	                                        </div>
                                        </div>
                                        <div class="col-lg-6">
		                                	<div class="form-group">
	                                            <label>Alto Pedestal</label>
	                                            <input class="form-control" onkeyup="addAlturaPedestal(this.value)">
	                                        </div>
                                        </div>
	                                </div>
	                                <div class="row">
	                                	<div class="col-lg-12">
		                                	<div class="form-group">
	                                            <label>Información</label>
	                                            <textarea class="form-control" rows="3"></textarea>
	                                        </div>
                                        </div>
	                                </div>
                                </div>
                                <!------------------------------------ INICIO ESCENARIO ------------------------------------>
                                <div class="tab-pane fade" id="escena-pills">
                                	<div class="row">
                                		<div class="col-lg-12" id="escena">
		                                    <X3D id="the_scene">
												<Scene>
													<inline url="./x3d/visionar.x3d"  translation="0 0 0"> </inline>
												</Scene>
											</X3D>
										</div>
									</div>
                                </div>
                                <!------------------------------------ INICIO PRIMERA PERSONA ------------------------------------>
                                <div class="tab-pane fade" id="camara-pills">
                                	<div class="row">
                                		<div class="col-lg-12">
                                			<!--<div class="row">
                                				<div class="col-lg-12" id="FirstCameraVR">
				                                    <X3D id="VRCamera">
														<Scene>
															<inline url="./x3d/visionar.x3d"  translation="0 0 0"> </inline>
														</Scene>
													</X3D> 
												</div>
											</div>-->
                      
                                            <button class="btn btn-primary btn-lg" id="botonPantallaVR" data-toggle="modal" data-target="#myModal" onclick="loadVRX3D()">
                                                Primera Persona VR
                                            </button>
                                            <!-- Modal -->
                                            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content" id="FirstCameraVR">
                                                        <X3D id="VRCamera">
                                                            <Scene>
                                                                <inline url="./x3d/visionar.x3d"  translation="0 0 0"> </inline>
                                                            </Scene>
                                                        </X3D>
                                                    </div>
                                                    <!-- /.modal-content -->
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>
                                            <!-- /.modal -->

                                            <div class="form-group">
                                                <label>Altura</label>
                                                <input class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label>Zancada</label>
                                                <input class="form-control">
                                            </div>
										</div>
									</div>
                                </div>
                            </div>
                        </div> <!-- /.panel-body -->
                    </div> <!-- /.panel -->

                    <!------------------------------------INICIO INFORMACIÓN DE CÁMARAS ------------------------------------>
                    <div class="panel panel-primary" id="panelCameras" style="display: none;">
                        <div class="panel-heading">
                            <i class="fa fa-thumb-tack fa-fw"></i>
                            Información de Cámaras y Puntos de Ruta
                        </div>
                        <div class="panel-body">
                            <ul class="nav nav-tabs" id="">
                                <li class="active"><a href="#activeCamera-pills" data-toggle="tab">Información General</a> <!-- Alba -->
                                </li>
                                <li><a href="#controlPoints-pills" data-toggle="tab">Puntos de Ruta</a> <!-- Alba -->
                                </li>
                                <li><a href="#cameraView-pills" data-toggle="tab" onclick="loadX3D360()">Vista de Cámara</a> <!-- Alba -->
                                </li>
                            </ul>
                            <div class="tab-content">
                                <!------------------------------------ INICIO CAMARA SELECCIONADA ------------------------------------>
                                <div class="tab-pane fade active in row" id="activeCamera-pills">
                                    <div class="panel-body">
                                            <form role="form" id="cameraForm" action="php/cameras/updateCamera.php" target="form_aux_frame" onsubmit="submitCameraForm()">
                                                <!-- Funcionalidad Potencial: cámara activada en un tiempo específico -->
                                                <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <label for="aCameraX"> Coord X </label>
                                                        <input id="aCameraX" type="number" class="form-control" onchange="updateCameraCoords('x')" required/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <label> Coord Y  </label>
                                                        <input id="aCameraY" type="number" class="form-control" onchange="updateCameraCoords('y')" required/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <label> Coord Z </label>
                                                        <input id="aCameraZ" type="number" name="cZ" class="form-control" onchange="updateCameraCoords('z')" required/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6" >
                                                    <div class="form-group">
                                                        <label> Tiempo Animación </label>
                                                        <input type="number" id="durationCamera" name="duration" class="form-control" min="0" required
                                                        onchange="timeChanged()"/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label> Puntos de Ruta </label>
                                                        <input type="number" id="numPoint" class="form-control" readonly/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button type="submit" id="btnSubmit" class="btn btn-default" onclick="submitCameraForm()" disabled>Guardar datos</button>
                                                </div>
                                                <input type='hidden' id='idCamera' name='idCamera' value='' />
                                                <input type='hidden' id='aCameraXN' step="0.0001" name='cX' value='' />
                                                <input type='hidden' id='aCameraYN' step="0.0001" name='cY' value='' />
                                            </form>
                                        </div>
                                </div>
                                <!------------------------------------INICIO PUNTOS DE CONTROL ------------------------------------>
                                <div class="tab-pane fade row" id="controlPoints-pills">
                                    <div class="panel-body">
                                        <div class="panel-group">
                                            <div id="noPointAlert" class="alert alert-warning text-center">
                                                Añada un nuevo <strong> punto de ruta </strong> a la cámara activa.
                                            </div>
                                            <div id="pointAccordion"></div>
                                        </div>
                                    </div>
                                </div>
                                <!------------------------------------INICIO VISTA DE CAMARA ------------------------------------>
                                <div class="tab-pane fade row" id="cameraView-pills">
                                    <div class="panel-body">
                                        <div class="panel-group">
                                            <div id="noCameraAlert" class="alert alert-warning text-center">
                                                Añada una nueva <strong> cámara </strong>.
                                            </div>
                                            <div class="col-lg-12" id="sceneCamera">
                                                <X3D id="the_sceneCamera">
                                                    <Scene>
                                                        <inline url="./x3d/visionar.x3d"  translation="0 0 0"> </inline>
                                                    </Scene>
                                                </X3D>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
			    </div>
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- Frame auxiliar para la redireccion de formularios -->
    <iframe name="form_aux_frame" width="1" height="1" style="border:none"></iframe>

    <!-- jQuery -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>

</body>

</html>
