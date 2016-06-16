<?php
	require_once 'config.php';
    require_once 'dbhandler.php';

	session_start();

	$nombreUsuario = $_SESSION["username"];

	$nombreEscultura = $_POST['nomEscultura'];
	$cronologia = $_POST['cronologia'];
	$tecnica = $_POST['tecnica'];
	$informacion = $_POST['informacion'];

	//Datos Imagen Sala
	$anchoPixEscultura = $_POST['anchoPixEscultura'];
	$altoPixEscultura = $_POST['altoPixEscultura'];

	//Datos Imagen Sala Menu
	$anchoPixMenEscultura = $_POST['anchoPixMenEscultura'];
	$altoPixMenEscultura = $_POST['altoPixMenEscultura'];

	$db = sqlite_open('../database/tfgDB.db');

	$query = 'SELECT*FROM Esculturas WHERE NombreEscultura=\'' . $nombreEscultura . '\' AND NombreUsuario=\'' . $nombreUsuario . '\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($nombreEscultura != $array["NombreEscultura"]){
		$_SESSION["esculturaNueva"] = $nombreEscultura;
	
		$query = 'INSERT INTO Esculturas (NombreEscultura, NombreUsuario, Cronologia, Tecnica, Informacion) 
				  VALUES (\''.$nombreEscultura.'\', \''.$nombreUsuario.'\', \''.$cronologia.'\', \'' .$tecnica.'\', \'' .$informacion.'\')';
	    $result = sqlite_query($db, $query);

	    //Insertamos Imagenes
	    $query = 'INSERT INTO ImgEscultura (NombreEscultura, TipoImg, AnchoPx, AltoPx) 
				  VALUES (\'' . $nombreEscultura . '\', \'canvas\', \''.$anchoPixEscultura.'\', \''.$altoPixEscultura.'\')';
	    $result = sqlite_query($db, $query);

	    $query = 'INSERT INTO ImgEscultura (NombreEscultura, TipoImg, AnchoPx, AltoPx) 
				  VALUES (\'' . $nombreEscultura . '\', \'menu\', \''.$anchoPixMenEscultura.'\', \''.$altoPixMenEscultura.'\')';
	    $result = sqlite_query($db, $query);
	}

	header('Location: ../php/opciones.php?seccion=nuevaEscultura');
	sqlite_close($db);

?>