
var RoomLoads= [false, false, false, false, false, false];
var RoomInit= false;

//Control de la sala que ha sido cargada.
function updateRoom( id ){
	RoomLoads= [false, false, false, false, false, false];
	RoomLoads[id]= true;
	/*for(var i=0; i<RoomLoads.length; i++)
		if(i == id)
			RoomLoads[i]= true;
		else
			RoomLoads[i]= false;*/
}

//Comprobar que existe actualmente una sala cargada.
function isRoomLoad(){
	for(var i=0; i<RoomLoads.length; i++)
		if(RoomLoads[i])
			return true;
	return false;
}

//Comprobar si la sala seleccionada esta actualmente cargada.
function isAlreadyLoad( id ){
	return RoomLoads[id];
}

//Iniciar la sala correspondiente.
function initRoom(id){
	switch(id){
		case 0:
			svgroom = new Room ('scene6','./img/rooms/sala6.png', 500, 500);
			break;
		case 1:
			svgroom = new Room ('Sala2','./img/rooms/sala2.png', 500, 500);
			break;
		case 2:
			svgroom = new Room ('Sala3','./img/rooms/sala3.png', 500, 500);
			break;
		case 3:
			svgroom = new Room ('Sala4','./img/rooms/sala4.png', 500, 500);
			break;
		case 4:
			svgroom = new Room ('Sala5','./img/rooms/sala5.png', 500, 500);
			break;
		case 5:
			svgroom = new Room ('Sala6','./img/rooms/sala6.png', 500, 500);
			break;
	}
}

//Cambiar de sala.
function changeRoom(id){
	switch(id){
		case 0:
			svgroom.change('./img/rooms/sala6.png', 500, 500);
			break;
		case 1:
			svgroom.change('./img/rooms/sala2.png', 500, 500);
			break;
		case 2:
			svgroom.change('./img/rooms/sala3.png', 500, 500);
			break;
		case 3:
			svgroom.change('./img/rooms/sala4.png', 500, 500);
			break;
		case 4:
			svgroom.change('./img/rooms/sala5.png', 500, 500);
			break;
		case 5:
			svgroom.change('./img/rooms/sala6.png', 500, 500);
			break;
	}
}

//Funcion encargada de comprobar y cargar la sala correspondiente.
function loadRoom( id ){

	if( RoomInit) {
		//updateRoom(id);
		changeRoom(id);
	}

	else if( !RoomInit ){
		//updateRoom(id);
		initRoom(id);
		RoomInit=true;
		
		$('#btnAddCamera').removeAttr('disabled');
	}

}
