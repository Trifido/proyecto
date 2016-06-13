<?php
	require_once 'config.php';
    require_once 'dbhandler.php';

	session_start();

	$nombreSala = $_POST['nomSala'];
	$anchoSala = $_POST['anchoSala'];
	$largoSala = $_POST['largoSala'];

	//Datos Modelos 3D
	$x3dTecho = $_POST['x3dTecho'];
	$x3dsinTecho = $_POST['x3dsinTecho'];
	$objSala = $_POST['objSala'];

	//Datos Imagen Sala
	$imgSala = $_POST['imgSala'];
	$anchoPixSala = $_POST['anchoPixSala'];
	$altoPixSala = $_POST['altoPixSala'];

	//Datos Imagen Sala Menu
	$imgMenuSala = $_POST['imgMenuSala'];
	$anchoPixMenSala = $_POST['anchoPixMenSala'];
	$altoPixMenSala = $_POST['altoPixMenSala'];

	echo "imgSala= " . $imgSala;

	/*$db = sqlite_open('../database/tfgDB.db');

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
			
		    echo "<script>location.href='../index.html'</script>";
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

	sqlite_close($db);*/

?>