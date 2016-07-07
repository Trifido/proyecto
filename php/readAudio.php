<?php
    require_once './dbhandler.php';


    $db = sqlite_open('../database/360DB.db');

    // Query consulta camara y punto
    $query = ' SELECT * FROM Audio ';

    /* Recoger datos camara */
    $result = sqlite_query($db, $query);

    if ($array = $result->fetchArray()) {
       $path = $array['path'];
    }

    sqlite_close($db);

    echo $path;
?>