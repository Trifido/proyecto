
<?php

	require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('./database/tfgDB.db');

	$query = 'SELECT NombreEscultura FROM Esculturas WHERE NombreUsuario=\'' . $_SESSION["username"] .'\'';
	$result = sqlite_query($db, $query);
	$arrayEsculturas = array();

	while ($entry = $result->fetchArray()) {
        $arrayEsculturas[] = $entry['NombreEscultura'];
	}

	$numEsculturas = $db->querySingle("SELECT COUNT(*) as count FROM Esculturas WHERE NombreUsuario='". $_SESSION["username"] ."'");
	$numBloques = ($numEsculturas / 4) ;

    $stringResult = '';

	$stringResult = $stringResult . '<div class="well">
                                        <div id="myCarouselEscultura" class="carousel slide">
                                            <div class="carousel-inner">';

    for( $i=0; $i<$numBloques; $i++){
		if($i == 0)
			$stringResult  = $stringResult . '<div class="item active"> <div class="row">';
		else
			$stringResult  = $stringResult . '<div class="item"> <div class="row">';

    	for($count=0, $j= $i*4; $count<4 && $j<$numEsculturas; $count++, $j++){ //, $j= $i*4

    		$query = 'SELECT PathImg FROM ImgEscultura WHERE NombreEscultura=\'' . $arrayEsculturas[$j] . '\' AND TipoImg=\'menu\'';
			$result = sqlite_query($db, $query);
			$array = $result->fetchArray();

            $pathImgMenu = $array['PathImg'];

            $query2 = 'SELECT PathImg, AltoPx, AnchoPx FROM ImgEscultura WHERE NombreEscultura=\'' . $arrayEsculturas[$j] . '\' AND TipoImg=\'canvas\'';
            $result2 = sqlite_query($db, $query2);
            $array2 = $result2->fetchArray();

            $pathImg = $array2['PathImg'];
            $pixAlto = $array2['AltoPx'];
            $pixAncho = $array2['AnchoPx'];

            $query3 = 'SELECT PathModelo FROM ModeloEscultura WHERE NombreEscultura=\'' . $arrayEsculturas[$j] . '\' AND NombreUsuario=\'' . $_SESSION["username"] . '\' AND TipoModelo=\'OBJ\'';
            $result3 = sqlite_query($db, $query3);
            $array3 = $result3->fetchArray();
            $pathOBJ = $array3['PathModelo'];

            $query4 = 'SELECT PathModelo FROM ModeloEscultura WHERE NombreEscultura=\'' . $arrayEsculturas[$j] . '\' AND NombreUsuario=\'' . $_SESSION["username"] . '\' AND TipoModelo=\'X3D\'';
            $result4 = sqlite_query($db, $query4);
            $array4 = $result4->fetchArray();
            $pathX3D = $array4['PathModelo'];
            
            $stringResult  = $stringResult . '<div class="col-xs-3"><a><img src="' . $pathImgMenu . '" alt="Image" class="img-responsive" 
            onclick="loadSculpture(\''. $arrayEsculturas[$j] . '\', \'' . $pathImg . '\', ' . $pixAlto . ', ' . $pixAncho . ', \'' . $pathX3D . '\', \'' . $pathOBJ . '\')"></a> </div>';
    	}
    	$stringResult  = $stringResult . ' </div> </div>';
    }

    $stringResult  = $stringResult . '</div>
                                        <a class="left carousel-control" href="#myCarouselEscultura" data-slide="prev">‹</a>
                                        <a class="right carousel-control" href="#myCarouselEscultura" data-slide="next">›</a>
                                      </div>
                                    </div>';

    sqlite_close($db);

    echo $stringResult;

?>