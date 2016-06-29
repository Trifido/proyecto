<?php
    require_once '../config.php';
    require_once '../dbhandler.php';

    $idCamera = $_GET['idCamera']; // Camara a modificar
    $newIdCamera = $idCamera - 1;

    // Query actualizacion de fila de la camara con id idCamera
    $query = 'UPDATE Camera SET
              idCamera = '.$newIdCamera.' WHERE idCamera = '.$idCamera;

    $query2 = 'UPDATE Point SET
              idCamera = '.$newIdCamera.' WHERE idCamera = '.$idCamera;

    $db = sqlite_open('../../database/360DB.db');

    sqlite_query($db, $query);
    sqlite_query($db, $query2);

    sqlite_close($db);
?>