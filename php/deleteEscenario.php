<?php

	session_start();
	$nombreEscenario = $_REQUEST["nameEscenario"];

	require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('../database/tfgDB.db');

    $query = 'SELECT PathEscenario, PathImgWeb, PathSave FROM EscenariosCreados WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscenario=\'' . $nombreEscenario . '\'';
	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathEscenario"]);
	unlink("." . $entry["PathImgWeb"]);
	unlink("." . $entry["PathSave"]);

	$query = 'DELETE FROM EscenariosCreados WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreEscenario=\'' . $nombreEscenario . '\'';
	$result = sqlite_query($db, $query);

	sqlite_close($db);

	echo $nombreEscenario . " ha sido borrado.";
?>