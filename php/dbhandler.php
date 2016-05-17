<?php
    /* https://secure.php.net/manual/es/book.sqlite3.php --> */
    /**
     * Abrir una base de datos SQLite
     */
    function sqlite_open($location){
        $handle = new SQLite3($location);
        return $handle;
    }

    /**
     * Cerrar la conexión a la base de datos
     */
    function sqlite_close($dbhandle){
        $dbhandle->close();
    }

    /**
     * Ejecutar una consulta SQL
     */
    function sqlite_query($dbhandle, $query){
        $result = $dbhandle->query($query);
        return $result;
    }
?>