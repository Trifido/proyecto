/* Punto:
   - Nombre: nombre del punto
   - Path: ruta del archivo de imagen.
   - PosX y PosY: par de posiciones donde aparece el punto inicialmente.
 */
function Point( vname, vpath, vposX, vposY ){
    var sideLength = 50;

    //Atributos
    this.name = 'punto'+selectedCamera+'_'+vname;
    this.path = vpath;
    this.posX = vposX;
    this.posY = vposY;
    this.rotation = 0;
    this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image'); //Representacion grafica mediante una imagen

    //Atributos de la representacion grafica
    this.svgObject.setAttributeNS(null, 'nombre', this.name);
    this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.path);
    this.svgObject.setAttributeNS(null, 'class', 'point'); // Para localizarla luego por su clase
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
    
    document.getElementById('point_level').appendChild(this.svgObject);

    // Para la linea
    if (vname == 1) { // Unir con la camara

        $('.camera').each(function( i, obj ) {
            if ('camara' + selectedCamera == obj.getAttributeNS(null, 'nombre')) { //Cogemos la camara
                x1 = obj.getAttributeNS(null, 'cX');
                y1 = obj.getAttributeNS(null, 'cY');
            }
        });

        var x2 = this.svgObject.getAttributeNS(null, 'cX');
        var y2 = this.svgObject.getAttributeNS(null, 'cY');

        drawLine(x1, y1, x2, y2, vname); // Posicion del elemento anterior - Nuestra Posicion - Nombre
    }
    else { // Unir con el punto anterior
        var x1 = 0, y1 = 0;

        $('.point').each(function( i, obj ) {
           if ('punto'+selectedCamera+'_' + (vname-1) == obj.getAttributeNS(null, 'nombre')) { //Cogemos el punto anterior
               x1 = obj.getAttributeNS(null, 'cX');
               y1 = obj.getAttributeNS(null, 'cY');
           }
        });

        var x2 = this.svgObject.getAttributeNS(null, 'cX');
        var y2 = this.svgObject.getAttributeNS(null, 'cY');

        drawLine(x1, y1, x2, y2, vname); // Posicion del elemento anterior - Nuestra Posicion - Nombre
    }

}

///Borrar la imagen 2D del canvas
function removePoint(n) {
    $('.point').each(function (i, obj) {
        if ('punto'+selectedCamera+'_' + n == obj.getAttributeNS(null, 'nombre'))
            document.getElementById('point_level').removeChild(obj);
    });
}

// NOMBRE DE LA LINEA:
//  lX_Y: donde X es la camara y donde Y es el numero del punto de control final que corresponde a la linea
function drawLine (x1, y1, x2, y2, vname){
    var line = document.createElementNS('http://www.w3.org/2000/svg','line');

    line.setAttributeNS(null, 'name', 'linea'+selectedCamera+'_'+vname);
    line.setAttributeNS(null, 'class', 'line'); // Para localizarla luego por su clase

    line.setAttributeNS(null, 'stroke', 'red'); // Color
    line.setAttributeNS(null, 'stroke-dasharray', '5,5'); // Para que salga punteada
    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);

    document.getElementById('line_level').appendChild(line);
}

function removeLine(n) {
    $('.line').each(function( i, obj ) {
        if ('linea'+selectedCamera+'_'+n == obj.getAttributeNS(null, 'name')) {
            document.getElementById('line_level').removeChild(obj);
        }
    });
}
