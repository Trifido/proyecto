
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
                        <h3 class="panel-title">Editar Sala</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="editarEscultura" >
                            <fieldset>
                                <div class="form-group">
                                    <label>Ancho Sala</label>
                                    <input id="campoAncho" class="form-control" placeholder="Ancho Sala (Metros)" name="anchoSala" type="text" value="" onkeyup="updateRoom('Ancho')">
                                </div>
                                <div class="form-group">
                                    <label>Largo Sala</label>
                                    <input id="campoLargo" class="form-control" placeholder="Largo Sala (Metros)" name="largoSala" type="text" value="" onkeyup="updateRoom('Largo')">
                                </div>
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        Datos de la Imagen del Canvas
                                    </div>

                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label>Ancho Pixeles</label>
                                            <input id="campoAnchoPx" class="form-control" placeholder="Ancho Imagen (Pixeles)" name="anchoPixSala" type="text" value="" onkeyup="updateRoom('AnchoPx')">
                                        </div>
                                        <div class="form-group">
                                            <label>Alto Pixeles</label>
                                            <input id="campoAltoPx" class="form-control" placeholder="Alto Imagen (Pixeles)" name="altoPixSala" type="text" value="" onkeyup="updateRoom('AltoPx')">
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
        echo "<script> showInfoEscultura( \"room\", \"" . $_SESSION["nombreEditado"] ."\") </script>";
    ?>