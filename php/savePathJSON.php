<?php
	session_start();
	$_SESSION["tipoEditor"] = "saveScene";

	$_SESSION["pathSceneSave"] = $_REQUEST["pathJson"];

?>