
// Atributos para controlar DRAG and DROP
var TrueCoords = null;
var GrabPoint = null;
var BackDrop = null;
var Sala = null;
var DragTarget = null;
var targetElement= null;
var elementoAnterior= null;
var elementoSeleccionado= null;
// Granularidad del zoom
var currentZoomFactor = 1;
var zoomRate = 1.1;
// El flag diferencia el click del drag
var clickFlag=null;
// EL menú de los elementos
//var menu=null;

var NewCoord = {
    x: 0,
    y: 0
};

var lMousePos = {
    x: 0,
    y: 0
};

// Inicialización de atributos necesarios para DRAG and DROP (onLoad)
function Init(evt)
{
    TrueCoords = lienzo.createSVGPoint();
    GrabPoint = lienzo.createSVGPoint();
    BackDrop = lienzo;
    menu= new Menu();
};

function ObjetoValido(){
    return (DragTarget.getAttributeNS(null,'nombre') != "rotate" && DragTarget.getAttributeNS(null,'nombre') != "delete"); 
};

function ObjetoEscultura(){
    //return (ObjetoValido() && DragTarget.getAttributeNS(null,'nombre') != "FirstCamera" && DragTarget.getAttributeNS(null,'class') != "LimitPoint");
    return (DragTarget.getAttributeNS(null,'class') == 'sculpture');
}

// Función encargada de analizar el objeto debajo del ratón, en el caso de ser un objeto válido (onMouseDown)
// se obtienen las coordenadas en el svg del ratón.
function Grab(evt)
{
    // find out which element we moused down on
    targetElement = evt.target;

    // you cannot drag the background itself, so ignore any attempts to mouse down on it
    if ( BackDrop != targetElement && targetElement.id != 'sala' ){
        //set the item moused down on as the element to be dragged
        DragTarget = targetElement;

        var transMatrix = DragTarget.getCTM();

        GrabPoint.x = TrueCoords.x - Number(transMatrix.e);
        GrabPoint.y = TrueCoords.y - Number(transMatrix.f);

        clickFlag= 0;
    }
    else{
        clickFlag= 2;
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
        if(ObjetoValido()){
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
            DragTarget.setAttributeNS(null, 'transform', 'rotate(' + rot + ', 0, 0) translate(' + NewCoord.x +', '+ NewCoord.y + ')');

            menu.translateMenu(NewCoord.x, NewCoord.y, rot);


            var vancho = DragTarget.getAttributeNS(null, 'width')/2;
            var valto = DragTarget.getAttributeNS(null, 'height')/2;
            var vclase = DragTarget.getAttributeNS(null, 'class');
            var vnombre = DragTarget.getAttributeNS(null, 'nombre');

            // ALBA - Actualizar la ficha de información
                updateFileCoords(vclase, vnombre, NewCoord.x+vancho, NewCoord.y+valto);

            // ALBA - Trasladar la línea si corresponde
                if (vclase == 'camera') translateCameraLine(NewCoord.x, NewCoord.y, vancho, valto);
                else if (vclase == 'point') translatePointLine(vnombre, NewCoord.x, NewCoord.y, vancho, valto);
                else if (vclase == 'LimitPoint') translateLimitLine();

            clickFlag= 1;
        }
        else if(DragTarget.getAttributeNS(null,'nombre') == "rotate"){
            var rot= parseInt(elementoAnterior.getAttributeNS(null,'rotation'));
            if(evt.clientX > lMousePos.x)
                rot -= 5;
            else if(evt.clientX < lMousePos.x)
                rot += 5;
            else if(evt.clientY > lMousePos.y)
                rot -= 5;
            else
                rot += 5;

            if(rot<0)
                rot +=360;
            else
                rot %=360;

            lMousePos.x= evt.clientX;
            lMousePos.y= evt.clientY;

            elementoAnterior.setAttributeNS(null,'rotation',rot);

            var posX= parseFloat(elementoAnterior.getAttributeNS(null,'cX'));
            var posY= parseFloat(elementoAnterior.getAttributeNS(null,'cY'));
            NewCoord.x= parseFloat(elementoAnterior.getAttributeNS(null,'coordX'));
            NewCoord.y= parseFloat(elementoAnterior.getAttributeNS(null,'coordY'));
            
            elementoAnterior.setAttributeNS(null, 'transform', 'rotate(' + rot + ', ' + posX +', ' + posY + ') translate(' + NewCoord.x +', '+ NewCoord.y + ')');
        }
    }
};

// Función que se activa al soltar el ratón, dependiendo de si se realiza desplazamiento
// se activará una u otra funcionalidad.
function Drop(evt)
{
    if(clickFlag==1){
        if(DragTarget){
            // Si hay desplazamiento entonces calculamos la nueva posición del elemento
            var posW= parseFloat(DragTarget.getAttributeNS(null,'width'))/2;
            var posH= parseFloat(DragTarget.getAttributeNS(null,'height'))/2;
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
    else if(clickFlag==0){
        if(DragTarget){
            if(elementoAnterior==null)
                elementoAnterior= DragTarget;

            if(DragTarget.getAttributeNS(null,'nombre') == "delete"){
                menu.removeMenu();
                removeSculpture();
                elementoSeleccionado= null;
                //Eliminar estatua
                removeElement(elementoAnterior.getAttributeNS(null,'class'), elementoAnterior.getAttributeNS(null,'nombre'));
                hideFormSculpture();
            }
            else if(DragTarget.getAttributeNS(null,'nombre') == "rotate"){
                var rot = parseInt(elementoAnterior.getAttributeNS(null, 'rotation'));
                rot += 10;
                rot %= 360;
                elementoAnterior.setAttributeNS(null, 'rotation', rot);

                var posX = parseFloat(elementoAnterior.getAttributeNS(null, 'cX'));
                var posY = parseFloat(elementoAnterior.getAttributeNS(null, 'cY'));
                NewCoord.x = parseFloat(elementoAnterior.getAttributeNS(null, 'coordX'));
                NewCoord.y = parseFloat(elementoAnterior.getAttributeNS(null, 'coordY'));

                elementoAnterior.setAttributeNS(null, 'transform', 'rotate(' + rot + ', ' + posX + ', ' + posY + ') translate(' + NewCoord.x + ', ' + NewCoord.y + ')');
            }
            else if(DragTarget.getAttributeNS(null,'nombre') != elementoAnterior.getAttributeNS(null,'nombre') && ObjetoValido()){
                menu.removeMenu();
                menu.loadMenu(DragTarget);
                elementoSeleccionado= DragTarget;

                
                var clase = DragTarget.getAttributeNS(null, 'class');
                if(clase == "sculpture" || clase == "picture"){
                    showInfoForm(clase, DragTarget.getAttributeNS(null, 'nombreBD'), DragTarget.getAttributeNS(null, 'pathEscenario'));
                    if(clase == "sculpture"){
                        changeSculture(DragTarget.getAttributeNS(null,'pathOBJ'));
                    }
                }
            }
            else{
                if(ObjetoValido()){
                    menu.loadMenu(DragTarget);
                    elementoSeleccionado= DragTarget;

                    var clase = DragTarget.getAttributeNS(null, 'class');
                    if(clase == "sculpture" || clase == "picture"){
                        showInfoForm(clase, DragTarget.getAttributeNS(null, 'nombreBD'), DragTarget.getAttributeNS(null, 'pathEscenario'));
                        if(clase == "sculpture"){
                            changeSculture(DragTarget.getAttributeNS(null,'pathOBJ'));
                        }
                    }
                }
            }
        }
    }
    //Si clickeamos algo que no es un objeto válido desaparece el menú y el modelo 3d del formulario.
    else if(clickFlag==2){
        menu.removeMenu();
        removeSculpture();
        //Oculto el formInfo
        hideFormSculpture();
        //Oculto el x3dom
        elementoSeleccionado= null;
        typeNodeLoad = null;
    }

    if(DragTarget != null && DragTarget.getAttributeNS(null,'nombre') != "rotate"){
        elementoAnterior= DragTarget;
    }

    DragTarget = null;
    clickFlag= null;
};


function GetTrueCoords(evt)
{
	var newScale = lienzo.currentScale;
	var translation = lienzo.currentTranslate;
	TrueCoords.x = (evt.clientX - translation.x)/newScale;
	TrueCoords.y = (evt.clientY - translation.y)/newScale;
};

function translateCameraLine(cX, cY, wd, ht){
    $(".line").each(function( i, obj ) {
        if ('linea'+selectedCamera+'_'+'1' == obj.getAttributeNS(null, 'name')) { //Se toma la linea
            obj.setAttributeNS(null, 'x1', parseInt(cX) + parseInt(wd));
            obj.setAttributeNS(null, 'y1', parseInt(cY) + parseInt(ht));
        }
    });
}

function translatePointLine(nombre, cX, cY, wd, ht){
    var numero = nombre.substr(7); // Tomamos el numero de punto

    $(".line").each(function( i, obj ) {
        if ('linea'+selectedCamera+'_'+numero == obj.getAttributeNS(null, 'name')) { //Se toma la linea anterior
            obj.setAttributeNS(null, 'x2',  parseInt(cX) + parseInt(wd));
            obj.setAttributeNS(null, 'y2', parseInt(cY) + parseInt(ht));
        }

        var aux = parseInt(numero)+1;
        if ('linea'+selectedCamera+'_'+aux == obj.getAttributeNS(null, 'name')) { //Se toma la linea siguiente (si existe)
            obj.setAttributeNS(null, 'x1',  parseInt(cX) + parseInt(wd));
            obj.setAttributeNS(null, 'y1', parseInt(cY) + parseInt(ht));
        }
    });
}

// -------------------------------- ZOOM ------------------------------------
/*function Zoom(evt){
    if (evt.wheelDelta > 0)
        changeZoom('zoomIn');
      else
        changeZoom('zoomOut');   
      // When the mouse is over the webpage, don't let the mouse wheel scroll the entire webpage: 
      evt.cancelBubble = true;  
      return false;
}
    
function changeZoom(zoomType){
  if (zoomType == 'zoomIn')
    currentZoomFactor *= zoomRate;
  else if (zoomType == 'zoomOut')
    currentZoomFactor /= zoomRate;      
  else
    alert("function zoom(zoomType) given invalid zoomType parameter.");

  document.getElementById('room_level').setAttributeNS(null, 'transform', 'scale( ' + currentZoomFactor +' )');

  //alert(currentZoomFactor);

  //var newText = document.createTextNode("Current zoom factor = " + currentZoomFactor.toFixed(3));   // Create a generic new text node object.
  //var parentNode = document.getElementById('currentZoomFactorText');                                // Get the parent node of the text node we want to replace.
  
  //parentNode.replaceChild(newText, parentNode.firstChild);  // Replace the first child text node with the new text object.
}
    */
