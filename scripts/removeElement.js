function removeElement(vclass, vname){
    if (vclass == 'sculpture') {
        removeModel();
        document.getElementById(vclass + '_level').removeChild(document.getElementById(vname)); //Borrar la imagen 2D
    }
    if (vclass == 'camera') {
        //Eliminar todos los puntos y las lineas
        var iteraciones = activePoints[(vname.substr(vname.length - 1))-1];
        for (j = 0; j < iteraciones; j++){
            removePointLine();
        }

        //Eliminar el control de la camara
        removeCamera(vname.substr(vname.length - 1));

        //Borrar la imagen 2D de la camara
        var activar = false;
        $(".camera").each(function (i, obj) {
            if (activar) { //Actualizar los indices de las demas
                obj.setAttributeNS(null, 'nombre', 'camara'+i);
                //actualizar nombre de lineas y de puntos
            }
            if (vname == obj.getAttributeNS(null, 'nombre') && !activar) {
                document.getElementById(vclass + '_level').removeChild(obj);
                activar = true;
            }
        });
    }
}