<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- CSS -->
    <link href="../css/style.css" rel="stylesheet" type='text/css' />
</head>


<script type="text/javascript">
	function validar(){
		var valor = document.getElementById("campoUsuario").value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			alert("Campo usuario incorrecto");
		  	return false;
		}

		var valor = document.getElementById("campoPassword").value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			alert("Campo contraseña incorrecto");
		  	return false;
		}

		valor = document.getElementById("campoCorreo").value;
		if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)) ) {
			alert("Formato Email erroneo");
		  	return false;
		}
		
		valor = document.getElementById("campoTelefono").value;
		if( !(/^\d{9}$/.test(valor)) ) {
			alert("Formato Telefono erroneo");
		  	return false;
		}
		return true;
	}
</script>

<body>
	<div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Registro</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="cameraForm" method="post" onsubmit="return validar()" action="./checkRegister.php" >
                            <fieldset>
                                <div class="form-group">
                                	<label>Nombre de usuario</label>
                                    <input id="campoUsuario" class="form-control" placeholder="Usuario" name="username" type="username" autofocus>
                                </div>
                                <div class="form-group">
                                	<label>Contraseña</label>
                                    <input id="campoPassword" class="form-control" placeholder="Contraseña" name="password" type="password" value="">
                                </div>
                                <div class="form-group">
                                	<label>Nombre</label>
                                    <input class="form-control" placeholder="Nombre" name="nombre" type="nombre" value="">
                                </div>
                                <div class="form-group">
                                	<label>Apellidos</label>
                                    <input class="form-control" placeholder="Apellidos" name="apellidos" type="apellidos" value="">
                                </div>
                                <div class="form-group">
                                	<label>Correo Electronico</label>
                                    <input id="campoCorreo" class="form-control" placeholder="Correo" name="correo" type="correo" value="">
                                </div>
                                <div class="form-group">
                                	<label>Telefono</label>
                                    <input id="campoTelefono" class="form-control" placeholder="Telefono" name="telefono" type="telefono" value="">
                                </div>
                                <div class="form-group">
                                	<label>Dirección</label>
                                    <input class="form-control" placeholder="Calle" name="direccion" type="direccion" value="">
                                </div>

                                <!-- Change this to a button or input when using this as a form -->
                                <button type="submit" id="btnSubmit" class="btn btn-lg btn-info btn-block">Registrar</button>
                            </fieldset>
                        </form>  

                    </div>

                    
                    <style>
                        #alertLogin{
                            display: <?php
                                        session_start();
                                        if (isset($_SESSION['message']))
                                            echo "block";
                                        else
                                            echo "none";
                                    ?>
                        }
                    </style>


                    <div id="alertLogin" class="col-lg" >
                        <div id="alertLogin" class="alert alert-danger">
                            <?php
                                echo $_SESSION['message'];
                                unset($_SESSION['message']);
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>