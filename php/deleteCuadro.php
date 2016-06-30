<?php

	session_start();
	$NombreCuadro = $_REQUEST["nameCuadro"];

    require_once 'dbhandler.php';

    $db = sqlite_open('../database/tfgDB.db');

//ELIMINAR LAS IMAGENES DEL SERVER
    $query = 'SELECT PathImg FROM ImgCuadro WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreCuadro=\'' . $NombreCuadro . '\' AND TipoImg=\'menu\'';

	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathImg"]);

	$query = 'SELECT PathImg FROM ImgCuadro WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreCuadro=\'' . $NombreCuadro . '\' AND TipoImg=\'canvas\'';

	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathImg"]);

	$query = 'SELECT PathImg FROM ImgCuadro WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreCuadro=\'' . $NombreCuadro . '\' AND TipoImg=\'escenario\'';

	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathImg"]);

//ELIMINAR LOS REGISTROS
	$query = 'DELETE FROM ImgCuadro WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreCuadro=\'' . $NombreCuadro . '\'';
	$result = sqlite_query($db, $query);
	$query = 'DELETE FROM Cuadros WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreCuadro=\'' . $NombreCuadro . '\'';
	$result = sqlite_query($db, $query);

	sqlite_close($db);

	echo $NombreCuadro . " ha sido borrado.";
?>