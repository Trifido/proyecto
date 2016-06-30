<?php
    require_once 'dbhandler.php';

    //Recogemos los datos
    session_start();
	$nombreUsuario = $_SESSION["username"];
	$contenido = $_SESSION["nuevoJSON"];
	$save = $_SESSION["nuevoSaveJSON"];
	$nomEscenario = $_REQUEST["nomEscenario"];
	$nombreMuseo = $_REQUEST["nombreMuseo"];
	$localizacion = $_REQUEST["localizacion"];


	//Creamos el archivo
	$path = "./Exposiciones/" . $nombreUsuario . "/";
	//$path_server = "http://localhost/tfg/Exposiciones/" . $nombreUsuario . "/";
	$fp = fopen( "." . $path . $nomEscenario . '.json', 'w');
	fwrite($fp, $contenido);
	fclose($fp);

	//Creamos el archivo
	$pathsave = "./Exposiciones/" . $nombreUsuario . "/" . $nomEscenario . '_save.json';
	//$path_server = "http://localhost/tfg/Exposiciones/" . $nombreUsuario . "/";
	$fpsave = fopen( "." . $pathsave , 'w');
	fwrite($fpsave, $save);
	fclose($fpsave);


	//Añadimos el json a la BD
	$db = sqlite_open('../database/tfgDB.db');
	$query = 'SELECT*FROM EscenariosCreados WHERE NombreEscenario=\'' . $nomEscenario . '\' AND NombreUsuario=\'' . $nombreUsuario . '\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($nomEscenario != $array["NombreEscenario"]){
		$_SESSION["escenarioNuevo"] = $nomEscenario;
		$query = 'INSERT INTO EscenariosCreados (NombreEscenario, PathEscenario, NombreUsuario, Localizacion, NombreMuseo, PathSave) 
				  VALUES (\''.$nomEscenario.'\', \''. $path . $nomEscenario . '.json\', \'' . $nombreUsuario . '\', \'' . $localizacion . '\', \'' . $nombreMuseo .'\', \''. $pathsave . '\')';
	    $result = sqlite_query($db, $query);
	}
	else{
		echo "Escenario existente.";
	}

	sqlite_close($db);
?>