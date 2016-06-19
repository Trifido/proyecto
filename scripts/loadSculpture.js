var typeNodeLoad = null;
var idSculpture = 0;
var ScultureLoad= null;

//Iniciar la sala correspondiente.
function initSculpture( nombre, nombreBD, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ ){
	sculpture = new Sculpture(nombre, nombreBD, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ);
	//loadModel('pathOBJ');
}

//Funcion encargada de comprobar y cargar la escultura correspondiente.
function loadSculpture( nombre, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ ){
	if(RoomInit){
		if( ScultureLoad != null && ScultureLoad != pathOBJ)
			removeModel();

		var nombreBD = nombre;
		nombre += idSculpture;
		initSculpture(nombre, nombreBD, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ);

		idSculpture++;
		typeNodeLoad = "sculpture";
		showInfoForm("sculpture", nombreBD, null);

		ScultureLoad= pathOBJ;
		loadModel(ScultureLoad);
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
		removeModel();
		nameScultureLoad=null;
	}
}
