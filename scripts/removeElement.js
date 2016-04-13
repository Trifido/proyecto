function removeElement(vclass, vname){
    if (vclass == 'sculpture') {
        removeModel();
        document.getElementById('sculpture_level').removeChild(document.getElementById(vname)); //Borrar la imagen 2D
    }
    if (vclass == 'camera') {
        //Eliminar todos los puntos y las lineas
        var iteraciones = activePoints[(vname.substr(vname.length - 1))-1];
        for (j = 0; j < iteraciones; j++){
            removePointLine();
        }

        //Borrar la imagen 2D de la camara
        $(".camera").each(function (i, obj) {
            if (vname == obj.getAttributeNS(null, 'nombre')) {
                document.getElementById('camera_level').removeChild(obj);
            }
        });
        //Actualizar los nombres
        $(".camera").each(function (i, obj) {
            var number = obj.getAttributeNS(null, 'nombre'); // Numero de la camara
            number = number.substr( number.length - 1);

            if (number > vname.substr(vname.length - 1)) { // Si hay que cambiar su numero
                var aux = parseInt(number)-1;
                obj.setAttributeNS(null, 'nombre', 'camara'+aux);
            }
        });

        //Eliminar el control de la camara
        removeCamera(vname.substr(vname.length - 1))
    }
}