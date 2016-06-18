
<?php

    class StructSalas{
        public $nombreSala;
        public $ancho;
        public $largo;
    };

	require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('./database/tfgDB.db');

	$query = 'SELECT*FROM Salas WHERE NombreUsuario=\'' . $_SESSION["username"] .'\'';
	$result = sqlite_query($db, $query);
	$arraySalas = array();

	while ($entry = $result->fetchArray()) {
        $struct = new StructSalas();
    	$struct->nombreSala = $entry['NombreSala'];
        $struct->ancho = $entry['AnchoSala'];
        $struct->largo = $entry['LargoSala'];
        $arraySalas[] = $struct;
	}

	$numSalas = $db->querySingle("SELECT COUNT(*) as count FROM Salas WHERE NombreUsuario='". $_SESSION["username"] ."'");
	$numBloques = $numSalas / 4;

    $stringResult = '';

	$stringResult = $stringResult . '<div class="well">
        <div id="myCarousel1" class="carousel slide">
            <div class="carousel-inner">';

            for( $i=0; $i<$numBloques; $i++){

        		if($i == 0)
        			$stringResult  = $stringResult . '<div class="item active"> <div class="row">';
        		else
        			$stringResult  = $stringResult . '<div class="item"> <div class="row">';

            	for($count=0, $j= $i*4; $count<4 && $j<$numSalas; $count++, $j++){ //, $j= $i*4

            		$query = 'SELECT PathImgSala FROM ImgSala WHERE NombreSala=\'' . $arraySalas[$j]->nombreSala . '\' AND TipoImgSala=\'menu\'';
					$result = sqlite_query($db, $query);
					$array = $result->fetchArray();

                    $pathImgMenu = $array['PathImgSala'];

                    $query2 = 'SELECT PathImgSala, AltoPix, AnchoPix FROM ImgSala WHERE NombreSala=\'' . $arraySalas[$j]->nombreSala . '\' AND TipoImgSala=\'canvas\'';
                    $result2 = sqlite_query($db, $query2);
                    $array2 = $result2->fetchArray();

                    $pathImg = $array2['PathImgSala'];
                    $pixAlto = $array2['AltoPix'];
                    $pixAncho = $array2['AnchoPix'];

                    $query3 = 'SELECT PathSala FROM ModelSala WHERE NombreSala=\'' . $arraySalas[$j]->nombreSala . '\' AND TipoSala=\'x3dSinTecho\'';
                    $result3 = sqlite_query($db, $query3);
                    $array3 = $result3->fetchArray();
                    $pathSin = $array3['PathSala'];

                    $query4 = 'SELECT PathSala FROM ModelSala WHERE NombreSala=\'' . $arraySalas[$j]->nombreSala . '\' AND TipoSala=\'x3dConTecho\'';
                    $result4 = sqlite_query($db, $query4);
                    $array4 = $result4->fetchArray();
                    $pathTecho = $array4['PathSala'];

                    $query5 = 'SELECT PathSala FROM ModelSala WHERE NombreSala=\'' . $arraySalas[$j]->nombreSala . '\' AND TipoSala=\'objModel\'';
                    $result5 = sqlite_query($db, $query5);
                    $array5 = $result5->fetchArray();
                    $pathObj = $array5['PathSala'];
                    
                    $stringResult  = $stringResult . '<div class="col-xs-3"><a><img src="' . $pathImgMenu . '" alt="Image" class="img-responsive" onclick="loadRoom(\''. $arraySalas[$j]->nombreSala . '\', \'' . $pathImg . '\', ' . $arraySalas[$j]->ancho . ', ' . $arraySalas[$j]->largo . ', ' . $pixAncho . ', ' . $pixAlto . ', \'' . $pathSin . '\', \'' . $pathTecho . '\', \'' . $pathObj . '\')"></a> </div>';
            	}
            	$stringResult  = $stringResult . ' </div> </div>';
            }

    $stringResult  = $stringResult . '</div>
            <a class="left carousel-control" href="#myCarousel1" data-slide="prev">‹</a>
			<a class="right carousel-control" href="#myCarousel1" data-slide="next">›</a>
        </div>
    </div>';

    sqlite_close($db);

    echo $stringResult;

?>