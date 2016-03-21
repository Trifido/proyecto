//Funcion encargada de eliminar la instancia en DOM y el modelo 3D

function RemoveElement(){
	removeModel();

	var nombre= targetElement.getAttributeNS(null,'nombre');
	var objDin, find=false;
	var nelements=document.getElementById("lienzo").childNodes.length;

    for(var i=2; i<nelements && !find; i++){
        objDin= obtenerDatos(document.getElementById('lienzo').childNodes[i]);

        if(objDin.nombre == nombre){
        	find= true;
        	document.getElementById('lienzo').removeChild(document.getElementById('lienzo').childNodes[i]);
        }
    }
}

function RemoveIcon(name){
    removeModel();
    document.getElementById('lienzo').removeChild(document.getElementById('lienzo').getElementById(name));
}