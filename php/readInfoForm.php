<?php
    require_once './config.php';
    require_once './dbhandler.php';

    session_start();

    //typeObject, nombreBD
    $typeObject = $_GET['typeObject'];
    $nombreBD = $_GET['nombreBD'];

    $tabla = null;
    $AtribNombre = null;

    if($typeObject == "sculpture"){
        $tabla = "Esculturas";
        $AtribNombre = "NombreEscultura";
    }
    else{
        $tabla = "Cuadros";
        $AtribNombre = "NombreCuadro";
    }

    $query = ' SELECT Cronologia, Tecnica, Informacion FROM ' . $tabla . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND ' . $AtribNombre . ' = \'' . $nombreBD . '\'';

    // Query consulta Escultura o Cuadro

    $db = sqlite_open('../database/tfgDB.db');

    /* Recoger datos */
    $result = sqlite_query($db, $query);

    $array = $result->fetchArray();

    $cronologia = $array['Cronologia'];
    $tecnica = $array['Tecnica'];
    $info = $array['Informacion'];

    //echo $cronologia . " " . $tecnica . " " . $info;

    sqlite_close($db);

    /* JSON para devolver */

    $response = array('cronologia'=>$cronologia, 'tecnica'=>$tecnica, 'info'=>$info);

    echo json_encode($response);
?>