<?php
	include 'Escenario.php';

	/*$escena = new Escenario("../models/X3D/scene6.x3d");

	//$escena->getCoords();

	$puntoCuadro= new Punto();

	$puntoCuadro->setX(10);
	$puntoCuadro->setY(10);
	$puntoCuadro->setZ(10);

	$puntoMin = $escena->findMinPoint($puntoCuadro);

	echo "puntoMin = (" . $puntoMin->getX() . ", " . $puntoMin->getY() . ", " . $puntoMin->getZ() . ") </br>";

	echo "puntoCuadro antes = (" . $puntoCuadro->getX() . ", " . $puntoCuadro->getY() . ", " . $puntoCuadro->getZ() . ") </br>";

	$finalPoint = getPicturePoint($puntoCuadro, $puntoMin);

	echo "puntoCuadro despues = (" . $finalPoint->getX() . ", " . $finalPoint->getY() . ", " . $finalPoint->getZ() . ") </br>";
*/

	$scene = $_REQUEST["scene"];

	if( $scene == ""){
		echo '<script language="javascript">alert("vacio");</script>'; 
	}
	else{
		echo '<script language="javascript">alert("' . $scene . '");</script>'; 
	}

	$escena = new Escenario($scene);

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