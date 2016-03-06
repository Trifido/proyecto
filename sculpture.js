
function Sculpture( nombre, pathLocation, altura, anchura, posX, posY){

	//Atributos para del objeto 
	var nombre;
	var location;
	var coordX;
	var coordY;
	var height;
	var width;
	var svgObject;
	var rotation;
	

	// Inicialización de los atributos
	this.nombre= nombre;
	this.height= altura;
	this.width= anchura;
	this.coordX= posX;
	this.coordY= posY;
	this.location= pathLocation;
	this.rotation= 0;

	
	// Contrucción del nodo hijo que representa a la escultura y se cuelga del lienzo
	this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image');

	this.svgObject.setAttributeNS(null, 'nombre', this.nombre);
	this.svgObject.setAttributeNS(null,'height', this.height);
	this.svgObject.setAttributeNS(null,'width', this.width);
	this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
	this.svgObject.setAttributeNS(null,'x',this.coordX);
	this.svgObject.setAttributeNS(null,'y',this.coordY);
	this.svgObject.setAttributeNS(null,'coordX',this.coordX);
	this.svgObject.setAttributeNS(null,'coordY',this.coordY);
	this.svgObject.setAttributeNS(null,'cX', (this.coordX + (this.width/2)));
	this.svgObject.setAttributeNS(null,'cY',(this.coordY + (this.height/2)));
	this.svgObject.setAttributeNS(null,'rotation', this.rotation);
	this.svgObject.setAttributeNS(null, 'fill', 'orange');
	//this.svgObject.setAttributeNS(null, 'stroke', 'red');
	this.svgObject.setAttributeNS(null, 'visibility', 'visible');

	document.getElementById('lienzo').appendChild(this.svgObject);
}

//Metodo para cambiar los atributos del objeto
Sculpture.prototype.change = function( pathLocation, altura, anchura){
	this.height= altura;
	this.width= anchura;
	this.location= pathLocation;

	this.svgObject.setAttributeNS(null,'height', this.height);
	this.svgObject.setAttributeNS(null,'width', this.width);
	this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
}

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */