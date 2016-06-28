
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

        <script type="text/javascript">
            function Exportar(){

                var nombreEscenario = document.getElementById("campoNombEscenario").value;
                var nombreMuseo = document.getElementById("nombreMuseo").value;
                var localizacion = document.getElementById("localizacion").value;

                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    }
                };
                
                xmlhttp.open("GET", "./crearJSON.php?nomEscenario="+nombreEscenario+"&nombreMuseo="+nombreMuseo+"&localizacion="+localizacion, true);
                xmlhttp.send();
            }
        </script>

        <script  type="text/javascript" src="../scripts/upload/uploadEscenario.js"></script>

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Exportar Nuevo Escenario</h1>
            </div>
        </div>


        <div class="row"> 
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                            <h3 class="panel-title">Exportar Escenario</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="EscenarioForm" method="post" action="./RegistrarSala.php" >
                            <fieldset>
                                <div class="form-group">
                                    <label>Nombre del Escenario</label>
                                    <input id="campoNombEscenario" class="form-control" placeholder="Nombre del Escenario" name="nomEsceneario" type="text" autofocus>
                                </div>
                                <div class="form-group">
                                    <label>Nombre del Museo</label>
                                    <input id="nombreMuseo" class="form-control" placeholder="Nombre del Museo" name="nombreMuseo" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label>Localización</label>
                                    <input id="localizacion" class="form-control" placeholder="Localización" name="localizacion" type="text" value="">
                                </div>
                                <button type="button" id="buttonSub" class="btn btn-lg btn-info btn-block" onclick="Exportar()">Exportar</button>

                                <div class="form-group">
                                    <label>Imagen del Escenario</label>
                                    <input class="form-control" id="inputImgEscenario" placeholder="Imagen Escenario" name="imgEscenario" type="file" value="">
                                    <button type="button" id="BImgEscenario" class="btn btn-primary btn-block" onclick="sendImgEscenario()">Añadir Imagen Escenario</button>
                                </div>  
                            </fieldset>
                        </form>                       
                    </div>
                </div>
            </div>   
        </div>       