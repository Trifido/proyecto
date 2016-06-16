<?php
    require_once '../config.php';
    require_once '../dbhandler.php';

    $idCamera = $_GET['idCamera'];

    // Query consulta camara y punto
    $queryC = ' SELECT * FROM Camera WHERE idCamera = '.$idCamera;
    $queryP = ' SELECT * FROM Point WHERE idCamera = '.$idCamera.' ORDER BY idPoint ASC';

    $db = sqlite_open(URL_DB.'/360DB.db');

    /* Recoger datos camara */
    $resultC = sqlite_query($db, $queryC);

    if ($arrayC = $resultC->fetchArray()) {
        $cameraCord = [ 'x' => $arrayC['cX'], 'y' => $arrayC['cY'], 'z' => $arrayC['cZ'] ];
        $duration = $arrayC['duration'];
        //$zFar = $arrayC['zFar'];
        //$zClose = $arrayC['zClose'];
    }

    /* Recoger datos puntos */
    $resultP = sqlite_query($db, $queryP);

    while ($arrayP = $resultP->fetchArray()) {
        $pointCord[] = [ 'x' => $arrayP['cX'], 'y' => $arrayP['cY'], 'z' => $arrayP['cZ'] ];
        $pointTime[] = $arrayP['timePos'];
    }

    sqlite_close($db);

    /* JSON para devolver */

    // Key
    $key = ' 0 ';
    foreach ($pointTime as $time){
        $val = $time / $duration;
        $key .= $val.' ';
    }

    // KeyValue
    $keyValue = ' '.$cameraCord['x'].' '.$cameraCord['y'].' '.$cameraCord['z'].' ';
    foreach ($pointCord as $cord){
        $keyValue .= $cord['x'].' '.$cord['y'].' '.$cord['z'].' ';
    }

    $response = array('cycle'=>$duration, 'cX'=>$cameraCord['x'], 'cY'=>$cameraCord['z'], 'cZ'=>$cameraCord['y'], 'keys'=>$key, 'keyValues'=>$keyValue);

    echo json_encode($response);
?>