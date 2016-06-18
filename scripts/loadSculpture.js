var idSculpture = 0;
var ScultureLoad= null;

//Iniciar la sala correspondiente.
function initSculpture( nombre, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ ){
	sculpture = new Sculpture(nombre,pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ);
	//loadModel('pathOBJ');
	ScultureLoad= pathOBJ;
}

//Funcion encargada de comprobar y cargar la escultura correspondiente.
function loadSculpture( nombre, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ ){
	if(RoomInit){
		if( ScultureLoad != null && ScultureLoad != pathOBJ)
			removeModel();

		nombre += idSculpture;
		initSculpture(nombre, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ);

		idSculpture++;
	}
}

//Funcion para eliminar y cargar otros modelos de esculturas desde un click de SVG
function changeSculture( path ){
	if(RoomInit){
		if( ScultureLoad != path ){
			if( ScultureLoad != null ){
				removeModel();
			}

			loadModel(ScultureLoad);
			ScultureLoad = path;
		}
	}
}

function removeSculpture(){
	if(RoomInit){
		//removeX3DSculpture();
		//removeModel();
		nameScultureLoad=null;
	}
}
