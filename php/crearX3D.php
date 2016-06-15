<?php  
	$nombEscena = $_REQUEST["nombEscena"];
	$contenido = $_REQUEST["contenido"];
	$destino = $_REQUEST["destino"];
	$file = fopen("../Exposiciones/" . $destino . "/". $nombEscena, "w");
	fwrite($file, $contenido);
	fclose($file);

		/*
		
		if( $destino == "Web" ){
		$mivarPHP= '<script type="text/javascript">;
    				var mivarJS = generarVRX3D();
    				document.writeln (mivarJS);
    				</script>'; 
		//echo "<script language='javascript'> var variableJS = generarVRX3D(); </script>";
    }
	else{
		$mivarPHP= '<script type="text/javascript">;
    				var mivarJS = generarGameCameraX3D();
    				document.writeln (mivarJS);
    				</script>';
		//echo "<script language='javascript'> var variableJS = generarGameCameraX3D(); </script>";
	}


	$file = fopen("../Exposiciones/" . $destino . "/". $nombEscena, "w");
	fwrite($file, $mivarPHP);
		
	*/
?>