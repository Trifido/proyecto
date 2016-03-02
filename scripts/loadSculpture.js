
var sculptureLoads= [false, false, false, false, false, false];

//Control de la sala que ha sido cargada.
function updateSculpture( id ){
	for(var i=0; i<sculptureLoads.length; i++)
		if(i == id)
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
}

//Iniciar la sala correspondiente.
function initSculpture(id){
	switch(id){
		case 6:
			sculpture = new Sculpture('./img/models2D/venus.jpg', 40, 40, 0, 0);
			break;
		case 7:
			sculpture = new Sculpture('./img/models2D/thinker.jpg', 60, 60, 50, 50);
			break;
		case 8:
			sculpture = new Sculpture('./img/models2D/david.jpg', 50, 50, 50, 50);
			break;
		case 9:
			sculpture = new Sculpture('./img/models2D/dragon.jpg', 40, 40, 50, 50);
			break;
		case 10:
			sculpture = new Sculpture('./img/models2D/ramses2.jpg', 60, 60, 50, 50);
			break;
		case 11:
			sculpture = new Sculpture('./img/models2D/pascua.jpg', 10, 10, 50, 50);
			break;
	}
}

//Funcion encargada de comprobar y cargar la escultura correspondiente.
function loadSculpture( id ){
	if(RoomInit){
		if( isSculptureLoad() ){
			//sculpture.deleteModel();
			updateSculpture( id );
			initSculpture(id);
		}

		else if( !isAlreadySculptureLoad(id) ){
			updateSculpture(id);
			initSculpture(id);
		}
	}
}

function showSculptureMenu(){
	$(document).ready(function() {
		$("#6").click(function(){
		    $("#sculpture1 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");

		});
		$("#7").click(function(){
		    $("#sculpture2 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");
		});
		$("#8").click(function(){
		    $("#sculpture3 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");
		});
		$("#9").click(function(){
		    $("#sculpture4 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");
		});
		$("#10").click(function(){
		    $("#sculpture5 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");
		    
		});
		$("#11").click(function(){
		    $("#sculpture6 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		});
	});
}