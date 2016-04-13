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
            var cNumber = obj.getAttributeNS(null, 'nombre'); // Numero de la camara
            cNumber = cNumber.substr( cNumber.length - 1);

            if (cNumber > vname.substr(vname.length - 1)) { // Actualizar el resto de las camaras
                var aux = parseInt(cNumber) - 1;

                obj.setAttributeNS(null, 'nombre', 'camara'+aux); // Camara

                $(".point").each(function (i, obj) { //Puntos
                    var pNumber = obj.getAttributeNS(null, 'nombre').substr(5, 1); // Indice de la camara a la que pertenece

                    if (pNumber == cNumber) { // Si pertenecen a la misma camara
                        var myNum = obj.getAttributeNS(null, 'nombre').substr(7, 1);
                        obj.setAttributeNS(null, 'nombre', 'punto' + aux + '_' + myNum); // Punto
                    }
                });

                $(".line").each(function (i, obj) { //Lineas
                    var lNumber = obj.getAttributeNS(null, 'name').substr(5, 1); // Indice de la camara a la que pertenece

                    if (lNumber == cNumber) { // Si pertenecen a la misma camara
                        var myNum = obj.getAttributeNS(null, 'name').substr(7, 1);
                        obj.setAttributeNS(null, 'name', 'linea' + aux + '_' + myNum); // Linea
                    }
                });
            }
        });

        //Eliminar el control de la camara
        removeCamera(vname.substr(vname.length - 1))
    }
}