<?php
	session_start();

	$_SESSION["pathSceneSave"] = $_REQUEST["pathJson"];

	$data = file_get_contents('.' . $_SESSION["pathSceneSave"] ); // '.' . $path
	//$products = json_decode($data, true);

	echo $data;

	unset($_SESSION["pathSceneSave"]);

?>