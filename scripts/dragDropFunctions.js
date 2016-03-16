
// Atributos para controlar DRAG and DROP
var TrueCoords = null;
var GrabPoint = null;
var BackDrop = null;
var Sala = null;
var DragTarget = null;
var targetElement= null;
var isClick= false;
// El flag diferencia el click del drag
var flag=null;

var NewCoord = {
    x: 0,
    y: 0
};

// Inicialización de atributos necesarios para DRAG and DROP (onLoad)
function Init(evt)
{
    TrueCoords = lienzo.createSVGPoint();
    GrabPoint = lienzo.createSVGPoint();
    BackDrop = lienzo;
};

// Función encargada de analizar el objeto debajo del ratón, en el caso de ser un objeto válido (onMouseDown)
// se obtienen las coordenadas en el svg del ratón.
function Grab(evt)
{
    // find out which element we moused down on
    targetElement = evt.target;

    // you cannot drag the background itself, so ignore any attempts to mouse down on it
    if ( BackDrop != targetElement && targetElement.id != 'sala'){
        //set the item moused down on as the element to be dragged
        DragTarget = targetElement;

        var transMatrix = DragTarget.getCTM();

        GrabPoint.x = TrueCoords.x - Number(transMatrix.e);
        GrabPoint.y = TrueCoords.y - Number(transMatrix.f);

        changeSculture(targetElement.getAttributeNS(null,'nombre'));
        flag= 0;
    }
};

// Función encargada de mover el objeto corrigiendo la rotación del objeto y obteniendo (OnMouseMove)
// las nuevas coordenadas del objeto.
function Drag(evt)
{
    GetTrueCoords(evt);

    // if we don't currently have an element in tow, don't do anything
    if (DragTarget)
    {

        var rot= parseInt(DragTarget.getAttributeNS(null,'rotation'));
        var posX= parseFloat(DragTarget.getAttributeNS(null,'cX'));
        var posY= parseFloat(DragTarget.getAttributeNS(null,'cY'));

        NewCoord.x = TrueCoords.x - GrabPoint.x;
        NewCoord.y = TrueCoords.y - GrabPoint.y;

        //Correción del cambio de origen de coordenadas local de DragTarget

       if(rot>0){
            var rad= (rot*Math.PI)/180;
            var rotX= NewCoord.x*Math.cos(rad) + NewCoord.y*Math.sin(rad);
            var rotY= (-1*NewCoord.x*Math.sin(rad)) + NewCoord.y*Math.cos(rad);

            NewCoord.x= rotX;
            NewCoord.y= rotY;
        }
                                                                        // 0 0 posX posY
        DragTarget.setAttributeNS(null, 'transform', 'rotate(' + rot + ', ' + 0 +', ' + 0 + ') '
             + 'translate(' + NewCoord.x +', '+ NewCoord.y + ')');

        flag= 1;
    }
};

// Función que se activa al soltar el ratón, dependiendo de si se realiza desplazamiento
// se activará una u otra funcionalidad.
function Drop(evt)
{
    if(flag==1){
        // Si hay desplazamiento entonces calculamos la nueva posición del elemento
        if (DragTarget){
            var posW=  parseFloat(DragTarget.getAttributeNS(null,'width'))/2;
            var posH=  parseFloat(DragTarget.getAttributeNS(null,'height'))/2;
            var rot= parseInt(DragTarget.getAttributeNS(null,'rotation'));
            var cx= NewCoord.x;
            var cy= NewCoord.y;

            if(rot>0){
                var vx= NewCoord.x + posW;
                var vy= NewCoord.y + posH;

                var rad= (rot*Math.PI)/180;
                var rotX= vx*Math.cos(rad) - vy*Math.sin(rad);
                var rotY= (vx*Math.sin(rad)) + vy*Math.cos(rad);

                cx= rotX;
                cy= rotY;

                NewCoord.x= cx - posW;
                NewCoord.y= cy - posH;  
            }
            else{
                cx= NewCoord.x + posW;
                cy= NewCoord.y + posH;
            }

            DragTarget.setAttributeNS(null, 'coordX', NewCoord.x);
            DragTarget.setAttributeNS(null, 'coordY', NewCoord.y);
            DragTarget.setAttributeNS(null, 'cX', cx);
            DragTarget.setAttributeNS(null, 'cY', cy);
        }
    }
    else if(flag==0){
        var rot= parseInt(DragTarget.getAttributeNS(null,'rotation'));
        rot += 90;
        rot %=360;
        DragTarget.setAttributeNS(null,'rotation',rot);

        var posX= parseFloat(DragTarget.getAttributeNS(null,'cX'));
        var posY= parseFloat(DragTarget.getAttributeNS(null,'cY'));
        NewCoord.x= parseFloat(DragTarget.getAttributeNS(null,'coordX'));
        NewCoord.y= parseFloat(DragTarget.getAttributeNS(null,'coordY'));
        
        DragTarget.setAttributeNS(null, 'transform', 'rotate(' + rot + ', ' + posX +', ' + posY + ')' 
            + 'translate(' + NewCoord.x +', '+ NewCoord.y + ')'); 
        
    }
    DragTarget = null;
    flag= null;
};


function GetTrueCoords(evt)
{
	var newScale = lienzo.currentScale;
	var translation = lienzo.currentTranslate;
	TrueCoords.x = (evt.clientX - translation.x)/newScale;
	TrueCoords.y = (evt.clientY - translation.y)/newScale;
};