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

		    $_SESSION['loggedin'] = true;
			$_SESSION['username'] = $username;
			$_SESSION['start'] = time();
			$_SESSION['expire'] = $_SESSION['start'] + (5 * 60) ;

			$carpetaIMG = '../uploads/IMG/' . $username;
			$carpetaX3D = '../uploads/X3D/' . $username;
			$carpetaTEX = '../uploads/X3D/' . $username . '/Texture';
			$carpetaOBJ = '../uploads/OBJ/' . $username;
			$carpetaEXPO = '../Exposiciones/' . $username;
			
			if (!file_exists($carpetaIMG)) {
			    mkdir($carpetaIMG, 0777, true);
			}
			if (!file_exists($carpetaX3D)) {
			    mkdir($carpetaX3D, 0777, true);
			}
			if (!file_exists($carpetaOBJ)) {
			    mkdir($carpetaOBJ, 0777, true);
			}
			if (!file_exists($carpetaTEX)) {
			    mkdir($carpetaTEX, 0777, true);
			}
			if (!file_exists($carpetaEXPO)) {
			    mkdir($carpetaEXPO, 0777, true);
			}
			
			header('Location: ../index.php');
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