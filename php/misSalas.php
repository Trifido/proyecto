<?php

	class StructSala{
        public $nombre;
        public $pathFoto;
    };

    require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('../database/tfgDB.db');

	$query = 'SELECT*FROM Salas WHERE NombreUsuario=\'' . $_SESSION["username"] .'\'';
	$result = sqlite_query($db, $query);
	$arraySalas = array();

	while ($entry = $result->fetchArray()) {
        $struct = new StructSala();
    	$struct->nombre = $entry['NombreSala'];
        $arraySalas[] = $struct;
	}

    $query = 'SELECT PathImgSala FROM ImgSala WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND TipoImgSala=\'canvas\'';
    $result = sqlite_query($db, $query);

    $i=0;
    while ($entry = $result->fetchArray()) {
        $arraySalas[$i]->pathFoto = $entry['PathImgSala'];
        $i++;
    }


	$numSalas = $db->querySingle("SELECT COUNT(*) as count FROM Salas WHERE NombreUsuario='". $_SESSION["username"] ."'");
	$numBloques = $numSalas / 3;

	sqlite_close($db);

	$stringResult = '<div class="row">
	    <div class="col-lg-12">
	        <h1 class="page-header">Mis Salas</h1>
	    </div>
	</div>';

    for( $i=0; $i<$numBloques; $i++){
    	$stringResult = $stringResult . '<div class="row">';
    	for($count=0, $j= $i*3; $count<3 && $j<$numSalas; $count++, $j++){
    		$stringResult = $stringResult .'<div class="col-lg-4">
            <div class="panel panel-success">
                <div class="panel-heading">' . $arraySalas[$j]->nombre . '</div>
                <div class="panel-body"> <a><img src=".' . $arraySalas[$j]->pathFoto . '" alt="Image" class="img-responsive"></a> </div>' .
                "<div class=\"panel-footer\"> <button type=\"button\" class=\"btn btn-primary btn-block\" onclick=\"EditarSala('" . $arraySalas[$j]->nombre ."')\">Editar</button>" . "<button type=\"button\" class=\"btn btn-danger btn-block\" onclick=\"EliminarSala('" . $arraySalas[$j]->nombre ."')\">Eliminar Sala</button>" .'</div>
            </div>
        </div>';
    	}

    	$stringResult = $stringResult . '</div>';
    }

    echo $stringResult;

?>