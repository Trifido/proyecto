function FirstCamera(posX, posY){

	//Atributos para del objeto 
	var location;
	var coordX;
	var coordY;
	var height;
	var width;
	var svgObject;
	var rotation;
	

	// Inicialización de los atributos
	this.coordX= posX;
	this.coordY= posY;
	this.rotation= 0;

	
	// Contrucción del nodo hijo que representa a la escultura y se cuelga del lienzo
	this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image');

	this.svgObject.setAttributeNS(null, 'nombre', 'FirstCamera');
	this.svgObject.setAttributeNS(null, 'class', 'VRcamera');
	this.svgObject.setAttributeNS(null, 'id', 'FirstCamera');
	this.svgObject.setAttributeNS(null,'height', 40);
	this.svgObject.setAttributeNS(null,'width', 40);
	this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', './img/camera/FirstCamera.png');
	this.svgObject.setAttributeNS(null,'x',this.coordX);
	this.svgObject.setAttributeNS(null,'y',this.coordY);
	this.svgObject.setAttributeNS(null,'coordX',this.coordX);
	this.svgObject.setAttributeNS(null,'coordY',this.coordY);
	this.svgObject.setAttributeNS(null,'cX', (this.coordX + 20));
	this.svgObject.setAttributeNS(null,'cY',(this.coordY + 20));
	this.svgObject.setAttributeNS(null,'rotation', this.rotation);
	this.svgObject.setAttributeNS(null, 'fill', 'orange');
	this.svgObject.setAttributeNS(null, 'visibility', 'visible');
	this.svgObject.setAttributeNS(null, 'altura', '170');
	this.svgObject.setAttributeNS(null, 'zancada', '30');
	this.svgObject.setAttributeNS(null, 'salto', '0.5');

	document.getElementById('VRcamera_level').appendChild(this.svgObject);
}

function LoadFirstCameraCanvas( posX, posY, coordX, coordY, cx, cy,width, height, rotation, altura, zancada, salto ){
	this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image');

	this.svgObject.setAttributeNS(null, 'nombre', 'FirstCamera');
	this.svgObject.setAttributeNS(null, 'class', 'VRcamera');
	this.svgObject.setAttributeNS(null, 'id', 'FirstCamera');
	this.svgObject.setAttributeNS(null,'height', 40);
	this.svgObject.setAttributeNS(null,'width', 40);
	this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', './img/camera/FirstCamera.png');
	this.svgObject.setAttributeNS(null,'x', posX);
	this.svgObject.setAttributeNS(null,'y', posY);
	this.svgObject.setAttributeNS(null,'coordX',coordX);
	this.svgObject.setAttributeNS(null,'coordY',coordY);
	this.svgObject.setAttributeNS(null,'cX', cx);
	this.svgObject.setAttributeNS(null,'cY', cy);
	this.svgObject.setAttributeNS(null,'rotation', rotation);
	this.svgObject.setAttributeNS(null, 'fill', 'orange');
	this.svgObject.setAttributeNS(null, 'visibility', 'visible');
	this.svgObject.setAttributeNS(null, 'altura', altura);
	this.svgObject.setAttributeNS(null, 'zancada', zancada);
	this.svgObject.setAttributeNS(null, 'salto', salto);

	var posW= 20;
    var posH= 20;

    var xcord = cx;
    var ycord = cy;

	var rad= (rotation*Math.PI)/180;
	var rotX= xcord*Math.cos(rad) + ycord*Math.sin(rad);
	var rotY= (-1*xcord*Math.sin(rad)) + ycord*Math.cos(rad);

	cx= rotX - posW;
	cy= rotY - posH;

	this.svgObject.setAttributeNS(null, 'transform', 'rotate(' + rotation + ', 0, 0) translate(' + cx +', '+ cy + ')');

	document.getElementById('VRcamera_level').appendChild(this.svgObject);
}