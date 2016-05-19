<?php
    require_once '../config.php';
    require_once '../dbhandler.php';

    $idCamera = $_GET['idCamera'];

    // Query consulta camara y punto
    $queryC = ' SELECT * FROM Camera WHERE idCamera = '.$idCamera;
    $queryP = ' SELECT * FROM Point WHERE idCamera = '.$idCamera.' ORDER BY idPoint ASC';

    $db = sqlite_open(URL_DB.'/360DB.db');

    // Recoger datos camara
    $resultC = sqlite_query($db, $queryC);

    if ($arrayC = $resultC->fetchArray()) {
        $cameraCord = array( 'x' => $arrayP['cX'], 'y' => $arrayP['cY'], 'z' => $arrayP['cZ']);
        $duration = $arrayC['duration'];
        $zFar = $arrayC['zFar'];
        $zClose = $arrayC['zClose'];
    }

    //Recoger datos puntos
    $resultP = sqlite_query($db, $queryP);

    $pointCord = array();
    $pointTime = array();
    while ($arrayP = $resultP->fetchArray()) {
        $pointCord[] = array( 'x' => $arrayP['cX'], 'y' => $arrayP['cY'], 'z' => $arrayP['cZ']);
        $pointTime[] = $arrayP['timePos'];
    }

    sqlite_close($db);
?>