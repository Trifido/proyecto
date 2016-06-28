<?php

	session_start();

	$tipo = $_REQUEST["tipo"];

	if( $tipo == "app" )
		$_SESSION["nuevoJSON"] = $_REQUEST["contenido"];
	else
		$_SESSION["nuevoSaveJSON"] = $_REQUEST["contenido"];

?>