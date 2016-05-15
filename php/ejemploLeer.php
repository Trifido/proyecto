<?php
	include 'Puntos.php';

	$xml=simplexml_load_file("../models/X3D/scene6.x3d") or die("Error: Cannot create object");
	//echo $xml->x3d->head . "<br>";
	//print_r($xml->Scene->Transform[0]->Transform->Group->Shape->IndexedFaceSet->attributes()->coordIndex);
	//print_r($xml);
	//$indicesString = $xml->Scene->Transform[0]->Transform->Group->Shape->IndexedFaceSet->attributes()->coordIndex;
	//$coordString = $xml->Scene->Transform[0]->Transform->Group->Shape->IndexedFaceSet->Coordinate->attributes()->point;

	$puntos = array();
	$indi;
	//Punto cordPunto = Punto();
	$aux = 0;
	foreach ($xml->Scene->Transform as $node) {
		$indicesString = $node->Transform->Group->Shape->IndexedFaceSet->attributes()->coordIndex;
   		$coordString = $node->Transform->Group->Shape->IndexedFaceSet->Coordinate->attributes()->point;

   		$indi = explode(" ", $indicesString);
   		$coordenadas = explode(" ", $coordString);

   		foreach (array_keys($indi, '-1') as $key) {
		    unset($indi[$key]);
		}

		$indices = array_values($indi);

	}

	echo 'indices: ' . count($indices) . '<br>';
	for($i=0; $i+3<count($indices); $i+=3){
		echo '(' . $indices[$i] . ', ' . $indices[$i+1] . ', ' . $indices[$i+2] . ') <br>';
	}

	echo 'coordenadas: ' . count($coordenadas) . '<br>';
	for($i=0; $i+3<count($coordenadas); $i+=3){
		echo '(' . $coordenadas[$i] . ', ' . $coordenadas[$i+1] . ', ' . $coordenadas[$i+2] . ') <br>';
	}
	   	

?>