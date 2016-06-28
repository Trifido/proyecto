<?php

	class StructEscultura{
        public $nombre;
        public $pathFoto;
    };

    require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('../database/tfgDB.db');

	$query = 'SELECT*FROM Esculturas WHERE NombreUsuario=\'' . $_SESSION["username"] .'\'';
	$result = sqlite_query($db, $query);
	$arrayEsculturas = array();

	while ($entry = $result->fetchArray()) {
        $struct = new StructEscultura();
    	$struct->nombre = $entry['NombreEscultura'];
        $arrayEsculturas[] = $struct;
	}

    $query = 'SELECT PathImg FROM ImgEscultura WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND TipoImg=\'menu\'';
    $result = sqlite_query($db, $query);

    $i=0;
    while ($entry = $result->fetchArray()) {
        $arrayEsculturas[$i]->pathFoto = $entry['PathImg'];
        $i++;
    }


	$numEsculturas = $db->querySingle("SELECT COUNT(*) as count FROM Esculturas WHERE NombreUsuario='". $_SESSION["username"] ."'");
	$numBloques = $numEsculturas / 3;

	sqlite_close($db);

	$stringResult = '<div class="row">
	    <div class="col-lg-12">
	        <h1 class="page-header">Mis Esculturas</h1>
	    </div>
	</div>';

    for( $i=0; $i<$numBloques; $i++){
    	$stringResult = $stringResult . '<div class="row">';
    	for($count=0, $j= $i*3; $count<3 && $j<$numEsculturas; $count++, $j++){
    		$stringResult = $stringResult .'<div class="col-lg-4">
            <div class="panel panel-success">
                <div class="panel-heading">' . $arrayEsculturas[$j]->nombre . '</div>
                <div class="panel-body"> <a><img src=".' . $arrayEsculturas[$j]->pathFoto . '" alt="Image" class="img-responsive"></a> </div>' .
                "<div class=\"panel-footer\"> <button type=\"button\" class=\"btn btn-primary btn-block\" onclick=\"EditarEscultura('" . $arrayEsculturas[$j]->nombre ."')\">Editar</button>" . "<button type=\"button\" class=\"btn btn-danger btn-block\" onclick=\"EliminarEscultura('" . $arrayEsculturas[$j]->nombre ."')\">Eliminar Escultura</button>" .'</div>
            </div>
        </div>';
    	}

    	$stringResult = $stringResult . '</div>';
    }

    echo $stringResult;

?>