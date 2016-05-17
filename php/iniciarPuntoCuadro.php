<?php

	include 'Escenario.php';

	session_start();

	$escena = $_SESSION["scene"];
	$_SESSION["posX"] = $_REQUEST["posX"];
	$_SESSION["posZ"] = $_REQUEST["posZ"];

	$puntoCuadro= new Punto();

	$puntoCuadro->setX($_SESSION["posX"]);
	$puntoCuadro->setY(0.3);
	$puntoCuadro->setZ($_SESSION["posZ"]);

	$puntoMin = $escena->findMinPoint($puntoCuadro);

	$finalPoint = getPicturePoint($puntoCuadro, $puntoMin);

	//echo json_encode(array('posX' => $finalPoint->getX(), 'posZ' => $finalPoint->getZ()));

	$finalPoint->interpolCoord();

	echo $finalPoint->getCoordinates();
	$_SESSION["puntoMinCuadro"] = $finalPoint->getCoordinates();
	//$textMinPoint = $finalPoint->getCoordinates();
?>
