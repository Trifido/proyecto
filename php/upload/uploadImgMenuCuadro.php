
<?php
    require_once '../dbhandler.php';

	session_start();
	$nombreCuadro = $_SESSION['cuadroNuevo'];

	$db = sqlite_open('../../database/tfgDB.db');

	$query = 'SELECT*FROM ImgCuadro WHERE NombreCuadro=\'' . $nombreCuadro  .'\' AND TipoImg=\'menu\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();
 
	if( $array["PathImg"] == NULL ){

	    $path_dir = "./uploads/IMG/" . $_SESSION['username'] . "/";
		$target_dir = "../../uploads/IMG/" . $_SESSION['username'] . "/";
	    $target_file = $target_dir . basename($_FILES["imgMenu"]["name"]);
	    $path_file = $path_dir . basename($_FILES["imgMenu"]["name"]);

	    $query = 'UPDATE ImgCuadro SET PathImg = \''.$path_file.'\' WHERE TipoImg=\'menu\' AND NombreCuadro=\'' . $nombreCuadro. '\'';
	    $result = sqlite_query($db, $query);

	    if (move_uploaded_file($_FILES["imgMenu"]["tmp_name"], $target_file)) {
	        echo "The file ". basename( $_FILES["imgMenu"]["name"]). " has been uploaded.";
	    } else {
	        echo "Sorry, there was an error uploading your file.";
	    }
	}
	else{
		echo "Ya ha sido incluido.";
	}

	sqlite_close($db);
?>