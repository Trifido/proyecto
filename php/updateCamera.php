<?php
    require_once 'config.php';
    require_once 'dbhandler.php';

    $idCamera = $_GET['idCamera']; // Camara a modificar
    $cX = $_GET['cX'];
    $cY = $_GET['cY'];
    $cZ = $_GET['cZ'];
    $duration = $_GET['duration'];
    $zFar = $_GET['zFar'];
    $zClose = $_GET['zClose'];

    // Query actualizacion de fila de la camara con id idCamera
    $query = 'UPDATE Camera SET
              cX = '.$cX.', cY = '.$cY.', cZ = '.$cZ.', duration = '.$duration.', zFar = '.$zFar.', zClose = '.$zClose.
              ' WHERE idCamera = '.$idCamera;

    $db = sqlite_open(URL_DB.'/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);
?>