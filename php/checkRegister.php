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

	$db = sqlite_open('../database/tfgDB.db');

	$query = 'SELECT*FROM Usuarios WHERE username=\'' . $username . '\'';
	$result = sqlite_query($db, $query);
	$array = $result->fetchArray();

	if($username != $array["username"]){
		if($password != ""){
			$query = 'INSERT INTO Usuarios (username, password, mail, nombre, apellido, telefono, direccion) 
		          VALUES (\''.$username.'\', \''.$password.'\', \''.$mail.'\', \'' .$nombre.'\', \''.$apellido.'\',' .$telefono. ',\'' . $direccion .'\')';
		    $result = sqlite_query($db, $query);
		    echo "<script>location.href='./index.php'</script>";
		}
		else{
			$_SESSION['message'] = 'El campo contraseña está vacío.';
			echo "<script>location.href='../php/registrar.php'</script>";
		}
	}
	else{
		$_SESSION['message'] = 'El usuario ya existe.';
		echo '<script> alert("usuario existente") </script>';
		echo "<script>location.href='../php/registrar.php'</script>";
	}

	sqlite_close($db);

?>