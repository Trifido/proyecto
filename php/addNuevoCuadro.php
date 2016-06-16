
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

        <script  type="text/javascript" src="../scripts/upload/uploadCuadro.js"></script>

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Añadir Nuevo Cuadro</h1>
            </div>
        </div>

        <div class="row"> 
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                            <h3 class="panel-title">Añadir Cuadro</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="cameraForm" method="post" action="./RegistrarCuadro.php" >
                            <fieldset>
                                <div class="form-group">
                                    <label>Nombre del Cuadro</label>
                                    <input id="campoNombEscultura" class="form-control" placeholder="Nombre Cuadro" name="nomCuadro" type="text" autofocus>
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
                                    <label>Alto Cuadro</label>
                                    <input class="form-control" placeholder="Alto Cuadro (Metros)" name="altoCuadro" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label>Largo Cuadro</label>
                                    <input class="form-control" placeholder="Largo Cuadro (Metros)" name="largoCuadro" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label>Información</label>
                                    <textarea class="form-control" name="informacion" rows="3"></textarea>
                                </div>
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        Datos de la Imagen del Canvas
                                    </div>

                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label>Ancho Pixeles</label>
                                            <input class="form-control" placeholder="Ancho Imagen (Pixeles)" name="anchoPixCuadro" type="text" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles</label>
                                            <input class="form-control" placeholder="Alto Imagen (Pixeles)" name="altoPixCuadro" type="text" value="">
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
                                            <input class="form-control" placeholder="Ancho Imagen Menu (Pixeles)" name="anchoPixMenCuadro" type="text" value="">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles Imagen Menu</label>
                                            <input class="form-control" placeholder="Alto Imagen Menu (Pixeles)" name="altoPixMenCuadro" type="text" value="">
                                        </div>
                                        
                                    </div>
                                </div>

                                <button type="submit" id="btnSubmit" class="btn btn-lg btn-info btn-block">Añadir</button>
                            </fieldset>
                        </form>

                        <p>
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Imágenes del Cuadro.
                                </div>

                                <div class="panel-body">
                                    <form role="form" id="ImgForm" method="post">
                                        <fieldset>
                                            <div class="form-group">
                                                <label>Imagen Cuadro </label>
                                                <input class="form-control" id="inputImgCuadro" placeholder="Imagen Cuadro" name="imgCuadro" type="file" value="">
                                                <button type="button" id="BImgCuadro" class="btn btn-primary btn-block" onclick="sendImgPicture()">Añadir Imagen Cuadro Escenario</button>
                                            </div>
                                            <div class="form-group">
                                                <label>Imagen Canvas</label>
                                                <input class="form-control" id="inputImgCenital" placeholder="Imagen Cuadro" name="imgCenital" type="file" value="">
                                                <button type="button" id="BImgCenital" class="btn btn-primary btn-block" onclick="sendImgCanvasPicture()">Añadir Imagen Canvas</button>
                                            </div>
                                            <div class="form-group">
                                                <label>Imagen de Menu</label>
                                                <input class="form-control" id="inputImgMenu" placeholder="Imagen Menu" name="imgMenu" type="file" value="">
                                                <button type="button" id="BImgMenu" class="btn btn-primary btn-block" onclick="sendImgMenuPicture()">Añadir Imagen Menu</button>
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