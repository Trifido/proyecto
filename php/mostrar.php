<?php
	include 'Escenario.php';
	session_start();

	echo $_SESSION["nameScene"] . '</br>';

	echo 'coords = ' . $_SESSION["puntoMinCuadro"] . '</br>';

	echo 'cX = ' . $_SESSION["posX"] . '</br>';
	echo 'cZ = ' . $_SESSION["posZ"] . '</br>';

	$escena = $_SESSION["scene"];

	$escena->getCoords();
/*
	unset($_SESSION["puntoMinCuadro"]); 
	unset($_SESSION["nameScene"]);
	session_destroy();
*/
?>
