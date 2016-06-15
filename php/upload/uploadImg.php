
<?php
	require_once '../config.php';
    require_once '../dbhandler.php';

	session_start();
	$nombreSala = $_SESSION['salaNueva'];

	$db = sqlite_open('../../database/tfgDB.db');

	$query = 'SELECT*FROM ImgSala WHERE NombreSala=\'' . $nombreSala  .'\' AND TipoImgSala=\'canvas\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if( $array["PathImgSala"] == NULL ){

	    $path_dir = "./uploads/IMG/";
		$target_dir = "../../uploads/IMG/";
	    $target_file = $target_dir . basename($_FILES["imgCanvas"]["name"]);
	    $path_file = $path_dir . basename($_FILES["imgCanvas"]["name"]);

	    $query = 'UPDATE ImgSala SET PathImgSala = \''.$path_file.'\' WHERE TipoImgSala=\'canvas\' AND NombreSala=\'' . $nombreSala. '\'';
	    $result = sqlite_query($db, $query);

	    if (move_uploaded_file($_FILES["imgCanvas"]["tmp_name"], $target_file)) {
	        echo "The file ". basename( $_FILES["imgCanvas"]["name"]). " has been uploaded.";
	    } else {
	        echo "Sorry, there was an error uploading your file.";
	    }
	}
	else{
		echo "Ya ha sido incluido.";
	}

	sqlite_close($db);
?>