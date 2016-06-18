var idPicture= 0;

//Iniciar la sala correspondiente.
function initPicture( nombre, pathCanvas, AltoPx, AnchoPx, pathEscena, alto, largo ){
	nombre += idPicture;
	picture = new Picture( nombre, pathCanvas, AltoPx, AnchoPx, alto, largo, pathEscena );
	namePictureLoad = nombre;
	idPicture ++;
}

//Funcion encargada de comprobar y cargar la escultura correspondiente.
function loadPicture( nombre, pathCanvas, AltoPx, AnchoPx, pathEscena, alto, largo ){
	if(RoomInit){
		initPicture(nombre, pathCanvas, AltoPx, AnchoPx, pathEscena, alto, largo);
	}
}