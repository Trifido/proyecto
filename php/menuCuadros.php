
<?php

    class StructCuadros{
        public $nombreCuadro;
        public $alto;
        public $ancho;
    };

	require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('./database/tfgDB.db');

	$query = 'SELECT NombreCuadro, Alto, Largo FROM Cuadros WHERE NombreUsuario=\'' . $_SESSION["username"] .'\'';
	$result = sqlite_query($db, $query);
	$arrayCuadros = array();

	while ($entry = $result->fetchArray()) {
        $struct = new StructCuadros();
    	$struct->nombreCuadro = $entry['NombreCuadro'];
        $struct->alto = $entry['Alto'];
        $struct->ancho = $entry['Largo'];
        $arrayCuadros[] = $struct;
	}

	$numCuadros = $db->querySingle("SELECT COUNT(*) as count FROM Cuadros WHERE NombreUsuario='". $_SESSION["username"] ."'");
	$numBloques = $numCuadros / 4;

    $stringResult = '';

	$stringResult = $stringResult . '<div class="well">
        <div id="myCarouselCuadro" class="carousel slide">
            <div class="carousel-inner">';

            for( $i=0; $i<$numBloques; $i++){

        		if($i == 0)
        			$stringResult  = $stringResult . '<div class="item active"> <div class="row">';
        		else
        			$stringResult  = $stringResult . '<div class="item"> <div class="row">';

            	for($count=0, $j= $i*4; $count<4 && $j<$numCuadros; $count++, $j++){ //, $j= $i*4

            		$query = 'SELECT PathImg FROM ImgCuadro WHERE NombreCuadro=\'' . $arrayCuadros[$j]->nombreCuadro . '\' AND TipoImg=\'menu\'';
					$result = sqlite_query($db, $query);
					$array = $result->fetchArray();

                    $pathImgMenu = $array['PathImg'];

                    $query2 = 'SELECT PathImg, AltoPx, AnchoPx FROM ImgCuadro WHERE NombreCuadro=\'' . $arrayCuadros[$j]->nombreCuadro . '\' AND TipoImg=\'canvas\'';
                    $result2 = sqlite_query($db, $query2);
                    $array2 = $result2->fetchArray();

                    $pathImg = $array2['PathImg'];
                    $pixAlto = $array2['AltoPx'];
                    $pixAncho = $array2['AnchoPx'];

                    $query3 = 'SELECT PathImg FROM ImgCuadro WHERE NombreCuadro=\'' . $arrayCuadros[$j]->nombreCuadro . '\' AND TipoImg=\'escenario\'';
                    $result3 = sqlite_query($db, $query3);
                    $array3 = $result3->fetchArray();
                    $pathImgEscenario = $array3['PathImg'];
                    
                    $stringResult  = $stringResult . '<div class="col-xs-3"><a><img src="' . $pathImgMenu . '" alt="Image" class="img-responsive" onclick="loadPicture(\''. $arrayCuadros[$j]->nombreCuadro . '\', \'' . $pathImg . '\', ' . $pixAlto . ', ' . $pixAncho . ', \'' . $pathImgEscenario . '\', ' .  $arrayCuadros[$j]->alto . ', ' .  $arrayCuadros[$j]->ancho . ')"></a> </div>';
            	}
            	$stringResult  = $stringResult . ' </div> </div>';
            }

    $stringResult  = $stringResult . '</div>
            <a class="left carousel-control" href="#myCarouselCuadro" data-slide="prev">‹</a>
			<a class="right carousel-control" href="#myCarouselCuadro" data-slide="next">›</a>
        </div>
    </div>';

    sqlite_close($db);

    echo $stringResult;

?>