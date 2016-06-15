
	<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">Editor de Escenarios</a>
        </div>
        <!-- /.navbar-header -->

        <ul class="nav navbar-top-links navbar-right">

            <?php
                if( $_SESSION['seccion'] == "nuevoEscenario" ){
                    echo "<button class=\"btn btn-primary btn-lg\" id=\"botonNuevoEscenario\"> 
                        Añadir Nuevo Escenario 
                        </button>";
                }
                else if( $_SESSION['seccion'] == "editor" ){
                    echo "<button class=\"btn btn-warning btn-lg\" id=\"botonNuevoEscenario\" onClick=\"exportarX3D('UsuarioEjemploWeb', 'web', '" . $_SESSION['username'] . "' )\"> 
                        Exportar Escenario Web
                        </button>
                        
                        <button class=\"btn btn-info btn-lg\" id=\"botonNuevoEscenario\" onClick=\"exportarX3D('UsuarioEjemploApp', 'app',  '" . $_SESSION['username'] . "' )\"> 
                        Exportar Escenario App
                        </button>";
                }
            ?>

            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-envelope fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
            </li>
            <!-- /.dropdown -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-tasks fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
            </li>
            <!-- /.dropdown -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-bell fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
            </li>
            <!-- /.dropdown -->
           <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                    </li>
                    <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                    </li>
                    <li class="divider"></li>
                    <li><a href="./logout.php"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                    </li>
                </ul>
                <!-- /.dropdown-user -->
            </li>
            <!-- /.dropdown -->
        </ul>
        <!-- /.navbar-top-links -->

        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse">
                <ul class="nav" id="side-menu">
                    <li>
                        <a href="./index.php"><i class="fa fa-pencil fa-fw"></i> Editor de Escenarios</a>
                    </li>
                    <li>
                        <a href="./php/mostrarSalas.php"><i class="fa fa-folder-open fa-fw"></i> Mis Escenarios</a>
                    </li>
                    <li>
                        <a href="tables.html"><i class="fa fa-qq fa-fw"></i> Esculturas</a>
                    </li>
                    <li>
                        <a href="forms.html"><i class="fa fa-picture-o fa-fw"></i> Cuadros</a>
                    </li>
                    <li>
                        <a href="forms.html"><i class="fa fa-rebel fa-fw"></i> Otros Objetos</a>
                    </li>
                </ul>
            </div>
            <!-- /.sidebar-collapse -->
        </div>
        <!-- /.navbar-static-side -->
    </nav>