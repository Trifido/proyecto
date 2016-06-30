<?php
    require_once '../dbhandler.php';

    $idPoint = $_GET['idPoint'];
    $idCamera = $_GET['idCamera'];
    $cX = 0.0;
    $cY = 0.0;
    $cZ = 0.0;
    $timePos = 0;

    // Query insercion de fila en la tabla camara
    $query = 'INSERT INTO Point (idPoint, idCamera, cX, cY, cZ, timePos) 
              VALUES ('.$idPoint.', '.$idCamera.', '.$cX.', '.$cY.', '.$cZ.', '.$timePos.')';

    $db = sqlite_open('../../database/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);
?>