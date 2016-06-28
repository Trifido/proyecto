
		<?php
			echo '<div class="row">
		            <div class="col-lg-12">
		                <h1 class="page-header"> ' . $_SESSION["nombreEditado"] . '</h1>
		            </div>
		        </div>';
		?>

        <div class="row"> 
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                            <h3 class="panel-title">Editar Escultura</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="editarEscultura" >
                            <fieldset>
                                <div class="form-group">
                                    <label>Cronología</label>
                                    <input id="campoCronologia" class="form-control" placeholder="Cronología" name="cronologia" type="text" value="" onkeyup="updateCuadro('Cronologia')">
                                </div>
                                <div class="form-group">
                                    <label>Técnica</label>
                                    <input id="campoTecnica" class="form-control" placeholder="Técnica" name="tecnica" type="text" value="" onkeyup="updateCuadro('Tecnica')">
                                </div>
                                <div class="form-group">
                                    <label>Alto Cuadro</label>
                                    <input id="campoAltoCuadro" class="form-control" placeholder="Alto Cuadro (Metros)" name="altoCuadro" type="text" value="" onkeyup="updateCuadro('AltoCuadro')">
                                </div>
                                <div class="form-group">
                                    <label>Largo Cuadro</label>
                                    <input id="campoLargoCuadro" class="form-control" placeholder="Largo Cuadro (Metros)" name="largoCuadro" type="text" value="" onkeyup="updateCuadro('LargoCuadro')">
                                </div>
                                <div class="form-group">
                                    <label>Información</label>
                                    <textarea id="campoInfo" class="form-control" name="informacion" rows="3" onkeyup="updateCuadro('Informacion')"></textarea>
                                </div>
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        Datos de la Imagen Cenital
                                    </div>

                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label>Ancho Pixeles</label>
                                            <input id="campoAncho" class="form-control" placeholder="Ancho Imagen (Pixeles)" name="anchoPixEscultura" type="text" value="" onkeyup="updateCuadro('Ancho')">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles</label>
                                            <input id="campoAlto" class="form-control" placeholder="Alto Imagen (Pixeles)" name="altoPixEscultura" type="text" value="" onkeyup="updateCuadro('Alto')">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>  
                    </div>
                </div>
            </div>   
        </div>

        <?php 
        	echo "<script> showInfoEscultura( \"picture\", \"" . $_SESSION["nombreEditado"] ."\") </script>";
        ?>