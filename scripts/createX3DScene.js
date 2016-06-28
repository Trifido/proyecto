function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'archivo.dat';
        var clicEvent = new MouseEvent('click', {
            'view': window,
                'bubbles': true,
                'cancelable': true
        });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
};

//Función de ayuda: reúne los datos a exportar en un solo objeto
function obtenerDatos(objetoDinamico) {
    var radianes= ((360 - parseFloat(objetoDinamico.getAttributeNS(null, 'rotation')))*Math.PI)/180.0;

    return {
        nombre: objetoDinamico.getAttributeNS(null, 'nombre'),
        nombreBD: objetoDinamico.getAttributeNS(null, 'nombreBD'),
        id: objetoDinamico.getAttributeNS(null, 'id'),
        location: objetoDinamico.getAttributeNS('http://www.w3.org/1999/xlink', 'href'),
        xcanvas: objetoDinamico.getAttributeNS(null, 'x'),
        ycanvas: objetoDinamico.getAttributeNS(null, 'y'),
        x: objetoDinamico.getAttributeNS(null, 'cX'),
        y: 0.0,
        z: objetoDinamico.getAttributeNS(null, 'cY'),
        coordx: objetoDinamico.getAttributeNS(null, 'coordX'),
        coordy: objetoDinamico.getAttributeNS(null, 'coordY'),
        cx: objetoDinamico.getAttributeNS(null, 'cX'),
        cy: objetoDinamico.getAttributeNS(null, 'cY'),
        rotation: radianes,
        rotationcanvas: parseFloat(objetoDinamico.getAttributeNS(null, 'rotation')),
        ancho: objetoDinamico.getAttributeNS(null, 'width'),
        alto: objetoDinamico.getAttributeNS(null, 'height'),
        clase: objetoDinamico.getAttributeNS(null, 'class'),
        pedestalAncho: objetoDinamico.getAttributeNS(null, 'pedestalAncho'),
        pedestalAlto: objetoDinamico.getAttributeNS(null, 'pedestalAlto'),
        pathX3D: objetoDinamico.getAttributeNS(null, 'pathX3D'),
        pathOBJ: objetoDinamico.getAttributeNS(null, 'pathOBJ')
    };
};

//Función de ayuda: reúne los datos a exportar en un solo objeto
function obtenerDatosCuadro(objetoDinamico) {
    var radianes;

    var auxRot= parseFloat(objetoDinamico.getAttributeNS(null, 'rotation'));
    if(auxRot>45 && auxRot<135)
        radianes= ((360 - 90)*Math.PI)/180.0;
    else if(auxRot>135 && auxRot<225)
        radianes= ((360 - 180)*Math.PI)/180.0;
    else if(auxRot>255 && auxRot<315)
        radianes= ((360 - 270)*Math.PI)/180.0;
    else
        radianes= (360*Math.PI)/180.0;

    return {
        id: objetoDinamico.getAttributeNS(null, 'id'),
        nombre: objetoDinamico.getAttributeNS(null, 'nombre'),
        nombreBD: objetoDinamico.getAttributeNS(null, 'nombreBD'),
        height: objetoDinamico.getAttributeNS(null, 'height'),
        width: objetoDinamico.getAttributeNS(null, 'width'),
        location: objetoDinamico.getAttributeNS('http://www.w3.org/1999/xlink', 'href'),
        xcanvas: objetoDinamico.getAttributeNS(null, 'x'),
        ycanvas: objetoDinamico.getAttributeNS(null, 'y'),
        x: objetoDinamico.getAttributeNS(null, 'cX'),
        y: 1.0,
        z: objetoDinamico.getAttributeNS(null, 'cY'),
        rotCuadro: parseFloat(objetoDinamico.getAttributeNS(null, 'rotation')),
        rotation: radianes,
        largo: parseFloat(objetoDinamico.getAttributeNS(null, 'longitudReal'))/10,
        alto: parseFloat(objetoDinamico.getAttributeNS(null, 'alturaReal'))/10,
        textura: objetoDinamico.getAttributeNS(null, 'pathEscenario'),
        clase: objetoDinamico.getAttributeNS(null, 'class')
    };
};

function obtenerVRCamera() {
    var objetoDinamico= document.getElementById('VRcamera_level').childNodes[0];
    var radianes= ((360 - parseFloat(objetoDinamico.getAttributeNS(null, 'rotation')))*Math.PI)/180.0;

    return {
        id: objetoDinamico.getAttributeNS(null, 'id'),
        nombre: objetoDinamico.getAttributeNS(null, 'nombre'),
        x: (objetoDinamico.getAttributeNS(null, 'cX')),
        y: 0.15,
        z: (objetoDinamico.getAttributeNS(null, 'cY')),
        xcanvas: (objetoDinamico.getAttributeNS(null, 'x')),
        ycanvas: (objetoDinamico.getAttributeNS(null, 'y')),
        coordx: (objetoDinamico.getAttributeNS(null, 'coordX')),
        coordy: (objetoDinamico.getAttributeNS(null, 'coordY')),
        cx: (objetoDinamico.getAttributeNS(null, 'cX')),
        cy: (objetoDinamico.getAttributeNS(null, 'cY')),
        rotation: radianes,
        rotationcanvas: parseFloat(objetoDinamico.getAttributeNS(null, 'rotation')),
        altura: objetoDinamico.getAttributeNS(null, 'altura'),
        zancada: objetoDinamico.getAttributeNS(null, 'zancada'),
        salto: objetoDinamico.getAttributeNS(null, 'salto')
    };
};

//Función de ayuda: reúne los datos a exportar en un solo objeto
function obtenerEscenario(objetoDinamico) {
    return {
        id: objetoDinamico.getAttributeNS(null, 'id'),
        nombre: objetoDinamico.getAttributeNS(null, 'nombre'),
        location: objetoDinamico.getAttributeNS('http://www.w3.org/1999/xlink', 'href'),
        x: objetoDinamico.getAttributeNS(null, 'x'),
        y: 0.0,
        z: objetoDinamico.getAttributeNS(null, 'y'),
        pathX3DSin: objetoDinamico.getAttributeNS(null, 'pathX3DSIN'),
        pathX3D: objetoDinamico.getAttributeNS(null, 'pathX3D'),
        pathOBJ: objetoDinamico.getAttributeNS(null, 'pathOBJ'),
        pixAncho: objetoDinamico.getAttributeNS(null, 'pixAncho'),
        pixAlto: objetoDinamico.getAttributeNS(null, 'pixAlto'),
        ancho: objetoDinamico.getAttributeNS(null, 'ancho'),
        alto: objetoDinamico.getAttributeNS(null, 'alto')
    };
};

function obtenerLimites(objetoDinamico1, objetoDinamico2){
    return {
        xsup: objetoDinamico1.getAttributeNS(null, 'coordX'),
        ysup: objetoDinamico1.getAttributeNS(null, 'coordY'),
        xinf: objetoDinamico2.getAttributeNS(null, 'coordX'),
        yinf: objetoDinamico2.getAttributeNS(null, 'coordY')
    };
};

//Genera un objeto Blob con los datos en un archivo XML
function mostrar(){
    var nelements=document.getElementById('sculpture_level').childNodes.length;
    //alert(nelements);
};

/*
function generarX3D() {
    var texto = [];
    texto.push('<X3D id="the_scene">\n');
    texto.push('\t<Scene>\n\n');

    texto.push('\t\t<NavigationInfo headlight=\'false\'></NavigationInfo>\n');
    texto.push('\t\t<Viewpoint description="Faceted box, smooth shading" position="0 0 25"></Viewpoint>\n');
    texto.push('\t\t<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'0 0 0\' radius=\'5000000\' ></PointLight>\n');

    //Añadimos el escenario
    //childNodes[0] es un texto vacío!!
    var objDin= obtenerEscenario(document.getElementById('sculpture_level').childNodes[1]);

    texto.push('\t\t<Transform DEF="Position' + objDin.nombre +'" translation="0 0 0">\n');
    //CAMBIAR ESTA LINEA
    texto.push('\t\t\t<inline url="' + objDin.nombre + '.x3d"> </inline>\n');
    // -----------------
    texto.push('\t\t</Transform>\n\n');

    //Añadimos todos los objetos
    var nelements=document.getElementById("sculpture_level").childNodes.length;

    for(var i=2; i<nelements; i++){
    
        objDin= obtenerDatos(document.getElementById('sculpture_level').childNodes[i]);

        texto.push('\t\t<Transform DEF="Rotate' + objDin.nombre +'" roation="0 1 0 '+ objDin.rotation + '">\n');
        texto.push('\t\t\t<Transform DEF="Translate' + objDin.nombre +'" translation="'+ objDin.x + ' ' + objDin.y + ' ' + objDin.z + '">\n');
        //CAMBIAR ESTA LINEA
        texto.push('\t\t\t\t<inline url="' + objDin.nombre + '.x3d"> </inline>\n');
        // -----------------
        texto.push('\t\t\t</Transform>\n');
        texto.push('\t\t</Transform>\n\n');

    }

    texto.push('\t</Scene>\n');
    texto.push('</X3D>\n');

    return new Blob(texto, {
        type: 'application/x3d'
    });
};*/

function exportarScene( nombre, usuario ){
    //var textoX3D;//, destino;

   /* destino = "Otro";

    if( tipo == "web" ){
        destino = "Web";
        textoX3D = generarVRX3D();
    }
    else{
        destino = "App";
        textoX3D = generarGameCameraX3D();
    }
    */

/*
    destino = "Otro";

    if( tipo == "web" )
        destino = "Web";
        //textoX3D = generarVRX3D();
    else
        destino = "App";
        //textoX3D = generarGameCameraX3D();

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        }
    };

    xmlhttp.open("POST", "./php/crearX3D.php?nombEscena=" + nombre + ".x3d" + "&destino=" + destino, true);
    xmlhttp.send();
*/
}