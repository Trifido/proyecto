
        <!--<script type="text/javascript">
            function validar(){
                var valor = document.getElementById("campoUsuario").value;
                if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
                    alert("Campo usuario incorrecto");
                    return false;
                }

                var valor = document.getElementById("campoPassword").value;
                if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
                    alert("Campo contraseña incorrecto");
                    return false;
                }

                valor = document.getElementById("campoCorreo").value;
                if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)) ) {
                    alert("Formato Email erroneo");
                    return false;
                }
                
                valor = document.getElementById("campoTelefono").value;
                if( !(/^\d{9}$/.test(valor)) ) {
                    alert("Formato Telefono erroneo");
                    return false;
                }
                return true;
            }
        </script> -->

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Añadir Nueva Sala</h1>
            </div>
        </div>


        <div class="row"> 
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                            <h3 class="panel-title">Añadir Sala</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="cameraForm" method="post" enctype="multipart/form-data" action="./RegistrarSala.php" >
                            <fieldset>
                                <div class="form-group">
                                    <label>Nombre de Sala</label>
                                    <input id="campoNombSala" class="form-control" placeholder="Nombre Sala" name="nomSala" type="nomSala" autofocus>
                                </div>
                                <div class="form-group">
                                    <label>Ancho Sala</label>
                                    <input class="form-control" placeholder="Ancho Sala (Metros)" name="anchoSala" type="anchoSala" value="">
                                </div>
                                <div class="form-group">
                                    <label>Largo Sala</label>
                                    <input class="form-control" placeholder="Largo Sala (Metros)" name="largoSala" type="largoSala" value="">
                                </div>
                                <div class="form-group">
                                    <label>Archivo X3D con techo</label>
                                    <input class="form-control" placeholder="X3D con techo" name="x3dTecho" type="file" value="">
                                </div>
                                <div class="form-group">
                                    <label>Archivo X3D sin techo</label>
                                    <input class="form-control" placeholder="X3D sin techo" name="x3dsinTecho" type="file" value="">
                                </div>
                                <div class="form-group">
                                    <label>Archivo OBJ Sala</label>
                                    <input class="form-control" placeholder="OBJ Sala" name="objSala" type="file" value="">
                                </div>
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        Datos de la Imagen del Canvas
                                    </div>

                                    <div class="panel-body">
                                       <div class="form-group">
                                            <label>Imagen de la Sala</label>
                                            <input class="form-control" placeholder="Imagen de la Sala" name="imgSala" type="file" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Ancho Pixeles</label>
                                            <input class="form-control" placeholder="Ancho Imagen (Pixeles)" name="anchoPixSala" type="anchoPixoSala" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles</label>
                                            <input class="form-control" placeholder="Alto Imagen (Pixeles)" name="altoPixSala" type="altoPixSala" value="">
                                        </div>
                                    </div>
                                </div>

                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        Datos de la Imagen del Menu
                                    </div>

                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label>Imagen Menu Sala</label>
                                            <input class="form-control" placeholder="Imagen de menu de la Sala" name="imgMenuSala" type="file" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Ancho Pixeles Imagen Menu</label>
                                            <input class="form-control" placeholder="Ancho Imagen Menu (Pixeles)" name="anchoPixMenSala" type="anchoPixoMenSala" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles Imagen Menu</label>
                                            <input class="form-control" placeholder="Alto Imagen Menu (Pixeles)" name="altoPixMenSala" type="altoPixMenSala" value="">
                                        </div>
                                        
                                    </div>
                                </div>

                                <button type="submit" id="btnSubmit" class="btn btn-lg btn-info btn-block">Añadir</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>   
        </div>       