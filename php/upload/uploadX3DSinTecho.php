
<?php
    require_once '../dbhandler.php';

	session_start();
	$nombreSala = $_SESSION['salaNueva'];

	$db = sqlite_open('../../database/tfgDB.db');

	$query = 'SELECT*FROM ModelSala WHERE NombreSala=\'' . $nombreSala  .'\' AND TipoSala=\'x3dSinTecho\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($nombreSala != $array["NombreSala"]){
		$target_dir = "../../uploads/X3D/" . $_SESSION['username'] . "/";
		$path_dir = "./uploads/X3D/" . $_SESSION['username'] . "/";
	    $target_file = $target_dir . basename($_FILES["modelSinTecho"]["name"]);
	    $path_file = $path_dir . basename($_FILES["modelSinTecho"]["name"]);

	    $query = 'INSERT INTO ModelSala (TipoSala, NombreSala, PathSala, NombreUsuario) 
				  VALUES (\'x3dSinTecho\', \''.$nombreSala.'\', \''.$path_file.'\', \''.$_SESSION['username'].'\')';
	    $result = sqlite_query($db, $query);

	    if (move_uploaded_file($_FILES["modelSinTecho"]["tmp_name"], $target_file)) {
	        echo "The file ". basename($_FILES["modelSinTecho"]["name"]). " has been uploaded.\n";
	    } else {
	        echo "Sorry, there was an error uploading your file.\n";
	    }
	}
	else{
		echo "Ya ha sido incluido.";
	}

	sqlite_close($db);
?>