
<?php
	require_once '../config.php';
    require_once '../dbhandler.php';

	session_start();
	$nombreCuadro = $_SESSION['cuadroNuevo'];

	$db = sqlite_open('../../database/tfgDB.db');

	$query = 'SELECT*FROM ImgCuadro WHERE NombreCuadro=\'' . $nombreCuadro  .'\' AND TipoImg=\'canvas\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();
 
	if( $array["PathImg"] == NULL ){

	    $path_dir = "./uploads/IMG/";
		$target_dir = "../../uploads/IMG/";
	    $target_file = $target_dir . basename($_FILES["imgCenital"]["name"]);
	    $path_file = $path_dir . basename($_FILES["imgCenital"]["name"]);

	    $query = 'UPDATE ImgCuadro SET PathImg = \''.$path_file.'\' WHERE TipoImg=\'canvas\' AND NombreCuadro=\'' . $nombreCuadro. '\'';
	    $result = sqlite_query($db, $query);

	    if (move_uploaded_file($_FILES["imgCenital"]["tmp_name"], $target_file)) {
	        echo "The file ". basename( $_FILES["imgCenital"]["name"]). " has been uploaded.";
	    } else {
	        echo "Sorry, there was an error uploading your file.";
	    }
	}
	else{
		echo "Ya ha sido incluido.";
	}

	sqlite_close($db);
?>