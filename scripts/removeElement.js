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