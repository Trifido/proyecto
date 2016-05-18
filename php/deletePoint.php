<?php
    require_once 'config.php';
    require_once 'dbhandler.php';

    $idPoint = $_GET['idPoint'];
    $idCamera = $_GET['idCamera'];

    // Query insercion de fila en la tabla camara
    $query = 'DELETE FROM Point
              WHERE idPoint = '.$idPoint.' AND idCamera = '.$idCamera;

    $db = sqlite_open(URL_DB.'/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);
?>