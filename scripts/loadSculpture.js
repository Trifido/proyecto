
//var sculptureLoads= [false, false, false, false, false, false];
var nameScultureLoad= null;

//Control de la sala que ha sido cargada.
/*function updateSculpture( id ){
	for(var i=0; i<sculptureLoads.length; i++)
		if(i+sculptureLoads.length == id)
			sculptureLoads[i]= true;
		else
			sculptureLoads[i]= false;
}

//Comprobar que existe actualmente una sala cargada.
function isSculptureLoad(){
	for(var i=0; i<sculptureLoads.length; i++)
		if(sculptureLoads[i])
			return true;
	return false;
}

//Comprobar si la sala seleccionada esta actualmente cargada.
function isAlreadySculptureLoad( id ){
	return sculptureLoads[id];
}*/

//Iniciar la sala correspondiente.
function initSculpture( nombre, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ ){
	sculpture = new Sculpture(nombre,pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ);
	//loadModel('pathOBJ');
	nameScultureLoad= nombre;
}

//Funcion encargada de comprobar y cargar la escultura correspondiente.
function loadSculpture( nombre, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ ){
	if(RoomInit){
		if( nameScultureLoad != null ){
			if(nameScultureLoad != nombre){
				//removeX3DSculpture();
				removeModel();
				//updateSculpture( id );
				initSculpture(nombre, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ);
			}
		}

		else if( nameScultureLoad == null ){
			//updateSculpture(id);
			initSculpture(nombre, pathCenital, AltoPx, AnchoPx, pathX3D, pathOBJ);
		}
	}
}

//Funcion para eliminar y cargar otros modelos de esculturas desde un click de SVG
function changeSculture( id ){
	if(RoomInit){
		if( nameScultureLoad != id ){
			if(nameScultureLoad!=null)
				removeModel();
				//removeX3DSculpture();
			loadModel('./models/'+id+'/'+id+'.obj');
			nameScultureLoad= id;
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
