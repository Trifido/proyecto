<?php
    require_once 'config.php';
    require_once 'dbhandler.php';

    $idCamera = 1; // Camara a modificar
    $cX = $_POST['cX'];
    $cY = $_POST['cY'];
    $cZ = $_POST['cZ'];
    $duration = $_POST['duration'];
    $zFar = $_POST['zFar'];
    $zClose = $_POST['zClose'];

    // Query actualizacion de fila de la camara con id idCamera
    /*$query = 'UPDATE Camera SET
              cX = '.$cX.', cY = '.$cY.', cZ = '.$cZ.', duration = '.$duration.', zFar = '.$zFar.', zClose = '.$zClose.'
              WHERE idCamera = '.$idCamera;

    $db = sqlite_open(URL_DB.'/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);*/
?>