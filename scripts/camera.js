function Camera( vname, vpath, vposX, vposY ){
    var sideLength = 50;

    //Atributos
    this.name = vname;
    this.path = vpath;
    this.posX = vposX;
    this.posY = vposY;
    this.rotation = 0;
    this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image'); //Representacion grafica mediante una imagen

    //Atributos de la representacion grafica
    this.svgObject.setAttributeNS(null, 'nombre', this.name);
    this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.path);
    this.svgObject.setAttributeNS(null, 'class', 'camera'); // Para localizarla luego por su clase
    // Esquina del objeto
    this.svgObject.setAttributeNS(null,'coordX',this.posX);
    this.svgObject.setAttributeNS(null,'coordY',this.posY);
    this.svgObject.setAttributeNS(null,'coordZ','0');
        // Centro del objeto
    this.svgObject.setAttributeNS(null,'cX', (this.posX + (sideLength/2)));
    this.svgObject.setAttributeNS(null,'cY',(this.posY + (sideLength/2)));
        // Para que se visualice
    this.svgObject.setAttributeNS(null,'height', sideLength);
    this.svgObject.setAttributeNS(null,'width', sideLength);
    this.svgObject.setAttributeNS(null,'rotation', this.rotation);
    //this.svgObject.setAttributeNS(null,'opacity', 0.9);

    /**
     * Actualiza las coordenadas del objeto, si se pasa como coordenada -1, esa no se actualiza
     * @param cordX
     * @param cordY
     * @param cordZ
     */
    this.svgObject.updateCoords = function ( cordX, cordY, cordZ ) {
        if (cordX != -1) {
            var nX = parseInt(cordX) + parseInt(this.getAttributeNS(null, 'width'));
            this.setAttributeNS(null, 'coordX', cordX);
            this.setAttributeNS(null, 'cX', nX);
        }
        if (cordY != -1) {
            var nY = parseInt(cordY) + parseInt(this.getAttributeNS(null, 'height'));
            this.setAttributeNS(null, 'coordY', cordY);
            this.setAttributeNS(null, 'cY', nY);
        }
        if (cordZ != -1) {
            this.setAttributeNS(null, 'coordZ', cordZ);
        }
    };

    document.getElementById('camera_level').appendChild(this.svgObject);
}
