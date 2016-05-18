<?php
	require_once 'config.php';
    require_once 'dbhandler.php';

	session_start();

	$username = $_POST['username'];
	$password = $_POST['password'];
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellidos'];
	$mail = $_POST['correo'];
	$telefono = $_POST['telefono'];
	$direccion = $_POST['direccion'];

	$query = 'INSERT INTO Usuarios (username, password, mail, nombre, apellido, telefono, direccion) 
          VALUES ('.$username.', '.$password.', '.$mail.', ' .$nombre.', '.$apellido.', '.$telefono. ', ' . $direccion .')';
	$db = sqlite_open('../database/tfgDB.db');

    sqlite_query($db, $query);

	sqlite_close($db);

?>