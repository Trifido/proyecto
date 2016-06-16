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

	if($nombreSala != $array["NombreSala"]){
		$_SESSION["salaNueva"] = $nombreSala;

		$target_dir = "../uploads/X3D/";
	
		$query = 'INSERT INTO Salas (NombreSala, AnchoSala, LargoSala, NombreUsuario) 
				  VALUES (\''.$nombreSala.'\', \''.$anchoSala.'\', \''.$largoSala.'\', \'' .$nombreUsuario.'\')';
	    $result = sqlite_query($db, $query);

	    //Insertamos Imagenes
	    $query = 'INSERT INTO ImgSala (TipoImgSala, AnchoPix, AltoPix, NombreSala) 
				  VALUES (\'canvas\', \''.$anchoPixSala.'\', \''.$altoPixSala.'\', \''.$nombreSala.'\')';
	    $result = sqlite_query($db, $query);

	    $query = 'INSERT INTO ImgSala (TipoImgSala, AnchoPix, AltoPix, NombreSala) 
				  VALUES (\'menu\', \''.$anchoPixMenSala.'\', \''.$altoPixMenSala.'\', \''.$nombreSala.'\')';
	    $result = sqlite_query($db, $query);
	}

	header('Location: ../php/opciones.php?seccion=nuevoEscenario');
	sqlite_close($db);

?>