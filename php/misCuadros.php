<?php

	class StructCuadro{
        public $nombre;
        public $pathFoto;
    };

    require_once 'dbhandler.php';

    $db = sqlite_open('../database/tfgDB.db');

	$query = 'SELECT*FROM Cuadros WHERE NombreUsuario=\'' . $_SESSION["username"] .'\'';
	$result = sqlite_query($db, $query);
	$arrayCuadros = array();

	while ($entry = $result->fetchArray()) {
        $struct = new StructCuadro();
    	$struct->nombre = $entry['NombreCuadro'];
        $arrayCuadros[] = $struct;
	}

    $query = 'SELECT PathImg FROM ImgCuadro WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND TipoImg=\'menu\'';
    $result = sqlite_query($db, $query);

    $i=0;
    while ($entry = $result->fetchArray()) {
        $arrayCuadros[$i]->pathFoto = $entry['PathImg'];
        $i++;
    }


	$numCuadros = $db->querySingle("SELECT COUNT(*) as count FROM Cuadros WHERE NombreUsuario='". $_SESSION["username"] ."'");
	$numBloques = $numCuadros / 3;

	sqlite_close($db);

	$stringResult = '<div class="row">
	    <div class="col-lg-12">
	        <h1 class="page-header">Mis Cuadros</h1>
	    </div>
	</div>';

    for( $i=0; $i<$numBloques; $i++){
    	$stringResult = $stringResult . '<div class="row">';
    	for($count=0, $j= $i*3; $count<3 && $j<$numCuadros; $count++, $j++){
    		$stringResult = $stringResult .'<div class="col-lg-4">
            <div class="panel panel-success">
                <div class="panel-heading">' . $arrayCuadros[$j]->nombre . '</div>
                <div class="panel-body"> <a><img src=".' . $arrayCuadros[$j]->pathFoto . '" alt="Image" class="img-responsive"></a> </div>' .
                "<div class=\"panel-footer\"> <button type=\"button\" class=\"btn btn-primary btn-block\" onclick=\"EditarCuadro('" . $arrayCuadros[$j]->nombre ."')\">Editar</button>" . "<button type=\"button\" class=\"btn btn-danger btn-block\" onclick=\"EliminarCuadro('" . $arrayCuadros[$j]->nombre ."')\">Eliminar Cuadro</button>" .'</div>

            </div>
        </div>';
    	}

    	$stringResult = $stringResult . '</div>';
    }

    echo $stringResult;

?>