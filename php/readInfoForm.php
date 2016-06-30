<?php
    require_once './dbhandler.php';

    session_start();

    //typeObject, nombreBD
    $typeObject = $_GET['typeObject'];
    $nombreBD = $_GET['nombreBD'];

    $db = sqlite_open('../database/tfgDB.db');

    $tabla = null;
    $tabla2 = null;
    $AtribNombre = null;
    $query = null;
    $query2 = null;

    if($typeObject == "sculpture"){
        $tabla = "Esculturas";
        $tabla2 = "ImgEscultura";
        $AtribNombre = "NombreEscultura";
        $query = ' SELECT Cronologia, Tecnica, Informacion FROM ' . $tabla . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND ' . $AtribNombre . ' = \'' . $nombreBD . '\'';
    }
    else if($typeObject == "picture"){
        $tabla = "Cuadros";
        $tabla2 = "ImgCuadro";
        $AtribNombre = "NombreCuadro";
        $query = ' SELECT Cronologia, Tecnica, Informacion, Alto, Largo FROM ' . $tabla . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND ' . $AtribNombre . ' = \'' . $nombreBD . '\'';
    }
    else{
        $tabla = "Salas";
        $tabla2 = "ImgSala";
        $AtribNombre = "NombreSala";
        $query = ' SELECT AnchoSala, LargoSala FROM ' . $tabla . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND ' . $AtribNombre . ' = \'' . $nombreBD . '\'';
        $query2 = ' SELECT AnchoPix, AltoPix FROM ' . $tabla2 . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND ' . $AtribNombre . ' = \'' . $nombreBD . '\' AND TipoImgSala=\'canvas\'';
    }

    if($typeObject != "room"){
        $query2 = ' SELECT AnchoPx, AltoPx FROM ' . $tabla2 . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND ' . $AtribNombre . ' = \'' . $nombreBD . '\' AND TipoImg=\'canvas\'';

        // Query consulta Escultura o Cuadro

        /* Recoger datos */
        $result = sqlite_query($db, $query);

        $array = $result->fetchArray();

        $cronologia = $array['Cronologia'];
        $tecnica = $array['Tecnica'];
        $info = $array['Informacion'];

        //echo $cronologia . " " . $tecnica . " " . $info;

        $result2 = sqlite_query($db, $query2);
        $array2 = $result2->fetchArray();

        $AnchoPx = $array2["AnchoPx"];
        $AltoPx = $array2["AltoPx"];

        /* JSON para devolver */
        if($typeObject == "sculpture")
            $response = array('cronologia'=>$cronologia, 'tecnica'=>$tecnica, 'info'=>$info, 'AnchoPx'=>$AnchoPx, 'AltoPx'=>$AltoPx);
        else{
            $Alto = $array["Alto"];
            $Largo = $array["Largo"];
            $response = array('cronologia'=>$cronologia, 'tecnica'=>$tecnica, 'info'=>$info, 'AnchoPx'=>$AnchoPx, 'AltoPx'=>$AltoPx, 'Alto'=>$Alto, 'Largo'=>$Largo);
        }
    }
    else{
        $result = sqlite_query($db, $query);
        $array = $result->fetchArray();
        $Alto = $array["LargoSala"];
        $Ancho = $array["AnchoSala"];

        $result2 = sqlite_query($db, $query2);
        $array2 = $result2->fetchArray();

        $AnchoPx = $array2["AnchoPix"];
        $AltoPx = $array2["AltoPix"];

        $response = array('AnchoPx'=>$AnchoPx, 'AltoPx'=>$AltoPx, 'Alto'=>$Alto, 'Ancho'=>$Ancho);
    }

    sqlite_close($db);

    echo json_encode($response);
?>