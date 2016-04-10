
var svgroom;

function Room(nombre, pathLocation, altura, anchura){

	var location;
	var height;
	var width;
	var id;
	var nombre;

	this.height= altura;
	this.width= anchura;
	this.location= pathLocation;
	this.id= "sala";
	this.nombre= nombre;
	
	svgroom = document.createElementNS('http://www.w3.org/2000/svg','image');

	svgroom.setAttribute('id', this.id);
	svgroom.setAttributeNS(null, 'nombre', this.nombre);
	svgroom.setAttributeNS(null,'height', this.height);
	svgroom.setAttributeNS(null,'width', this.width);
	svgroom.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
	svgroom.setAttributeNS(null,'x','0');
	svgroom.setAttributeNS(null,'y','0');
	svgroom.setAttributeNS(null, 'visibility', 'visible');


	document.getElementById('room_level').appendChild(svgroom);
}

Room.prototype.change = function( nombre, pathLocation, altura, anchura){
	this.nombre= nombre;
	this.height= altura;
	this.width= anchura;
	this.location= pathLocation;

	document.getElementById('room_level').childNodes[0].setAttributeNS(null, 'nombre', this.nombre);
	document.getElementById('room_level').childNodes[0].setAttributeNS('http://www.w3.org/1999/xlink','href', pathLocation);
	/*
	svgroom.setAttributeNS(null,'height', altura);
	svgroom.setAttributeNS(null,'width', anchura);
	svgroom.setAttributeNS('http://www.w3.org/1999/xlink','href', pathLocation);
*/
	//document.getElementById('room_level').appendChild(svgroom);
}