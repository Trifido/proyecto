<?php
	require_once 'config.php';
    require_once 'dbhandler.php';

	session_start();

	$nombreUsuario = $_SESSION["username"];

	$nombreSala = $_POST['nomSala'];
	$anchoSala = $_POST['anchoSala'];
	$largoSala = $_POST['largoSala'];


	//Datos Imagen Sala
	$anchoPixSala = $_POST['anchoPixSala'];
	$altoPixSala = $_POST['altoPixSala'];

	//Datos Imagen Sala Menu
	$anchoPixMenSala = $_POST['anchoPixMenSala'];
	$altoPixMenSala = $_POST['altoPixMenSala'];

	$db = sqlite_open('../database/tfgDB.db');

	$query = 'SELECT*FROM Salas WHERE NombreSala=\'' . $nombreSala . '\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($nombreSala != $array["nombreSala"]){
			$target_dir = "../uploads/X3D/";
		
			$query = 'INSERT INTO Salas (NombreSala, AnchoSala, LargoSala, NombreUsuario) 
					  VALUES (\''.$nombreSala.'\', \''.$anchoSala.'\', \''.$largoSala.'\', \'' .$nombreUsuario.'\')';
		    $result = sqlite_query($db, $query);

		    //Insertamos X3D's y OBJ
		    $target_file = $target_dir . basename($_FILES["model"]["name"][0]);
		    $query = 'INSERT INTO ModelSala (TipoSala, NombreSala, PathSala) 
					  VALUES (\'x3dConTecho\', \''.$nombreSala.'\', \''.$target_file.'\')';
		    $result = sqlite_query($db, $query);

		    if (move_uploaded_file($_FILES["model"]["tmp_name"][0], $target_file)) {
		        echo "The file ". basename( $_FILES["model"]["name"][0]). " has been uploaded.\n";
		    } else {
		        echo "Sorry, there was an error uploading your file.\n";
		    }

		    $target_file = $target_dir . basename($_FILES["model"]["name"][1]);
		    $query = 'INSERT INTO ModelSala (TipoSala, NombreSala, PathSala) 
					  VALUES (\'x3dSinTecho\', \''.$nombreSala.'\', \''.$target_file.'\')';
		    $result = sqlite_query($db, $query);

		    if (move_uploaded_file($_FILES["model"]["tmp_name"][1], $target_file)) {
		        echo "The file ". basename( $_FILES["model"]["name"][1]). " has been uploaded.\n";
		    } else {
		        echo "Sorry, there was an error uploading your file.\n";
		    }
	
		    /*
		    $target_dir = "../uploads/OBJ/";
		    $target_file = $target_dir . basename($_FILES["objSala"]["name"]);
		    $query = 'INSERT INTO ModelSala (TipoSala, NombreSala, PathSala) 
					  VALUES (\'objSala\', \''.$nombreSala.'\', \''.$target_file.'\')';
		    $result = sqlite_query($db, $query);

		    if (move_uploaded_file($_FILES["objSala"]["tmp_name"], $target_file)) {
		        echo "The file ". basename( $_FILES["objSala"]["name"]). " has been uploaded.";
		    } else {
		        echo "Sorry, there was an error uploading your file.";
		    }

		    //Insertamos Imagenes
		    $target_dir = "../uploads/IMG/";
		    $target_file = $target_dir . basename($_FILES["imgSala"]["name"]);
		    $query = 'INSERT INTO ImgSala (TipoImgSala, AnchoPix, AltoPix, PathImgSala, NombreSala) 
					  VALUES (\'canvas\', \''.$anchoPixSala.'\', \''.$altoPixSala.'\', \''.$target_file.'\', \''.$nombreSala.'\')';
		    $result = sqlite_query($db, $query);

		    if (move_uploaded_file($_FILES["imgSala"]["tmp_name"], $target_file)) {
		        echo "The file ". basename( $_FILES["imgSala"]["name"]). " has been uploaded.";
		    } else {
		        echo "Sorry, there was an error uploading your file.";
		    }

		    $target_file = $target_dir . basename($_FILES["imgMenSala"]["name"]);
		    $query = 'INSERT INTO ImgSala (TipoImgSala, AnchoPix, AltoPix, PathImgSala, NombreSala) 
					  VALUES (\'menu\', \''.$anchoPixMenSala.'\', \''.$altoPixMenSala.'\', \''.$target_file.'\', \''.$nombreSala.'\')';
		    $result = sqlite_query($db, $query);

		    if (move_uploaded_file($_FILES["imgMenSala"]["tmp_name"], $target_file)) {
		        echo "The file ". basename( $_FILES["imgMenSala"]["name"]). " has been uploaded.";
		    } else {
		        echo "Sorry, there was an error uploading your file.";
		    }
			
		    //echo "<script>location.href='../index.html'</script>";
		}*/
	}
	else{
		//echo '<script> alert("usuario existente") </script>';
		//echo "<script>location.href='../php/mostrarSalas.php'</script>";
	}




	sqlite_close($db);

?>