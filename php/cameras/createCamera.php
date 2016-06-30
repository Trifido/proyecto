<?php
    require_once '../dbhandler.php';    

    $idCamera = $_GET['idCamera'];
    $cX = 0.0;
    $cY = 0.0;
    $cZ = 0.0;
    $duration = 10;

    // Query insercion de fila en la tabla camara
    $query = 'INSERT INTO Camera (idCamera, cX, cY, cZ, duration) 
              VALUES ('.$idCamera.', '.$cX.', '.$cY.', '.$cZ.', '.$duration.')';

    $db = sqlite_open('../../database/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);
?>