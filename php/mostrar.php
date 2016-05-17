<?php
/*
	session_start();

	echo $_SESSION["puntoMinCuadro"] . '</br>';
	echo $_SESSION["nameScene"] . '</br>';

	echo $_SESSION["posX"] . '</br>';
	echo $_SESSION["posZ"] . '</br>';

	unset($_SESSION["puntoMinCuadro"]); 
	unset($_SESSION["nameScene"]);
	session_destroy();
*/
?>

<script language="javascript" type="text/javascript">
function MiFuncionJS()
{  alert ("EXITO");
}
</script>
 
<?php
echo "<input type='button' value='Click' onClick='MiFuncionJS();' /><br>";
?>
