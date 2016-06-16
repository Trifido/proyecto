
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

        <script  type="text/javascript" src="../scripts/upload/uploadEscultura.js"></script>

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Añadir Nueva Escultura</h1>
            </div>
        </div>

        <div class="row"> 
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                            <h3 class="panel-title">Añadir Escultura</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="cameraForm" method="post" action="./RegistrarEscultura.php" >
                            <fieldset>
                                <div class="form-group">
                                    <label>Nombre de la Escultura</label>
                                    <input id="campoNombEscultura" class="form-control" placeholder="Nombre Escultura" name="nomEscultura" type="text" autofocus>
                                </div>
                                <div class="form-group">
                                    <label>Cronología</label>
                                    <input class="form-control" placeholder="Cronología" name="cronologia" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label>Técnica</label>
                                    <input class="form-control" placeholder="Técnica" name="tecnica" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label>Información</label>
                                    <textarea class="form-control" name="informacion" rows="3"></textarea>
                                </div>
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        Datos de la Imagen Cenital
                                    </div>

                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label>Ancho Pixeles</label>
                                            <input class="form-control" placeholder="Ancho Imagen (Pixeles)" name="anchoPixEscultura" type="text" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles</label>
                                            <input class="form-control" placeholder="Alto Imagen (Pixeles)" name="altoPixEscultura" type="text" value="">
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
                                            <input class="form-control" placeholder="Ancho Imagen Menu (Pixeles)" name="anchoPixMenEscultura" type="text" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles Imagen Menu</label>
                                            <input class="form-control" placeholder="Alto Imagen Menu (Pixeles)" name="altoPixMenEscultura" type="text" value="">
                                        </div>
                                        
                                    </div>
                                </div>

                                <button type="submit" id="btnSubmit" class="btn btn-lg btn-info btn-block">Añadir</button>
                            </fieldset>
                        </form>

                        <p>
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Modelos 3D de la Escultura.
                                </div>

                                <div class="panel-body">
                                    <form role="form" id="modelForm" method="post">
                                        <fieldset>
                                           <div class="form-group">
                                                <label>Archivo X3D</label>
                                                <input class="form-control" id="inputX3D" placeholder="X3D" name="modelX3D" type="file" value="">
                                                <button type="button" id="BX3D" class="btn btn-primary btn-block" onclick="sendX3DSculpture()">Añadir X3D</button>
                                            </div>
                                            <div class="form-group">
                                                <label>Archivo OBJ</label>
                                                <input class="form-control" id="inputOBJ" placeholder="OBJ" name="modelObj" type="file" value="">
                                                <button type="button" id="BOBJ" class="btn btn-primary btn-block" onclick="sendObjModelSculpture()">Añadir OBJ</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div> 
                            </div>
                        </p>

                        <p>
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Imágenes de la Escultura.
                                </div>

                                <div class="panel-body">
                                    <form role="form" id="ImgForm" method="post">
                                        <fieldset>
                                           <div class="form-group">
                                                <label>Imagen Cenital</label>
                                                <input class="form-control" id="inputImgCenital" placeholder="Imagen Cenital" name="imgCenital" type="file" value="">
                                                <button type="button" id="BImgCenital" class="btn btn-primary btn-block" onclick="sendImgCanvasSculpture()">Añadir Imagen Cenital</button> <!---->
                                            </div>
                                            <div class="form-group">
                                                <label>Imagen de Menu</label>
                                                <input class="form-control" id="inputImgMenu" placeholder="Imagen Menu" name="imgMenu" type="file" value="">
                                                <button type="button" id="BImgMenu" class="btn btn-primary btn-block" onclick="sendImgMenuSculpture()">Añadir Imagen Menu</button> <!-- -->
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