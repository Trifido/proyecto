<?php
    require_once 'dbhandler.php';

	$nombreUsuario = $_REQUEST["usuario"];
	$nombEscena = $_REQUEST["nombEscena"];
	$contenido = $_REQUEST["contenido"];
	$destino = $_REQUEST["destino"];
	$path = "./Exposiciones/" . $destino . "/". $nombEscena;
	$file = fopen( "." . $path, "w" );
	fwrite($file, $contenido);
	fclose($file);

	$db = sqlite_open('../database/tfgDB.db');
	$query = 'SELECT*FROM EscenarioCreados WHERE NombreEscenario=\'' . $nombEscena . '\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($nombEscena != $array["NombreEscenario"]){
		$query = 'INSERT INTO EscenarioCreados (NombreEscenario, Tipo, PathEscenario, NombreUsuario) 
				  VALUES (\''.$nombEscena.'\', \''.$destino.'\', \''. $path .'\', \'' . $nombreUsuario .'\')';
	    $result = sqlite_query($db, $query);
	}

	sqlite_close($db);

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