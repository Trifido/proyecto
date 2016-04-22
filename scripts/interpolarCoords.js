
/*		Esta clase la inicializa loadRoom.js y la usa loadX3DScene.js		*/

function InterpolarCoords( pixAltoImagen, pixAnchoImagen, largoMSala, anchoMSala ){
	var pixCanvasX;
	var pixCanvasY;
	var parseMeters;
	var altoImagen;
	var anchoImagen;
	var largoSala;
	var anchoSala;
	var newX, newZ;

	this.pixCanvasX = 500; 			// El canvas es de 500 x 500 px
	this.pixCanvasY = 500;
	this.parseMeters = 0.1; 		// Pasamos a metros para X3DOM
	this.altoImagen = pixAltoImagen;
	this.anchoImagen = pixAnchoImagen;
	this.largoSala = largoMSala;
	this.anchoSala = anchoMSala;
}

InterpolarCoords.prototype.Interpolacion = function ( cordX, cordZ ){

	this.pixCanvasY = parseFloat(getLimitY2()) - parseFloat(getLimitY());
	this.pixCanvasX = parseFloat(getLimitX2()) - parseFloat(getLimitX());

	cordX = cordX - parseFloat(getLimitX());
	cordZ = cordZ - parseFloat(getLimitY());

	this.newX = this.InterpolNormal( cordX, this.anchoSala, this.pixCanvasX );
	this.newZ = this.InterpolNormal( cordZ, this.largoSala, this.pixCanvasY );

}

InterpolarCoords.prototype.InterpolNormal = function ( cord, datoSala, pixels ){
	var interN= (cord*datoSala)/pixels;
    return (interN * this.parseMeters);
} 
/*
InterpolarCoords.prototype.InterpolComp = function ( cord, datoImagen, datoSala ){
    var anchoImg= (this.pixCanvasX*this.pixCanvasY)/datoImagen;
    var interX= (this.pixCanvasX-anchoImg)/2;
    var auxX= ((cord-interX)*datoSala)/anchoImg;
    
    return (auxX * this.parseMeters);
}*/

InterpolarCoords.prototype.getX = function ( ){
	return this.newX;
}

InterpolarCoords.prototype.getZ = function ( ){
	return this.newZ;
}