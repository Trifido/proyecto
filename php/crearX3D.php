<?php  
	$q = $_REQUEST["q"];
	$file = fopen("../x3d/visionar.x3d", "w");
	fwrite($file, $q);
	fclose($file);
?>