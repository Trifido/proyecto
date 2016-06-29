<?php
    require_once '../config.php';
    require_once '../dbhandler.php';

    $idPoint = $_GET['idPoint']; //Punto a modificar
    $idCamera = $_GET['idCamera']; // Camara a modificar
    $timePos = $_GET['timePos'];

    // Query actualizacion de fila de la camara con id idCamera
    $query = 'UPDATE Point SET
              timePos = '.$timePos. 
              ' WHERE idPoint = '.$idPoint.' AND idCamera = '.$idCamera;

    $db = sqlite_open('../../database/360DB.db');

    sqlite_query($db, $query);

    sqlite_close($db);
?>