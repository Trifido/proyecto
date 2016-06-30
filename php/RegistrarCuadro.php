<?php
    require_once 'dbhandler.php';

	session_start();

	$nombreUsuario = $_SESSION["username"];

	$nombreCuadro = $_POST['nomCuadro'];
	$cronologia = $_POST['cronologia'];
	$tecnica = $_POST['tecnica'];
	$altoCuadro = $_POST['altoCuadro'];
	$largoCuadro = $_POST['largoCuadro'];
	$informacion = $_POST['informacion'];

	//Datos Imagen Sala
	$anchoPixCuadro = $_POST['anchoPixCuadro'];
	$altoPixCuadro = $_POST['altoPixCuadro'];

	//Datos Imagen Sala Menu
	$anchoPixMenCuadro = $_POST['anchoPixMenCuadro'];
	$altoPixMenCuadro = $_POST['altoPixMenCuadro'];

	$db = sqlite_open('../database/tfgDB.db');

	$query = 'SELECT*FROM Cuadros WHERE NombreCuadro=\'' . $nombreCuadro . '\' AND NombreUsuario=\'' . $nombreUsuario . '\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($nombreCuadro != $array["NombreCuadro"]){
		$_SESSION["cuadroNuevo"] = $nombreCuadro;
	
		$query = 'INSERT INTO Cuadros (NombreCuadro, NombreUsuario, Cronologia, Tecnica, Informacion, Alto, Largo) 
				  VALUES (\''.$nombreCuadro.'\', \''.$nombreUsuario.'\', \''.$cronologia.'\', \'' .$tecnica.'\', \'' .$informacion.'\', \'' . $altoCuadro . '\', \'' . $largoCuadro . '\')';
	    $result = sqlite_query($db, $query);

	    //Insertamos Imagenes
	    $query = 'INSERT INTO ImgCuadro (NombreCuadro, TipoImg, AnchoPx, AltoPx, NombreUsuario) 
				  VALUES (\'' . $nombreCuadro . '\', \'canvas\', \''.$anchoPixCuadro.'\', \''.$altoPixCuadro.'\', \''.$nombreUsuario.'\')';
	    $result = sqlite_query($db, $query);

	    $query = 'INSERT INTO ImgCuadro (NombreCuadro, TipoImg, AnchoPx, AltoPx, NombreUsuario) 
				  VALUES (\'' . $nombreCuadro . '\', \'menu\', \''.$anchoPixMenCuadro.'\', \''.$altoPixMenCuadro.'\', \''.$nombreUsuario.'\')';
	    $result = sqlite_query($db, $query);

	    $query = 'INSERT INTO ImgCuadro (NombreCuadro, TipoImg, AnchoPx, AltoPx, NombreUsuario) 
				  VALUES (\'' . $nombreCuadro . '\', \'escenario\', \''.$anchoPixCuadro.'\', \''.$altoPixCuadro.'\', \''.$nombreUsuario.'\')';
	    $result = sqlite_query($db, $query);
	}

	header('Location: ../php/opciones.php?seccion=nuevoCuadro');
	sqlite_close($db);

?>