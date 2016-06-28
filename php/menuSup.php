
	<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-brand" href="./index.php">Escenarios VR </a>
        </div>
        
        <ul class="nav navbar-top-links navbar-right">
            <?php
                if( !$detect->isMobile() ){
                    echo "<button class=\"btn btn-primary btn-lg\" id=\"botonLogin\" onClick=\"LoadLogin()\"> 
                        Login
                        </button>";
                    echo "<button class=\"btn btn-info btn-lg\" id=\"botonRegister\" onClick=\"LoadRegister()\"> 
                        Registrar
                        </button>";
                }
            ?>
        </ul>
    </nav>