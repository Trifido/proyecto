<?php
    require_once '../config.php';
    require_once '../dbhandler.php';    

    $idCamera = $_GET['idCamera'];
    $cX = 0.0;
    $cY = 0.0;
    $cZ = 0.0;
    $duration = 0;
    $zFar = 0;
    $zClose = 0;

    // Query insercion de fila en la tabla camara
    $query = 'INSERT INTO Camera (idCamera, cX, cY, cZ, duration, zFar, zClose) 
              VALUES ('.$idCamera.', '.$cX.', '.$cY.', '.$cZ.', '.$duration.', '.$zFar.', '.$zClose.')';

    $db = sqlite_open(URL_DB.'/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);
?>