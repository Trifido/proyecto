
var svgroom;

function Room(nombre, pathLocation, pathX3dSin, pathX3d, pathObj){

	var location;
	var height;
	var width;
	var id;
	var nombre;
	var pathX3D;
	var pathX3DSIN;
	var pathOBJ;

	//this.height= altura;
	//this.width= anchura;
	this.location= pathLocation;
	this.id= "sala";
	this.nombre= nombre;
	this.pathX3D = pathX3d;
	this.pathX3DSIN = pathX3dSin;
	this.pathOBJ = pathObj;
	
	svgroom = document.createElementNS('http://www.w3.org/2000/svg','image');

	svgroom.setAttribute('id', this.id);
	svgroom.setAttributeNS(null, 'nombre', this.nombre);
	svgroom.setAttributeNS(null,'height', 500);
	svgroom.setAttributeNS(null,'width', 500);
	svgroom.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
	svgroom.setAttributeNS(null,'x','0');
	svgroom.setAttributeNS(null,'y','0');
	svgroom.setAttributeNS(null, 'visibility', 'visible');
	svgroom.setAttributeNS(null,'pathX3D', this.pathX3D);
	svgroom.setAttributeNS(null,'pathX3DSIN', this.pathX3DSIN);
	svgroom.setAttributeNS(null,'pathOBJ', this.pathOBJ);

	document.getElementById('room_level').appendChild(svgroom);
}

Room.prototype.change = function( nombre, pathLocation, pathX3dSin, pathX3d, pathObj){
	this.nombre= nombre;
	this.location= pathLocation;
	this.pathX3D = pathX3d;
	this.pathX3DSIN = pathX3dSin;
	this.pathOBJ = pathObj;

	document.getElementById('room_level').childNodes[0].setAttributeNS(null, 'nombre', this.nombre);
	document.getElementById('room_level').childNodes[0].setAttributeNS(null, 'pathX3D', this.pathX3D);
	document.getElementById('room_level').childNodes[0].setAttributeNS(null,'pathX3DSIN', this.pathX3DSIN);
	document.getElementById('room_level').childNodes[0].setAttributeNS(null, 'pathOBJ', this.pathOBJ);
	document.getElementById('room_level').childNodes[0].setAttributeNS('http://www.w3.org/1999/xlink','href', pathLocation);
	/*
	svgroom.setAttributeNS(null,'height', altura);
	svgroom.setAttributeNS(null,'width', anchura);
	svgroom.setAttributeNS('http://www.w3.org/1999/xlink','href', pathLocation);
*/
	//document.getElementById('room_level').appendChild(svgroom);
}