

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
                                <input id="campNombre" class="form-control" onkeyup="updateInfoForm('campNombre')">
                            </div>
                            <div class="form-group">
                                <label>Cronología</label>
                                <input id="campCronologia" class="form-control" onkeyup="updateInfoForm('campCronologia')">
                            </div>
                            <div class="form-group">
                                <label>Técnica</label>
                                <input id="campTecnica" class="form-control" onkeyup="updateInfoForm('campTecnica')">
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6" id="visorEscultura">
						<div class="panel panel-primary">
                    		<div id="viewElement"></div>
                    		<img id="viewPicture" src="./uploads/IMG/Vicente/nocheestrelladamenu.png" alt="Image" class="img-responsive" style="display: none;">
                    	</div>
                    </div>   
                </div>
                <div class="row">
                	<div class="col-lg-6">
                    	<div class="form-group" id="anchoPedestal">
                         	<label>Ancho Pedestal</label>
                            <input id="campPedAncho" class="form-control" onkeyup="addAnchuraPedestal(this.value)">
                        </div>
                    </div>
                    <div class="col-lg-6">
                    	<div class="form-group" id="altoPedestal">
                            <label>Alto Pedestal</label>
                            <input id="campPedAlto" class="form-control" onkeyup="addAlturaPedestal(this.value)">
                        </div>
                    </div>
                </div>
                <div class="row">
                	<div class="col-lg-12">
                    	<div class="form-group">
                            <label>Información</label>
                            <textarea id="campInfo" class="form-control" rows="3" onkeyup="updateInfoForm('campInfo')"></textarea>
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