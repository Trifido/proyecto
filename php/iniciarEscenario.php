<?php
	include 'Escenario.php';

	session_start();

	$_SESSION["nameScene"] = $_REQUEST["nameScene"];

	$escena = new Escenario($_SESSION["nameScene"]);
	$_SESSION["scene"] = $escena;
?>