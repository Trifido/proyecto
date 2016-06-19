
function Sculpture( nombre, nombrebd, pathLocation, altura, anchura, pathX3d, pathObj){

	//Atributos para del objeto 
	var nombre;
	var nombreBD;
	var location;
	var height;
	var width;
	var svgObject;
	var rotation;
	var pathX3D;
	var pathOBJ;
	
	// Inicialización de los atributos
	this.nombre= nombre;
	this.nombreBD = nombrebd;
	this.height= altura;
	this.width= anchura;
	this.location= pathLocation;
	this.rotation= 0;
	this.pathX3D = pathX3d;
	this.pathOBJ = pathObj;
	
	// Contrucción del nodo hijo que representa a la escultura y se cuelga del lienzo
	this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image');

	this.svgObject.setAttributeNS(null, 'nombre', this.nombre);
	this.svgObject.setAttributeNS(null, 'nombreBD', this.nombreBD);
	this.svgObject.setAttributeNS(null, 'id', this.nombre);
	this.svgObject.setAttributeNS(null,'height', this.height);
	this.svgObject.setAttributeNS(null,'width', this.width);
	this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
	this.svgObject.setAttributeNS(null,'x', 0);
	this.svgObject.setAttributeNS(null,'y', 0);
	this.svgObject.setAttributeNS(null,'coordX', 0);
	this.svgObject.setAttributeNS(null,'coordY', 0);
	this.svgObject.setAttributeNS(null,'cX', (this.width/2));
	this.svgObject.setAttributeNS(null,'cY', (this.height/2));
	this.svgObject.setAttributeNS(null,'rotation', this.rotation);
	this.svgObject.setAttributeNS(null, 'fill', 'orange');
	this.svgObject.setAttributeNS(null, 'visibility', 'visible');
	this.svgObject.setAttributeNS(null, 'class', 'sculpture'); // Para localizarla luego por su 
	this.svgObject.setAttributeNS(null,'pedestalAncho',0);
	this.svgObject.setAttributeNS(null,'pedestalAlto',0);
	this.svgObject.setAttributeNS(null,'pathX3D', this.pathX3D);
	this.svgObject.setAttributeNS(null,'pathOBJ', this.pathOBJ);

	document.getElementById('sculpture_level').appendChild(this.svgObject);

	//Esto me sirve para poder eliminar la escultura que acabo de cargar en la escena
	var n= document.getElementById('sculpture_level').childNodes.length;
	targetElement= document.getElementById('sculpture_level').childNodes[n-1];
}

//Metodo para cambiar los atributos del objeto
/*Sculpture.prototype.change = function( pathLocation, altura, anchura){
	this.height= altura;
	this.width= anchura;
	this.location= pathLocation;

	this.svgObject.setAttributeNS(null,'height', this.height);
	this.svgObject.setAttributeNS(null,'width', this.width);
	this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
}*/

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */