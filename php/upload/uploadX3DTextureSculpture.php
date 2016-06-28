
<?php
	require_once '../config.php';
    require_once '../dbhandler.php';

	session_start();
	$nombreEscultura = $_SESSION['esculturaNueva'];

	$db = sqlite_open('../../database/tfgDB.db');

	$target_dir = "../../uploads/X3D/" . $_SESSION['username'] . "/Texture/";
	$path_dir = "./uploads/X3D/" . $_SESSION['username'] . "/Texture/";
    $target_file = $target_dir . basename($_FILES["imgTexture"]["name"]);
    $path_file = $path_dir . basename($_FILES["imgTexture"]["name"]);

	$query = 'SELECT*FROM TexturasEsculturas WHERE NombreEscultura=\'' . $nombreEscultura . '\' AND pathTextura=\'' . $path_file . '\' AND TipoTextura=\'X3D\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($nombreEscultura != $array["NombreEscultura"]){
	    $query = 'INSERT INTO TexturasEsculturas (NombreEscultura, pathTextura, TipoTextura) VALUES (\'' . $nombreEscultura,  . '\' , \'' . $path_file . '\' , \'X3D\')';
	    $result = sqlite_query($db, $query);

	    if (move_uploaded_file($_FILES["imgTexture"]["tmp_name"], $target_file)) {
	        echo "The file ". basename($_FILES["imgTexture"]["name"]). " has been uploaded.\n";
	    } else {
	        echo "Sorry, there was an error uploading your file.\n";
	    }
	}
	else{
		echo "Ya ha sido incluido.";
	}

	echo $result;

	sqlite_close($db);
?>