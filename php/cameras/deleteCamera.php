<?php
    require_once '../dbhandler.php';

    $idCamera = $_GET['idCamera'];

    // Query insercion de fila en la tabla camara
    $query = 'DELETE FROM Camera
              WHERE idCamera = '.$idCamera;

    $db = sqlite_open('../../database/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);
?>