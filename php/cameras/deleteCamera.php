<?php
    require_once '../config.php';
    require_once '../dbhandler.php';

    $idCamera = $_GET['idCamera'];

    // Query insercion de fila en la tabla camara
    $query = 'DELETE FROM Camera
              WHERE idCamera = '.$idCamera;

    $db = sqlite_open(URL_DB.'/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);
?>