<?php
    require_once './dbhandler.php';

    session_start();

    //typeObject, nombreBD
    $typeObject = $_GET['typeObject'];
    $nombreBD = $_GET['nombreBD'];
    $regUpdate = $_GET['regUpdate'];
    $regValue = $_GET['regValue'];

    $tabla = null;
    $AtribNombre = null;
    $query = null;

    $db = sqlite_open('../database/tfgDB.db');

    if($typeObject == "room"){
        $AtribNombre = "NombreSala";
        if($regUpdate == "AnchoSala" || $regUpdate == "LargoSala")
            $tabla = "Salas";
        else
            $tabla = "ImgSala";

        $query = ' UPDATE ' . $tabla . ' SET ' . $regUpdate . '= \'' . $regValue . '\' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND ' . $AtribNombre . ' = \'' . $nombreBD . '\'';

        $result = sqlite_query($db, $query);
    }
    else if($regUpdate != "AnchoPedestal" && $regUpdate != "AltoPedestal" && $regUpdate != "AnchoPx" && $regUpdate != "AltoPx"){
        if($typeObject == "sculpture"){
            $tabla = "Esculturas";
            $AtribNombre = "NombreEscultura";
        }
        else{
            $tabla = "Cuadros";
            $AtribNombre = "NombreCuadro";
        }

        $query = ' UPDATE ' . $tabla . ' SET ' . $regUpdate . '= \'' . $regValue . '\' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND ' . $AtribNombre . ' = \'' . $nombreBD . '\'';

        $result = sqlite_query($db, $query);
    }
    else if($regUpdate == "AnchoPedestal" || $regUpdate == "AltoPedestal"){
        $query1 = ' UPDATE ModeloEscultura SET ' . $regUpdate . '= '  . $regValue . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND NombreEscultura = \'' . $nombreBD . '\' AND TipoModelo = \'X3D\'';

        $result = sqlite_query($db, $query1);

        $query2 = ' UPDATE  ModeloEscultura SET ' . $regUpdate . '= '  . $regValue . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND NombreEscultura = \'' . $nombreBD . '\' AND TipoModelo = \'OBJ\'';

        $result2 = sqlite_query($db, $query2);
    }
    else if($regUpdate == "AnchoPx" || $regUpdate == "AltoPx"){
        if($typeObject == "sculpture"){
            $query1 = ' UPDATE ImgEscultura SET ' . $regUpdate . '= '  . $regValue . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND NombreEscultura = \'' . $nombreBD . '\' AND TipoImg = \'canvas\'';

            $result = sqlite_query($db, $query1);

            $query2 = ' UPDATE  ImgEscultura SET ' . $regUpdate . '= '  . $regValue . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND NombreEscultura = \'' . $nombreBD . '\' AND TipoImg = \'canvas\'';

            $result2 = sqlite_query($db, $query2);
        }
        else{
            $query1 = ' UPDATE ImgCuadro SET ' . $regUpdate . '= '  . $regValue . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND NombreCuadro = \'' . $nombreBD . '\' AND TipoImg = \'canvas\'';

            $result = sqlite_query($db, $query1);

            $query2 = ' UPDATE  ImgCuadro SET ' . $regUpdate . '= '  . $regValue . ' WHERE NombreUsuario = \'' . $_SESSION["username"] . '\' AND NombreCuadro = \'' . $nombreBD . '\' AND TipoImg = \'canvas\'';

            $result2 = sqlite_query($db, $query2);
        }
    }

    /* Recoger datos */
    

    sqlite_close($db);
?>