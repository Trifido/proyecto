
<?php
    require_once '../dbhandler.php';

	session_start();
	$nombreEscenario = $_SESSION["escenarioNuevo"];

	$db = sqlite_open('../../database/tfgDB.db');

	$query = 'SELECT*FROM EscenariosCreados WHERE NombreEscenario=\'' . $nombreEscenario  .'\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if( $array["PathImg"] == NULL ){

	    $path_dir = "./uploads/IMG/" . $_SESSION['username'] . "/";
		$target_dir = "../../uploads/IMG/" . $_SESSION['username'] . "/";
	    $target_file = $target_dir . basename($_FILES["imgEscenario"]["name"]);
	    $path_file = $path_dir . basename($_FILES["imgEscenario"]["name"]);
	    $path_server = "http://localhost/tfg/uploads/IMG/" . $_SESSION["username"] . "/" . basename($_FILES["imgEscenario"]["name"]);

	    $query = 'UPDATE EscenariosCreados SET PathImg = \''.$path_server.'\', PathImgWeb = \'' . $path_file . '\' WHERE NombreEscenario=\'' . $nombreEscenario. '\'';
	    $result = sqlite_query($db, $query);

	    if (move_uploaded_file($_FILES["imgEscenario"]["tmp_name"], $target_file)) {
	        echo "The file ". basename( $_FILES["imgEscenario"]["name"]). " has been uploaded.";
	    } else {
	        echo "Sorry, there was an error uploading your file.";
	    }
	}
	else{
		echo "Ya ha sido incluido.";
	}

	sqlite_close($db);
?>