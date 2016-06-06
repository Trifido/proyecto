
var pictureLoads= [false, false, false, false, false, false];
var namePictureLoad= null;

//Control de la sala que ha sido cargada.
function updatePicture( id ){
	for(var i=0; i<pictureLoads.length; i++)
		if(i+pictureLoads.length == id)
			pictureLoads[i]= true;
		else
			pictureLoads[i]= false;
}

//Comprobar que existe actualmente una sala cargada.
function isPictureLoad(){
	for(var i=0; i<pictureLoads.length; i++)
		if(pictureLoads[i])
			return true;
	return false;
}

//Comprobar si la sala seleccionada esta actualmente cargada.
function isAlreadyPictureLoad( id ){
	return pictureLoads[id];
}

//Iniciar la sala correspondiente.
function initPicture(id){
	switch(id){
		case 1:
			picture = new Picture('elgrito','./img/cuadros2D/elgrito.png', 40, 40, 0.74, 0.91);
			//loadModel('./models/venus/venus.obj');
			//nameScultureLoad= 'venus';
			break;
		case 2:
			picture = new Picture('guernica','./img/cuadros2D/guernica.png', 40, 40, 7.77, 3.49);
			//loadModel('./models/thinker/thinker.obj');
			//nameScultureLoad= 'thinker';
			break;
		case 3:
			picture = new Picture('meninas','./img/cuadros2D/meninas.png', 40, 40, 3.18, 2.76);
			//loadModel('./models/david/david.obj');
			//nameScultureLoad= 'david';
			break;
		case 4:
			picture = new Picture('miro','./img/cuadros2D/miro.png', 40, 40, 2, 1);
			//loadModel('./models/dragon/dragon.obj');
			//nameScultureLoad= 'dragon';
			break;
		case 5:
			picture = new Picture('monalisa','./img/cuadros2D/monalisa.png', 40, 40, 0.53, 0.77);
			//loadModel('./models/ramses2/ramses2.obj');
			//nameScultureLoad= 'ramses2';
			break;
		case 6:
			picture = new Picture('nocheestrellada','./img/cuadros2D/nocheestrellada.png', 40, 40, 0.732, 0.922);
			//loadModel('./models/pascua/pascua.obj');
			//nameScultureLoad= 'pascua';
			break;
	}
}

//Funcion encargada de comprobar y cargar la escultura correspondiente.
function loadPicture( id ){
	if(RoomInit){
		if( isPictureLoad() ){
			//removeModel();
			updatePicture( id );
			initPicture(id);
		}

		else if( !isAlreadyPictureLoad(id) ){
			updatePicture(id);
			initPicture(id);
		}
	}
}

//Funcion para eliminar y cargar otros modelos de esculturas desde un click de SVG
function changePicture( id ){
	if(RoomInit){
		if( namePictureLoad != id ){
			if(namePictureLoad!=null)
				//removeModel();
			//loadModel('./models/'+id+'/'+id+'.obj');
			namePictureLoad= id;
		}
	}
}

function removePicture(){
	if(RoomInit){
		//removeModel();
		namePictureLoad=null;
	}
}