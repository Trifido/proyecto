<?php
    require_once 'dbhandler.php';

	session_start();

	$username = $_POST['username'];
	$password = $_POST['password'];

	if($password != ""){
		$query = 'SELECT*FROM Usuarios WHERE username=\'' . $username . '\' AND password=\'' . $password . '\'';
		$db = sqlite_open('../database/tfgDB.db');

	    $result = sqlite_query($db, $query);
		$array = $result->fetchArray();

		sqlite_close($db);

	    if($password == $array["password"]){
			$_SESSION['loggedin'] = true;
			$_SESSION['username'] = $username;
			$_SESSION['start'] = time();
			$_SESSION['expire'] = $_SESSION['start'] + (5 * 60) ;
			$_SESSION["tipoEditor"] = "newScene";

			echo "<script>location.href='../editor.php'</script>";
			//header( "location: ../index.html");
		}
		else {
			//header( "location: ../login.php");
			echo "<script>location.href='../login.php'</script>";
			$_SESSION['message'] = 'Username o Password estan incorrectos.';
		}
	}
	else{
		//header( "location: ../login.php");
		echo "<script>location.href='../login.php'</script>";
		$_SESSION['message'] = 'Username o Password estan incorrectos.';
	}
?>