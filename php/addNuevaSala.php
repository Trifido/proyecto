
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

        <script  type="text/javascript" src="../scripts/upload/uploadSala.js"></script>

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
                        <form role="form" id="cameraForm" method="post" action="./RegistrarSala.php" >
                            <fieldset>
                                <div class="form-group">
                                    <label>Nombre de Sala</label>
                                    <input id="campoNombSala" class="form-control" placeholder="Nombre Sala" name="nomSala" type="text" autofocus>
                                </div>
                                <div class="form-group">
                                    <label>Ancho Sala</label>
                                    <input class="form-control" placeholder="Ancho Sala (Metros)" name="anchoSala" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label>Largo Sala</label>
                                    <input class="form-control" placeholder="Largo Sala (Metros)" name="largoSala" type="text" value="">
                                </div>

                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        Datos de la Imagen del Canvas
                                    </div>

                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label>Ancho Pixeles</label>
                                            <input class="form-control" placeholder="Ancho Imagen (Pixeles)" name="anchoPixSala" type="text" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles</label>
                                            <input class="form-control" placeholder="Alto Imagen (Pixeles)" name="altoPixSala" type="text" value="">
                                        </div>
                                    </div>
                                </div>

                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        Datos de la Imagen del Menu
                                    </div>

                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label>Ancho Pixeles Imagen Menu</label>
                                            <input class="form-control" placeholder="Ancho Imagen Menu (Pixeles)" name="anchoPixMenSala" type="text" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles Imagen Menu</label>
                                            <input class="form-control" placeholder="Alto Imagen Menu (Pixeles)" name="altoPixMenSala" type="text" value="">
                                        </div>
                                        
                                    </div>
                                </div>

                                <button type="submit" id="btnSubmit" class="btn btn-lg btn-info btn-block">Añadir</button>
                            </fieldset>
                        </form>

                        <p>
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Modelos 3D de la sala.
                                </div>

                                <div class="panel-body">
                                    <form role="form" id="modelForm" method="post">
                                        <fieldset>
                                           <div class="form-group">
                                                <label>Archivo X3D con techo</label>
                                                <input class="form-control" id="inputX3DTecho" placeholder="X3D con techo" name="modelTecho" type="file" value="">
                                                <button type="button" id="BX3DTecho" class="btn btn-primary btn-block" onclick="sendX3DTecho()">Añadir X3D</button>
                                            </div>
                                            <div class="form-group">
                                                <label>Archivo X3D sin techo</label>
                                                <input class="form-control" id="inputX3DSinTecho" placeholder="X3D sin techo" name="modelSinTecho" type="file" value="">
                                                <button type="button" id="BX3DSinTecho" class="btn btn-primary btn-block" onclick="sendX3DSinTecho()">Añadir X3D</button>
                                            </div>
                                            <div class="form-group">
                                                <label>Archivo OBJ Sala</label>
                                                <input class="form-control" id="inputOBJ" placeholder="OBJ Sala" name="modelObj" type="file" value="">
                                                <button type="button" id="BOBJ" class="btn btn-primary btn-block" onclick="sendObjModel()">Añadir OBJ</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div> 
                            </div>
                        </p>

                        <p>
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Imágenes de la Sala.
                                </div>

                                <div class="panel-body">
                                    <form role="form" id="ImgForm" method="post">
                                        <fieldset>
                                           <div class="form-group">
                                                <label>Imagen de Canvas</label>
                                                <input class="form-control" id="inputImgCanvas" placeholder="X3D con techo" name="imgCanvas" type="file" value="">
                                                <button type="button" id="BImgCanvas" class="btn btn-primary btn-block" onclick="sendImgCanvas()">Añadir Imagen Canvas</button>
                                            </div>
                                            <div class="form-group">
                                                <label>Imagen de Menu</label>
                                                <input class="form-control" id="inputImgMenu" placeholder="X3D sin techo" name="imgMenu" type="file" value="">
                                                <button type="button" id="BImgMenu" class="btn btn-primary btn-block" onclick="sendImgMenu()">Añadir Imagen Menu</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div> 
                            </div>
                        </p>
                    </div>
                </div>
            </div>   
        </div>       