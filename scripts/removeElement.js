function removeElement(vclass, vname){
    if (vclass == 'sculpture') {
        removeModel();
        document.getElementById(vclass + '_level').removeChild(document.getElementById(vname)); //Borrar la imagen 2D
    }
    if (vclass == 'camera') {
        //Eliminar el control de la camara
        removeCamera(vname.substr(vname.length - 1));

        //Borrar la imagen 2D de la camara
        $(".camera").each(function (i, obj) {
            if (vname == obj.getAttributeNS(null, 'nombre'))
                document.getElementById(vclass + '_level').removeChild(obj);
        });

        //Eliminar todos los puntos y las lineas
        var iteraciones = activePoints;
        for (j = 0; j < iteraciones; j++){
            removePointLine();
        }
        deactivateControl();
    }
}