//Funcion encargada de eliminar la instancia en DOM y el modelo 3D

/*function RemoveElement(){
	removeModel();

	var nombre= targetElement.getAttributeNS(null,'nombre');
	var objDin, find=false;
	var nelements=document.getElementById("sculpture_level").childNodes.length;

    for(var i=2; i<nelements && !find; i++){
        objDin= obtenerDatos(document.getElementById('sculpture_level').childNodes[i]);

        if(objDin.nombre == nombre){
        	find= true;
        	document.getElementById('sculpture_level').removeChild(document.getElementById('sculpture_level').childNodes[i]);
        }
    }
}*/

function removeElement(vclass, vname){
    if (vclass == 'sculpture') {
        removeModel();
        document.getElementById(vclass + '_level').removeChild(document.getElementById(vname)); //Borrar la imagen 2D
    }
    if (vclass == 'camera') {
            removeCamera(vname.substr(vname.length - 1)); //DEBERIA DE SER DINAMICO

            //Borrar la imagen 2D
            $(".camera").each(function (i, obj) {
                if (vname == obj.getAttributeNS(null, 'nombre'))
                    document.getElementById(vclass + '_level').removeChild(obj);
            });
    }
}