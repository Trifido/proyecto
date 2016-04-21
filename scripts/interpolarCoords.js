
/*		Esta clase la inicializa loadRoom.js y la usa loadX3DScene.js		*/

function InterpolarCoords( pixAltoImagen, pixAnchoImagen, largoMSala, anchoMSala ){
	var pixCanvas;
	var parseMeters;
	var altoImagen;
	var anchoImagen;
	var largoSala;
	var anchoSala;
	var newX, newZ;
	var limite;	

	this.pixCanvas = 500; 			// El canvas es de 500 x 500 px
	this.parseMeters = 0.1; 		// Pasamos a metros para X3DOM
	this.altoImagen = pixAltoImagen;
	this.anchoImagen = pixAnchoImagen;
	this.largoSala = largoMSala;
	this.anchoSala = anchoMSala;
}

InterpolarCoords.prototype.Interpolacion = function ( cordX, cordZ ){

	//cordX -= getLimitX();
	cordZ -= getLimitY();

	if( this.largoSala > this.anchoSala ){
		this.newZ = this.InterpolNormal( cordZ, this.largoSala );
		this.newX = this.InterpolComp( cordX, this.altoImagen, this.anchoSala );
	}
	else if( this.largoSala < this.anchoSala ){
		this.newX = this.InterpolNormal( cordX, this.anchoSala );
		this.newZ = this.InterpolComp( cordZ, this.anchoImagen, this.largoSala );
	}
	else{
		this.newX = this.InterpolNormal( cordX, this.anchoSala );
		this.newZ = this.InterpolNormal( cordZ, this.largoSala );
	}

}

InterpolarCoords.prototype.InterpolNormal = function ( cord, datoSala ){
	var interN= (cord*datoSala)/this.pixCanvas;
    return (interN * this.parseMeters);
} 

InterpolarCoords.prototype.InterpolComp = function ( cord, datoImagen, datoSala ){
    var anchoImg= (this.pixCanvas*this.pixCanvas)/datoImagen;
    var interX= (this.pixCanvas-anchoImg)/2;
    var auxX= ((cord-interX)*datoSala)/anchoImg;
    
    return (auxX * this.parseMeters);
}

InterpolarCoords.prototype.getX = function ( ){
	return this.newX;
}

InterpolarCoords.prototype.getZ = function ( ){
	return this.newZ;
}