<?php
    require_once '../dbhandler.php';

	session_start();
	$nombreEscultura = $_SESSION['esculturaNueva']; 

	$db = sqlite_open('../../database/tfgDB.db');

	$query = 'SELECT*FROM ModeloEscultura WHERE NombreEscultura=\'' . $nombreEscultura  .'\' AND TipoModelo=\'OBJ\' AND NombreUsuario= \'' . $_SESSION["username"] . '\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($nombreEscultura != $array["NombreEscultura"]){
		$target_dir = "../../uploads/OBJ/" . $_SESSION['username'] . "/";
		$path_dir = "./uploads/OBJ/" . $_SESSION['username'] . "/";
	    $target_file = $target_dir . basename($_FILES["modelOBJ"]["name"]);
	    $path_file = $path_dir . basename($_FILES["modelOBJ"]["name"]);

	    $query = 'INSERT INTO ModeloEscultura (NombreEscultura, TipoModelo, PathModelo, NombreUsuario) 
				  VALUES (\''. $nombreEscultura .'\', \'OBJ\', \''.$path_file.'\', \'' . $_SESSION["username"] . '\')';
	    $result = sqlite_query($db, $query);

	    if (move_uploaded_file($_FILES["modelOBJ"]["tmp_name"], $target_file)) {
	        echo "The file ". basename($_FILES["modelOBJ"]["name"]). " has been uploaded.\n";
	    } else {
	        echo "Sorry, there was an error uploading your file.\n";
	    }
	}
	else{
		echo "Ya ha sido incluido.";
	}

	sqlite_close($db);
?>