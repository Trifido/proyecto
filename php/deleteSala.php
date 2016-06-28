<?php

	session_start();
	$nombreSala = $_REQUEST["nameSala"];

	require_once 'config.php';
    require_once 'dbhandler.php';

    $db = sqlite_open('../database/tfgDB.db');

//ELIMINAR LAS IMAGENES DEL SERVER
    $query = 'SELECT PathImgSala FROM ImgSala WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreSala=\'' . $nombreSala . '\' AND TipoImgSala=\'menu\'';

	$result = sqlite_query($db, $query);
	$entry = $result->fetchArray();

	unlink("." . $entry["PathImgSala"]);

	$query2 = 'SELECT PathImgSala FROM ImgSala WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreSala=\'' . $nombreSala . '\' AND TipoImgSala=\'canvas\'';

	$result2 = sqlite_query($db, $query2);
	$entry2 = $result2->fetchArray();

	unlink("." . $entry2["PathImgSala"]);

//ELIMINAR LOS MODELOS 3D DEL SERVER
	$query3 = 'SELECT PathSala FROM ModelSala WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreSala=\'' . $nombreSala . '\' AND TipoSala=\'x3dSinTecho\'';

	$result3 = sqlite_query($db, $query3);
	$entry3 = $result3->fetchArray();

	unlink("." . $entry3["PathSala"]);

	$query4 = 'SELECT PathSala FROM ModelSala WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreSala=\'' . $nombreSala . '\' AND TipoSala=\'x3dConTecho\'';

	$result4 = sqlite_query($db, $query4);
	$entry4 = $result4->fetchArray();

	unlink("." . $entry4["PathSala"]);

	$query5 = 'SELECT PathSala FROM ModelSala WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreSala=\'' . $nombreSala . '\' AND TipoSala=\'objModel\'';

	$result5 = sqlite_query($db, $query5);
	$entry5 = $result5->fetchArray();

	unlink("." . $entry5["PathSala"]);

//ELIMINAR LOS REGISTROS
	$query = 'DELETE FROM ModelSala WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreSala=\'' . $nombreSala . '\'';
	$result = sqlite_query($db, $query);
	$query = 'DELETE FROM ImgSala WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreSala=\'' . $nombreSala . '\'';
	$result = sqlite_query($db, $query);
	$query = 'DELETE FROM Salas WHERE NombreUsuario=\'' . $_SESSION["username"] .'\' AND NombreSala=\'' . $nombreSala . '\'';
	$result = sqlite_query($db, $query);

	sqlite_close($db);

	echo $nombreSala . " ha sido borrado.";
?>