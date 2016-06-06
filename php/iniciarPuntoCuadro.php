<?php

	include 'Escenario.php';

	session_start();

	$escena = $_SESSION["scene"];
	$_SESSION["posX"] = $_REQUEST["posX"];
	$_SESSION["posZ"] = $_REQUEST["posZ"];
	$_SESSION["rotCuadro"] = $_REQUEST["rotCuadro"];

	$puntoCuadro= new Punto();

	$puntoCuadro->setX($_SESSION["posX"]);
	$puntoCuadro->setY(0.3);
	$puntoCuadro->setZ($_SESSION["posZ"]);

	$finalPoint = $escena->calculateIntMinPoint($puntoCuadro, $_SESSION["rotCuadro"]);

	$finalPoint->interpolCoord();

	echo $finalPoint->getCoordinates();
	$_SESSION["puntoMinCuadro"] = $finalPoint->getCoordinates();
	
?>
