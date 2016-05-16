<?php
	include 'Escenario.php';

	session_start();

	$_SESSION["scene"] = $_REQUEST["scene"];


	$escena = new Escenario($_SESSION["scene"]);

	$puntoCuadro= new Punto();

	$puntoCuadro->setX(10);
	$puntoCuadro->setY(10);
	$puntoCuadro->setZ(10);

	$puntoMin = $escena->findMinPoint($puntoCuadro);

	echo "puntoMin = (" . $puntoMin->getX() . ", " . $puntoMin->getY() . ", " . $puntoMin->getZ() . ") </br>";

	$finalPoint = getPicturePoint($puntoCuadro, $puntoMin);

	echo "puntoCuadro = (" . $finalPoint->getX() . ", " . $finalPoint->getY() . ", " . $finalPoint->getZ() . ") </br>";

	//echo $scene;
?>