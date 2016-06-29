<?php
    require_once '../config.php';
    require_once '../dbhandler.php';

    $idCamera = $_GET['idCamera'];

    // Query consulta camara y punto
    $queryC = ' SELECT * FROM Camera WHERE idCamera = '.$idCamera;
    $queryP = ' SELECT * FROM Point WHERE idCamera = '.$idCamera.' ORDER BY idPoint ASC';

    $db = sqlite_open('../../database/360DB.db');

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

    // Angulo entre dos vectores en radianes
    /*function angle($v1, $v2) {
        // Calcular el modulo de un vector
        function module($v1) {
            $u1 = $v1['x'] * $v1['x'];
            $u2 = $v1['y'] * $v1['y'];
            $u3 = $v1['z'] * $v1['z'];

            $accu = $u1 + $u2 + $u3;

            $module = sqrt($accu);

            return $module;
        }
        // Calcular el producto escalat de dos vectores
        function dot_product($v1, $v2) {
            $u1 = $v1['x'] * $v2['x'];
            $u2 = $v1['y'] * $v2['y'];
            $u3 = $v1['z'] * $v2['z'];

            $accu = $u1 + $u2 + $u3;

            return $accu;
        }

        $top = dot_product($v1, $v2);
        $bottom = module($v1)*module($v2);

        $division = $top / $bottom;

        $angle = acos($division);

        return $angle;
    }

    // Vector a partir de dos posiciones
    function vector($pos1, $pos2) {
        $u1 = $pos2['x'] - $pos1['x'];
        $u2 = $pos2['y'] - $pos1['y'];
        $u3 = $pos2['z'] - $pos1['z'];

        return array('x' => $u1, 'y' => $u2, 'z' => $u3);
    }
    */

    // Key
    $key = ' 0 ';
    foreach ($pointTime as $time){
        $val = $time / $duration;
        $key .= $val.' ';
    }

    // Key Value Position
    $keyPosValue = ' '.$cameraCord['x'].' '.$cameraCord['z'].' '.$cameraCord['y'].' ';

    //$pos1 = array('x' => floatval($cameraCord['x']), 'y' => floatval($cameraCord['z']), 'z' => floatval($cameraCord['y']));
    foreach ($pointCord as $cord){
        $keyPosValue .= $cord['x'].' '.$cord['z'].' '.$cord['y'].' ';

        // Obtener la posicion del punto como array
        /*$pos2 = array('x' => floatval($cord['x']), 'y' => floatval($cord['z']), 'z' => floatval($cord['y']));
        // Calcular el vector direccion para llegar a esa posicion
        $v = vector($pos1, $pos2);
        // Almacenar el valor calculado
        $directions[] = $v;

        // Actualizar la nueva posicion
        $pos1 = $pos2;
        */
    }


    //Key Value Orientation
    /*$rotVector = ' 0 1 0 ';

    //Valor inicial
    $keyRotValue = $rotVector.'0';

    $arrlength = count($directions) - 1;
    for($x = 0; $x < $arrlength; $x++) {

        $angulo = angle($directions[$x], $directions[$x+1]);

        $keyRotValue .= $rotVector.$angulo;
    }

    //Valor final (el mismo que el ultimo)
    $keyRotValue .= $rotVector.$angulo;
    */

    $response = array('cycle'=>$duration, 'cX'=>$cameraCord['x'], 'cY'=>$cameraCord['z'], 'cZ'=>$cameraCord['y'], 'keys'=>$key, 'keyPosValue'=>$keyPosValue);

    echo json_encode($response);
?>