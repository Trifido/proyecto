
function JsonCamera(){
	var objdin= obtenerVRCamera();
    interpolador.Interpolacion(parseInt(objdin.x),parseInt(objdin.z));

	var text = '\"camera\" :{';
	text += ' "x":' +  interpolador.getX() + ',';
	text += ' "y":' +  objdin.y + ',';
	text += ' "z":' +  interpolador.getZ() + ',';
	text += ' "rotation":' +  objdin.rotation + ',';
	text += ' "altura":' +  objdin.altura + ',';
	text += ' "zancada":' +  objdin.zancada + ',';
	text += ' "salto":' +  objdin.salto + '} ';

	return text;
}

function JsonSaveCamera(){
	var objdin= obtenerVRCamera();
   
	var text = '\"camera\" :{';
	text += ' "x":' +  objdin.xcanvas + ',';
	text += ' "y":' +  objdin.ycanvas + ',';
	text += ' "coordx":' +  objdin.coordx + ',';
	text += ' "coordy":' +  objdin.coordy + ',';
	text += ' "cx":' +  objdin.cx + ',';
	text += ' "cy":' +  objdin.cy + ',';
	text += ' "rotation":' +  objdin.rotationcanvas + ',';
	text += ' "altura":' +  objdin.altura + ',';
	text += ' "zancada":' +  objdin.zancada + ',';
	text += ' "salto":' +  objdin.salto + '} ';

	return text;
}

function JsonScene(){
	var objdin= obtenerEscenario(document.getElementById('room_level').childNodes[0]);

	var text = '\"sala\" :{';
	text += '"nombre" : \"' + objdin.nombre +'\", ';
	text += ' "x":' +  0 + ',';
	text += ' "y":' +  0 + ',';
	text += ' "z":' +  0 + ',';
	text += ' "pathX3DSin": \"' +  objdin.pathX3DSin + '\",';
	text += ' "pathX3D": \"' +  objdin.pathX3D + '\",';
	text += ' "pathOBJ": \"' +  objdin.pathOBJ + '\"} ';

	return text;
}

function JsonSaveRoom(){
	var objdin= obtenerEscenario(document.getElementById('room_level').childNodes[0]);

	var text = '\"sala\" :{';
	text += '"id" : \"' + objdin.id +'\", ';
	text += '"nombre" : \"' + objdin.nombre +'\", ';
	text += ' "location": \"' +  objdin.location + '\",';
	text += ' "pathX3DSin": \"' +  objdin.pathX3DSin + '\",';
	text += ' "pathX3D": \"' +  objdin.pathX3D + '\",';
	text += ' "pathOBJ": \"' +  objdin.pathOBJ + '\", ';
	text += ' "pixAncho": \"' +  objdin.pixAncho + '\", ';
	text += ' "pixAlto": \"' +  objdin.pixAlto + '\", ';
	text += ' "ancho": \"' +  objdin.ancho + '\", ';
	text += ' "alto": \"' +  objdin.alto + '\"} ';

	return text;
}

function JsonSaveLimits(){
	var objdin = obtenerLimites(document.getElementById('limit_level').childNodes[0], document.getElementById('limit_level').childNodes[4]);
	
	var text = '\"limits\" :{';
	text += '"xsup" : ' + objdin.xsup +', ';
	text += '"ysup" : ' + objdin.ysup +', ';
	text += '"xinf" : ' + objdin.xinf +', ';
	text += '"yinf" : ' + objdin.yinf +' }';

	return text;
}

function JsonSculpture(elemento){
	var objdin= obtenerDatos(elemento);
	interpolador.Interpolacion(parseInt(objdin.x),parseInt(objdin.z));

	var text = '{ "nombre" : \"' + objdin.nombre +'\", ';
	text += ' "x":' +  interpolador.getX() + ',';
	text += ' "y":' +  objdin.y + ',';
	text += ' "z":' +  interpolador.getZ() + ',';
	text += ' "rotation":' +  objdin.rotation + ',';
	text += ' "pedestalAncho":' +  (objdin.pedestalAncho/100) + ',';
	text += ' "pedestalAlto":' +  (objdin.pedestalAlto/100) + ',';
	text += ' "pathX3D": \"' +  objdin.pathX3D + '\",';
	text += ' "pathOBJ": \"' +  objdin.pathOBJ + '\"} ';

	return text;
}

function JsonSaveSculpture(elemento){
	var objdin= obtenerDatos(elemento);

	var text = '{ "nombre" : \"' + objdin.nombre +'\", ';
	text += ' "nombreBD": \"' +  objdin.nombreBD + '\",';
	text += ' "id": \"' +  objdin.id + '\",';
	text += ' "height":' +  objdin.alto + ',';
	text += ' "width":' +  objdin.ancho + ',';
	text += ' "location": \"' +  objdin.location + '\",';
	text += ' "x":' +  objdin.xcanvas + ',';
	text += ' "y":' +  objdin.ycanvas + ',';
	text += ' "coordx":' +  objdin.coordx + ',';
	text += ' "coordy":' +  objdin.coordy + ',';
	text += ' "cx":' +  objdin.cx + ',';
	text += ' "cy":' +  objdin.cy + ',';
	text += ' "rotation":' +  objdin.rotationcanvas + ',';
	text += ' "pedestalAncho":' +  objdin.pedestalAncho + ',';
	text += ' "pedestalAlto":' +  objdin.pedestalAlto + ',';
	text += ' "pathX3D": \"' +  objdin.pathX3D + '\",';
	text += ' "pathOBJ": \"' +  objdin.pathOBJ + '\"} ';

	return text;
}

function JsonPicture(elemento){
	var objdin= obtenerDatosCuadro(elemento);
	interpolador.InterpolacionCuadro(parseInt(objdin.x),parseInt(objdin.z));

	var coordPicture;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            coordPicture= xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", "./php/iniciarPuntoCuadro.php?posX=" + interpolador.getX() + "&posZ=" + interpolador.getZ() + "&rotCuadro=" +  objdin.rotCuadro, false);
    xmlhttp.send();

    var arrayCoords = coordPicture.split(' ');

	var text = '{ "nombre" : "' + objdin.nombre + '", ';
	text += ' "x":' +  arrayCoords[0] + ',';
	text += ' "y":' +  arrayCoords[1] + ',';
	text += ' "z":' +  arrayCoords[2] + ',';
	text += ' "rotation":' +  objdin.rotation + ',';
	text += ' "largo":' +  objdin.largo + ',';
	text += ' "alto":' +  objdin.alto + ',';
	text += ' "textura": "' +  objdin.textura + '"} ';

	return text;
}

function JsonSavePicture(elemento){
	var objdin= obtenerDatosCuadro(elemento);

	var text = '{ "nombre" : "' + objdin.nombre + '", ';
	text += ' "id": \"' +  objdin.id + '\",';
	text += ' "nombreBD": \"' +  objdin.nombreBD + '\",';
	text += ' "height":' +  objdin.height + ',';
	text += ' "width":' +  objdin.width + ',';
	text += ' "location": \"' +  objdin.location + '\",';
	text += ' "x":' +  objdin.xcanvas + ',';
	text += ' "y":' +  objdin.ycanvas + ',';
	text += ' "cx":' +  objdin.x + ',';
	text += ' "cy":' +  objdin.z + ',';
	text += ' "rotation":' +  objdin.rotCuadro + ',';
	text += ' "largo":' +  objdin.largo + ',';
	text += ' "alto":' +  objdin.alto + ',';
	text += ' "textura": "' +  objdin.textura + '"} ';

	return text;
}

function createJSONScene(){
	var text = '{ \"scene\" : {';

	//Primero obtenemos datos de la cámara
	text += JsonCamera();
	text += ', ';

	//Añadimoas la sala
	text += JsonScene();
	text += ', ';

	var nSculptures=document.getElementById("sculpture_level").childNodes.length;
	var elemento;
	//Añadimos las esculturas
	text += '\"esculturas\" : [';

	for(var i=0; i<nSculptures; i++){
        elemento= document.getElementById('sculpture_level').childNodes[i];
        if(elemento.id != 'delete' && elemento.id != 'rotate'){
        	if( i != 0 )
        		text += ', ';
            text += JsonSculpture(elemento);
        }
    }
    text += ' ], ';

    var nPictures = document.getElementById("picture_level").childNodes.length;

    text += '\"cuadros\" : [';
    for(var i=0; i<nPictures; i++){
        elemento= document.getElementById('picture_level').childNodes[i];
        if(elemento.id != 'delete' && elemento.id != 'rotate'){
            if( i!= 0 )
            	text += ', ';
            text += JsonPicture(elemento);
        }
    }
    text += ' ] ';
	text += '} }';

	return text;
}

function createJSONSaveScene(){
	var text = '{ \"scene\" : {';

	//Primero obtenemos datos de la cámara
	text += JsonSaveCamera();
	text += ', ';

	//Añadimoas la sala
	
	text += JsonSaveRoom();
	text += ', ';

	var nSculptures=document.getElementById("sculpture_level").childNodes.length;
	var elemento;
	//Añadimos las esculturas
	text += '\"esculturas\" : [';

	for(var i=0; i<nSculptures; i++){
        elemento= document.getElementById('sculpture_level').childNodes[i];
        if(elemento.id != 'delete' && elemento.id != 'rotate'){
        	if( i != 0 )
        		text += ', ';
            text += JsonSaveSculpture(elemento);
        }
    }
    text += ' ], ';

    var nPictures = document.getElementById("picture_level").childNodes.length;

    text += '\"cuadros\" : [';
    for(var i=0; i<nPictures; i++){
        elemento= document.getElementById('picture_level').childNodes[i];
        if(elemento.id != 'delete' && elemento.id != 'rotate'){
            if( i!= 0 )
            	text += ', ';
            text += JsonSavePicture(elemento);
        }
    }
    text += ' ] ';
	text += '} }';

	return text;
}