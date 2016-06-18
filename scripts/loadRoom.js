
var interpolador;
var puntolimitador;
var puntolimitador2;
var sceneName;

var fcamera;
var RoomInit= false;

//Iniciar la sala correspondiente.
function initRoom(nombreSala, pathSala, ancho, largo, pixAncho, pixLargo, pathX3dSin, pathX3D, pathOBJ){
	svgroom = new Room (nombreSala, pathSala, pathX3dSin, pathX3D, pathOBJ);
	interpolador= new InterpolarCoords( pixLargo, pixAncho, largo, ancho );
	sceneName = nombreSala;
}

//Cambiar de sala.
function changeRoom(nombreSala, pathSala, ancho, largo, pixAncho, pixLargo, pathX3dSin, pathX3D, pathOBJ){
	svgroom.change(nombreSala, pathSala, pathX3D, pathOBJ);
	interpolador= new InterpolarCoords( pixLargo, pixAncho, largo, ancho );
	sceneName = nombreSala;
}

//Funcion encargada de comprobar y cargar la sala correspondiente.
function loadRoom( nombreSala, pathSala, ancho, largo, pixAncho, pixLargo, pathX3dSin, pathX3D, pathOBJ ) {

	if( RoomInit && sceneName != nombreSala) {
		changeRoom(nombreSala, pathSala, ancho, largo, pixAncho, pixLargo, pathX3dSin, pathX3D, pathOBJ);
	}

	else if( !RoomInit ){
		puntolimitador= Limit("superior","./img/camera/limitIcon.png",0,0);
		puntolimitador2= Limit("inferior","./img/camera/limitIcon.png",450,450);
		fcamera= new FirstCamera('FirstCamera', './img/camera/FirstCamera.png', 40, 40, 0, 0);
		initRoom(nombreSala, pathSala, ancho, largo, pixAncho, pixLargo, pathX3dSin, pathX3D, pathOBJ);
		RoomInit=true;
		
		$('#btnAddCamera').removeAttr('disabled');
	}

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //alert("hello");
          //  document.getElementById("wrapper").innerHTML = xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", "./php/iniciarEscenario.php?nameScene=."  + pathX3dSin, true);		//CUIDADO CON ESTA LINEA
    xmlhttp.send();
}
