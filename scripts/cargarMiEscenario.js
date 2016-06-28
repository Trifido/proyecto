
function cargarSala( objJson ){
	var nombre = objJson.scene.sala.nombre;
	var pathLocation = objJson.scene.sala.location;
	var pathX3dSin = objJson.scene.sala.pathX3DSin;
	var pathX3d = objJson.scene.sala.pathX3D;
	var pathObj = objJson.scene.sala.pathOBJ;
	var pixLargo = objJson.scene.sala.pixAlto;
	var pixAncho = objJson.scene.sala.pixAncho;
	var largo = objJson.scene.sala.alto;
	var ancho = objJson.scene.sala.ancho;

	svgroom = new Room(nombre, pathLocation, pixLargo, pixAncho, largo, ancho, largo, pathX3dSin, pathX3d, pathObj);
	puntolimitador= Limit("superior","./img/camera/limitIcon.png",0,0);
	puntolimitador2= Limit("inferior","./img/camera/limitIcon.png",450,450);
	interpolador= new InterpolarCoords( pixLargo, pixAncho, largo, ancho );
	RoomInit = true;
	sceneName = nombre;
}

function cargarCamera( objJson ){
	var posX = objJson.scene.camera.x;
	var posY = objJson.scene.camera.y;
	var coordX = objJson.scene.camera.coordx;
	var coordY = objJson.scene.camera.coordy;
	var cx = objJson.scene.camera.cx;
	var cy = objJson.scene.camera.cy;
	var width = objJson.scene.camera.width;
	var height = objJson.scene.camera.height;
	var rotation = objJson.scene.camera.rotation;
	var altura = objJson.scene.camera.altura;
	var zancada = objJson.scene.camera.zancada;
	var salto = objJson.scene.camera.salto;

	LoadFirstCameraCanvas( posX, posY, coordX, coordY, cx, cy, width, height, rotation, altura, zancada, salto );

	RoomInit = true;
}

function cargarEsculturas( objJson ){

	var i, sculp, size = objJson.scene.esculturas.length;

	for(i=0; i<size; i++){

		var nombre = objJson.scene.esculturas[i].nombre;
		var nombrebd = objJson.scene.esculturas[i].nombreBD;
		var pathLocation = objJson.scene.esculturas[i].location;
		var altura = objJson.scene.esculturas[i].height;
		var anchura = objJson.scene.esculturas[i].width;
		var pathX3d = objJson.scene.esculturas[i].pathX3D;
		var pathObj = objJson.scene.esculturas[i].pathOBJ;

		sculp = new Sculpture(nombre, nombrebd, pathLocation, altura, anchura, pathX3d, pathObj);

		var posX = objJson.scene.esculturas[i].x;
		var posY = objJson.scene.esculturas[i].y;
		var coordX = objJson.scene.esculturas[i].coordx;
		var coordY = objJson.scene.esculturas[i].coordy;
		var cx = objJson.scene.esculturas[i].cx;
		var cy = objJson.scene.esculturas[i].cy;
		var rotation = objJson.scene.esculturas[i].rotation;
		var pAncho = objJson.scene.esculturas[i].pedestalAncho;
		var pAlto = objJson.scene.esculturas[i].pedestalAlto;

		LoadSculptureCanvas( posX, posY, coordX, coordY, cx, cy, rotation, pAncho, pAlto );
	}

	ScultureLoad = objJson.scene.esculturas.pathOBJ;
	idSculpture = size;
}

function cargarCuadros( objJson ){

	var i, pict, size = objJson.scene.cuadros.length;

	for(i=0; i<size; i++){

		var nombre = objJson.scene.cuadros[i].nombre;
		var nombrebd = objJson.scene.cuadros[i].nombreBD;
		var pathLocation = objJson.scene.cuadros[i].location;
		var altura = objJson.scene.cuadros[i].height;
		var anchura = objJson.scene.cuadros[i].width;
		var largoReal = objJson.scene.cuadros[i].largo;
		var altoReal = objJson.scene.cuadros[i].alto;
		var pathEscena = objJson.scene.cuadros[i].textura;

		pict = new Picture(nombre, nombrebd, pathLocation, altura, anchura, altoReal, largoReal, pathEscena);

		var posX = objJson.scene.cuadros[i].x;
		var posY = objJson.scene.cuadros[i].y;
		var coordX = objJson.scene.cuadros[i].coordx;
		var coordY = objJson.scene.cuadros[i].coordy;
		var cx = objJson.scene.cuadros[i].cx;
		var cy = objJson.scene.cuadros[i].cy;
		var rotation = objJson.scene.cuadros[i].rotation;

		LoadPictureCanvas(posX, posY, coordX, coordY, cx, cy, rotation);
	}

	idPicture = size;
}

function guardarPathJSON( pathJson ){

	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        }
    };

    xmlhttp.open("GET", "../php/savePathJSON.php?pathJson=" + pathJson, false);
    xmlhttp.send();

    location.href = '../editor.php';
}

function cargarEscenarioCanvas(pathJson){
	var jsonScene;
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            jsonScene= xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", "./php/loadJSON.php?pathJson=" + pathJson, false);
    xmlhttp.send();

    var JSONEscenario = JSON.parse( jsonScene );

	//Cargar todo el canvas
    cargarSala(JSONEscenario);
    cargarCamera(JSONEscenario);
    cargarEsculturas(JSONEscenario);
    cargarCuadros(JSONEscenario);
}

