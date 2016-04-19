/* Punto:
   - Nombre: nombre del punto
   - Path: ruta del archivo de imagen.
   - PosX y PosY: par de posiciones donde aparece el punto inicialmente.
 */
function Limit( vname, vpath, vposX, vposY ){
    var sideLength = 50;

    //Atributos
    this.name = 'puntoLimite'+'_'+vname;
    this.path = vpath;
    this.posX = vposX;
    this.posY = vposY;
    this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image'); //Representacion grafica mediante una imagen

    //Atributos de la representacion grafica
    this.svgObject.setAttributeNS(null, 'nombre', this.name);
    this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.path);
    this.svgObject.setAttributeNS(null, 'class', 'LimitPoint'); // Para localizarla luego por su clase
    // Esquina del objeto
    this.svgObject.setAttributeNS(null,'coordX',this.posX);
    this.svgObject.setAttributeNS(null,'coordY',this.posY);
    // Centro del objeto
    this.svgObject.setAttributeNS(null,'cX', (this.posX + (sideLength/2)));
    this.svgObject.setAttributeNS(null,'cY',(this.posY + (sideLength/2)));

    this.svgObject.setAttributeNS(null,'x', (this.posX));
    this.svgObject.setAttributeNS(null,'y',(this.posY));
    this.svgObject.setAttributeNS(null,'rotation', 0);

    // Para que se visualice
    this.svgObject.setAttributeNS(null,'height', sideLength);
    this.svgObject.setAttributeNS(null,'width', sideLength);

    document.getElementById('limit_level').appendChild(this.svgObject);


    var x1 = (this.posX + (sideLength/2));
    var y1 = (this.posY + (sideLength/2));
    var x2, y2, x3, y3;

    if(vname == "superior"){
        x2 = 500;
        y2 = this.svgObject.getAttributeNS(null, 'cY');
        x3 = (this.posX + (sideLength/2));
        y3 = 500;
    }
    else{
        x2 = 0;
        y2 = this.svgObject.getAttributeNS(null, 'cY');
        x3 = (this.posX + (sideLength/2));
        y3 = 0;
    }

    drawLimitLine(x1, y1, x2, y2, this.name+'X');
    drawLimitLine(x1, y1, x3, y3, this.name+'Y');
}

function drawLimitLine (x1, y1, x2, y2, vname){
    var line = document.createElementNS('http://www.w3.org/2000/svg','line');

    line.setAttributeNS(null, 'name', 'linea'+'_'+vname);
    line.setAttributeNS(null, 'class', 'limitline'); // Para localizarla luego por su clase

    line.setAttributeNS(null, 'stroke', 'orange'); // Color
    line.setAttributeNS(null, 'stroke-dasharray', '5,5'); // Para que salga punteada
    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);

    document.getElementById('limit_level').appendChild(line);
}

//Recolocar líneas
function translateLimitLine(){
    var nombre = DragTarget.getAttributeNS(null, 'nombre'); // Nombre del punto a mover
    var ancho = DragTarget.getAttributeNS(null, 'width')/2;
    var alto = DragTarget.getAttributeNS(null, 'height')/2;

    var x = NewCoord.x+ancho;
    var y = NewCoord.y+alto;

    $(".limitline").each(function( i, obj ) {
        if ('linea_' + nombre + 'X' == obj.getAttributeNS(null, 'name')) {
            obj.setAttributeNS(null, 'x1', x);
            obj.setAttributeNS(null, 'y1', y);
            obj.setAttributeNS(null, 'y2', y);
        }
        else if ('linea_' + nombre + 'Y' == obj.getAttributeNS(null, 'name')) {
            obj.setAttributeNS(null, 'x1', x);
            obj.setAttributeNS(null, 'y1', y);
            obj.setAttributeNS(null, 'x2', x);
        }
        else{ // Las lineas correspondientes al otro punto
            /*var nombre_aux = obj.getAttributeNS(null, 'name');
            var tipo = nombre_aux.substr(nombre_aux.length - 1); // Si es X o si es Y

            if (tipo == 'X') obj.setAttributeNS(null, 'x2', x);
            else if (tipo == 'Y') obj.setAttributeNS(null, 'y2', y);*/
        }

    });
}
