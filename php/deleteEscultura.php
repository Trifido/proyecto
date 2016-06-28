<?php

	session_start();
	$nombreEscultura = $_REQUEST["nameEscultura"];

	require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('../database/tfgDB.db');

//ELIMINAR LAS IMAGENES DEL SERVER
    $query = 'SELECT PathImg FROM ImgEscultura WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscultura=\'' . $nombreEscultura . '\' AND TipoImg=\'menu\'';

	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathImg"]);

	$query = 'SELECT PathImg FROM ImgEscultura WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscultura=\'' . $nombreEscultura . '\' AND TipoImg=\'canvas\'';

	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathImg"]);

//ELIMINAR LOS MODELOS 3D DEL SERVER
	$query = 'SELECT PathModelo FROM ModeloEscultura WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscultura=\'' . $nombreEscultura . '\' AND TipoModelo=\'X3D\'';

	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathModelo"]);

	$query = 'SELECT PathModelo FROM ModeloEscultura WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscultura=\'' . $nombreEscultura . '\' AND TipoModelo=\'OBJ\'';

	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathModelo"]);

//ELIMINAR LOS REGISTROS
	$query = 'DELETE FROM ModeloEscultura WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscultura=\'' . $nombreEscultura . '\'';
	$result = sqlite_query($db, $query);
	$query = 'DELETE FROM ImgEscultura WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscultura=\'' . $nombreEscultura . '\'';
	$result = sqlite_query($db, $query);
	$query = 'DELETE FROM Esculturas WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscultura=\'' . $nombreEscultura . '\'';
	$result = sqlite_query($db, $query);

	sqlite_close($db);

	echo $nombreEscultura . " ha sido borrado.";
?>