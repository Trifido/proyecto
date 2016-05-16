var picture;

function Picture(nombre, pathLocation, altura, anchura, largo){

	var location;
	var height;
	var longitud;
	var width;
	var id;
	var nombre;
	var svgObject;

	this.height= altura;
	this.width= anchura;
	this.longitud= largo;
	this.location= pathLocation;
	this.nombre= nombre;
	
	this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image');

	this.svgObject.setAttribute('id', this.nombre);
	this.svgObject.setAttributeNS(null, 'nombre', this.nombre);
	this.svgObject.setAttributeNS(null,'height', this.height);
	this.svgObject.setAttributeNS(null,'width', this.width);
	this.svgObject.setAttributeNS(null,'longitud', this.long);
	this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
	this.svgObject.setAttributeNS(null,'x','0');
	this.svgObject.setAttributeNS(null,'y','0');
	this.svgObject.setAttributeNS(null,'cX', (this.coordX + (this.width/2)));
	this.svgObject.setAttributeNS(null,'cY',(this.coordY + (this.height/2)));
	this.svgObject.setAttributeNS(null,'rotation', 0);
	this.svgObject.setAttributeNS(null, 'visibility', 'visible');
	this.svgObject.setAttributeNS(null, 'class', 'picture');
	this.svgObject.setAttributeNS(null,'posXFinal','0');
	this.svgObject.setAttributeNS(null,'posZFinal','0');

	document.getElementById('picture_level').appendChild(this.svgObject);
	//Esto me sirve para poder eliminar el cuadro que acabo de cargar en la escena
	var n= document.getElementById('picture_level').childNodes.length;
	targetElement= document.getElementById('picture_level').childNodes[n-1];
}

Picture.prototype.change = function( nombre, pathLocation, altura, largo, anchura){
	this.nombre= nombre;
	this.height= altura;
	this.long= largo;
	this.width= anchura;
	this.location= pathLocation;
}