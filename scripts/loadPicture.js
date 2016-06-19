var idPicture= 0;

//Iniciar la sala correspondiente.
function initPicture( nombre, nombreBD, pathCanvas, AltoPx, AnchoPx, pathEscena, alto, largo ){
	nombre += idPicture;
	picture = new Picture( nombre, nombreBD, pathCanvas, AltoPx, AnchoPx, alto, largo, pathEscena );
	namePictureLoad = nombre;
	idPicture ++;
}

//Funcion encargada de comprobar y cargar la escultura correspondiente.
function loadPicture( nombre, pathCanvas, AltoPx, AnchoPx, pathEscena, alto, largo ){
	if(RoomInit){
		var nombreBD = nombre;
		initPicture(nombre, nombreBD, pathCanvas, AltoPx, AnchoPx, pathEscena, alto, largo);
		typeNodeLoad = "picture";
		showInfoForm(typeNodeLoad, nombreBD, pathCanvas);
	}
}