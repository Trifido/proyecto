<?php

	class StructEscenarioCarga{
        public $nombre;
        public $pathFoto;
        public $pathJson;
    };

    require_once './php/dbhandler.php';

    $db = sqlite_open('./database/tfgDB.db');

	$query = 'SELECT*FROM EscenariosCreados';
	$result = sqlite_query($db, $query);
	$arrayEscenarios = array();

	while ($entry = $result->fetchArray()) {
        $struct = new StructEscenarioCarga();
    	$struct->nombre = $entry['NombreEscenario'];
        $struct->pathFoto = "/tfg" . $entry['PathImgWeb'];
        $struct->pathJson = $entry['PathEscenario'];
        $arrayEscenarios[] = $struct;
	}

	$numEscenarios = $db->querySingle("SELECT COUNT(*) as count FROM EscenariosCreados");
	$numBloques = $numEscenarios / 4;

	sqlite_close($db);

	$stringResult = '';

    for( $i=0; $i<$numBloques; $i++){
    	$stringResult = $stringResult . '<div class="row">';
    	for($count=0, $j= $i*4; $count<4 && $j<$numEscenarios; $count++, $j++){
    		$stringResult = $stringResult .'<div class="col-lg-3">
            <div class="panel panel-success">
                <div class="panel-heading">' . $arrayEscenarios[$j]->nombre . '</div>
                <div class="panel-body"> <a><img src="' . $arrayEscenarios[$j]->pathFoto . "\" alt=\"Image\" class=\"img-responsive\" onclick=\"CargarEscenarioWeb('". $arrayEscenarios[$j]->pathJson ."')\" data-toggle=\"modal\" data-target=\"#myModalIndexWeb\"></a> </div>" .
            '</div>
        </div>';

    	}
    	$stringResult = $stringResult . '</div>';
    }

    echo $stringResult;

?>