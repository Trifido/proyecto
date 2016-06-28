<?php

	class StructEscenario{
        public $nombre;
        public $pathFoto;
        public $pathJson;
    };

    require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('../database/tfgDB.db');

	$query = 'SELECT*FROM EscenariosCreados WHERE NombreUsuario=\'' . $_SESSION["username"] .'\'';
	$result = sqlite_query($db, $query);
	$arrayEscenarios = array();

	while ($entry = $result->fetchArray()) {
        $struct = new StructEscenario();
    	$struct->nombre = $entry['NombreEscenario'];
        $struct->pathFoto = $entry['PathImgWeb'];
        $struct->pathJson = $entry['PathSave'];
        $arrayEscenarios[] = $struct;
	}

	$numEscenarios = $db->querySingle("SELECT COUNT(*) as count FROM EscenariosCreados WHERE NombreUsuario='". $_SESSION["username"] ."'");
	$numBloques = $numEscenarios / 3;

	sqlite_close($db);

	$stringResult = '<div class="row">
	    <div class="col-lg-12">
	        <h1 class="page-header">Mis Escenarios</h1>
	    </div>
	</div>';

    for( $i=0; $i<$numBloques; $i++){
    	$stringResult = $stringResult . '<div class="row">';
    	for($count=0, $j= $i*3; $count<3 && $j<$numEscenarios; $count++, $j++){
    		$stringResult = $stringResult .'<div class="col-lg-4">
            <div class="panel panel-success">
                <div class="panel-heading">' . $arrayEscenarios[$j]->nombre . '</div>
                <div class="panel-body"> <a><img src=".' . $arrayEscenarios[$j]->pathFoto . '" alt="Image" class="img-responsive"></a> </div>' .
                "<div class=\"panel-footer\"> <button type=\"button\" class=\"btn btn-primary btn-block\" onclick=\"guardarPathJSON('" . $arrayEscenarios[$j]->pathJson ."')\">Cargar Escenario</button>" . "<button type=\"button\" class=\"btn btn-danger btn-block\" onclick=\"EliminarEscenario('" . $arrayEscenarios[$j]->nombre ."')\">Eliminar Escenario</button>" .'</div>
            </div>
        </div>';

    	}
    	$stringResult = $stringResult . '</div>';
    }

    echo $stringResult;

?>