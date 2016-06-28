
function CargarEscenarioWeb( pathJson ){
	var texto = '';

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


	texto += "<x3d id=\'x3dElement\' showStat=\'false\' showLog=\'false\' style=\'width:100%; height:100%; border:0; margin:0; padding:0;\'>\n";
	texto += "	  <scene id=\'scene\'>\n";
	texto += "    	<Environment frustumCulling=\"false\"></Environment>\n";

	texto += "		<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'20 20 20\' radius=\'5000000\' ></PointLight>\n";

	texto += loadCameraWebVR(JSONEscenario);

	texto += "        <background DEF=\'bgnd\' backUrl=\'space.jpg\'></background>\n";
	
	texto += initX3DSceneWeb(JSONEscenario);

	texto += "    </scene>\n";
	texto += "</x3d>";


	var div = document.getElementById("FirstCameraVRIndex");   
    div.innerHTML = texto;
    x3dom.reload();
}

function loadCameraWebVR(JSONEscenario){
	texto= "";

	texto += "<navigationInfo  headlight=\"true\" avatarSize=\'" + 0.1 + " " + JSONEscenario.scene.camera.altura + " " + JSONEscenario.scene.camera.salto + "\' type=\'\"game\"\' speed=\"1\" transitiontime=\"1\" transitiontype=\"LINEAR\"></navigationInfo>\n";
	texto += "<transform translation=\'0 0 0\' rotation=\'0 1 0 0\'>\n"; 
	texto += "   <viewpoint id=\'vpp\' DEF=\'vp\' description=\'ViewPoint 1\' centerOfRotation=\'3.4625 1.73998 -5.55\' fieldOfView=\"1.5\"\n";
	texto += "   orientation=\'0 1 0" + JSONEscenario.scene.camera.rotation + "\' position=\'" + JSONEscenario.scene.camera.x + " " + JSONEscenario.scene.camera.y + " " + JSONEscenario.scene.camera.z + "\'\n";
	texto += "   zNear=\'0.001\' zFar=\'100\'></viewpoint> \n";
	texto += "</transform>\n";

	return texto;

	/*
		<navigationinfo type="&quot;walk&quot; &quot;any&quot;" id="navType" headlight="true" typeparams="-0.4,60,0.05,2.8" explorationmode="all" avatarsize="0.25,1.6,0.75" speed="1" transitiontime="1" transitiontype="LINEAR "></navigationinfo>

	*/
}

function initX3DSceneWeb(JSONEscenario){
	var texto="";

    //Añadimos el escenario    
    texto+='\t\t<Transform DEF="Position' + JSONEscenario.scene.sala.nombre +'" translation="0 0 0">\n';
    texto+='\t\t\t<inline url="' + JSONEscenario.scene.sala.pathX3D + '"> </inline>\n';
    texto+='\t\t</Transform>\n\n';

    var numSculptures = JSONEscenario.scene.esculturas.length;

    for(var i=0; i<numSculptures; i++){
    	if(JSONEscenario.scene.esculturas[i].pedestalAlto > 0){
                texto+='\t\t\t<Transform DEF="boxTrafo" translation=\''+ JSONEscenario.scene.esculturas[i].x + ' 0 ' + JSONEscenario.scene.esculturas[i].z +'\'>';
                texto+='\t\t\t\t<Shape DEF="boxShape">';
                texto+='\t\t\t\t\t<Appearance DEF="boxApp">'; 
                texto+='\t\t\t\t\t\t<Material diffuseColor="1 0 0" specularColor=".5 .5 .5" />';
                texto+='\t\t\t\t\t</Appearance>';
                texto+='\t\t\t\t\t<Box DEF=\"box\" size=\''+ JSONEscenario.scene.esculturas[i].pedestalAncho + JSONEscenario.scene.esculturas[i].pedestalAlto + JSONEscenario.scene.esculturas[i].pedestalAncho +'\' />';
                texto+='\t\t\t\t</Shape>';
                texto+='\t\t\t</Transform>\n';
    	}

    	texto+='\t\t\t<Transform DEF="Translate' + JSONEscenario.scene.esculturas[i].nombre +'" translation="' + JSONEscenario.scene.esculturas[i].x + ' ' + (JSONEscenario.scene.esculturas[i].pedestalAlto/2) +
             ' ' + JSONEscenario.scene.esculturas[i].z + '">\n';

        if(JSONEscenario.scene.esculturas[i].rotation > 0){
            texto+='\t\t<Transform DEF="Rotate' + JSONEscenario.scene.esculturas[i].nombre +'" rotation="0 1 0 '+ JSONEscenario.scene.esculturas[i].rotation + '">\n';
        }

        texto+='\t\t\t\t<inline url="' + JSONEscenario.scene.esculturas[i].pathX3D + '"> </inline>\n';

        if(JSONEscenario.scene.esculturas[i].rotation > 0)
            texto+='\t\t\t</Transform>\n';
        texto+='\t\t</Transform>\n\n';
    }

    var numPictures = JSONEscenario.scene.cuadros.length;

    for(var i=0; i<numPictures; i++){
    	texto+='\t\t\t<Transform DEF="Translate' + JSONEscenario.scene.cuadros[i].nombre +'" translation="' + JSONEscenario.scene.cuadros[i].x + ' ' + JSONEscenario.scene.cuadros[i].y + ' ' + JSONEscenario.scene.cuadros[i].z + '">\n';
    	texto+='\t\t\t<Transform DEF="Rotate' + JSONEscenario.scene.cuadros[i].nombre +'" rotation="0 1 0 '+ JSONEscenario.scene.cuadros[i].rotation + '">\n';
        texto+='\t\t\t\t<Shape DEF="boxShape">';
        texto+='\t\t\t\t\t<Appearance DEF="boxApp">'; 
        texto+='\t\t\t\t\t\t<ImageTexture  url="' + JSONEscenario.scene.cuadros[i].textura + '"><ImageTexture/>';
        texto+='\t\t\t\t\t</Appearance>';
        texto+='\t\t\t\t\t<Box DEF=\"box\" size=\'' + JSONEscenario.scene.cuadros[i].alto + ' ' + JSONEscenario.scene.cuadros[i].largo + '0.01\' />';
        texto+='\t\t\t\t</Shape>';
        texto+='\t\t\t</Transform>\n';
        texto+='\t\t</Transform>\n\n';
    }

    return texto;
}

function CargarEscenarioVR(pathJson){
	//location.href="./visorEscena.php?vrScene=" + pathJson;
	 window.open("./visorEscena.php?vrScene=" + pathJson, "nuevo", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no, width=400, height=400");
}

function CargarVRMode(pathJson){
	var texto = "";

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


	texto += "<x3d id=\'x3dElement\' showStat=\'false\' showLog=\'false\' style=\'width:100%; height:100%; border:0; margin:0; padding:0;\'>\n";
	texto += "<scene id=\'scene\'>\n";
	texto += "<Environment frustumCulling=\"false\"></Environment>\n";

	texto += "<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'20 20 20\' radius=\'5000000\' ></PointLight>\n";

	texto += loadCameraVR(JSONEscenario);

	texto += "        <background DEF=\'bgnd\' backUrl=\'space.jpg\'></background>\n";
	texto += "       <group id=\'root\' render=\'true\'>\n";
	texto += "            <group DEF=\'theScene\'>\n";
	
	texto += initX3DSceneWeb(JSONEscenario);

	texto += "            </group>\n";
	texto += "        </group>\n";
	texto += "        <group DEF=\'left\'>\n";
	texto += "            <shape>\n";
	texto += "                <appearance>\n";
	texto += "                    <renderedTexture interpupillaryDistance=\"0.03\" id=\"rtLeft\" stereoMode=\"LEFT_EYE\" update=\'ALWAYS\'\n";
	texto += "                                     dimensions=\'960 1080 4\' repeatS=\'false\' repeatT=\'false\'>\n";
	texto += "                        <viewpoint USE=\'vp\' containerField=\'viewpoint\'></viewpoint>\n";
	texto += "                        <background USE=\'bgnd\' containerField=\'background\'></background>\n";
	texto += "                        <group USE=\'theScene\' containerField=\"scene\"></group>\n";
	texto += "                    </renderedTexture>\n";
	texto += "                    <composedShader>\n";
	texto += "                        <field name=\'tex\' type=\'SFInt32\' value=\'0\'></field>\n";
	texto += "                        <field name=\'leftEye\' type=\'SFFloat\' value=\'1\'></field>\n";
	texto += "                        <shaderPart type=\'VERTEX\'>\n";
	texto += "                            attribute vec3 position;\n";
	texto += "                            attribute vec2 texcoord;\n";

	texto += "                           uniform mat4 modelViewProjectionMatrix;\n";
	texto += "                            varying vec2 fragTexCoord;\n";

	texto += "                            void main(){\n";
	texto += "                                vec2 pos = sign(position.xy);\n";
	texto += "                                fragTexCoord = texcoord;\n";

	texto += "                                gl_Position = vec4((pos.x/2.0)-0.5, pos.y, 0.0, 1.0); }\n";
	texto += "                        </shaderPart>\n";
	texto += "                        <shaderPart DEF=\"frag\" type=\'FRAGMENT\'>\n";
	texto += "                            #ifdef GL_ES\n";
	texto += "                            precision highp float;\n";
	texto += "                            #endif\n";

	texto += "                            uniform sampler2D tex;\n";
	texto += "                            uniform float leftEye;\n";
	texto += "                            varying vec2 fragTexCoord;\n";

	texto += "                            void main()\n";
	texto += "                            {\n";

	texto += "                                gl_FragColor = texture2D(tex, fragTexCoord);\n";
	texto += "                            }\n";
	texto += "                        </shaderPart>\n";
	texto += "                    </composedShader>\n";
	texto += "                </appearance>\n";
	texto += "                <plane solid=\"false\"></plane>\n";
	texto += "            </shape>\n";
	texto += "        </group>\n";
	texto += "        <group DEF=\'right\'>\n";
	texto += "            <shape>\n";
	texto += "                <appearance>\n";
	texto += "                    <renderedTexture interpupillaryDistance=\"0.03\" id=\"rtRight\" stereoMode=\"RIGHT_EYE\" update=\'ALWAYS\'\n";
	texto += "                                     dimensions=\'960 1080 4\' repeatS=\'false\' repeatT=\'false\'>\n";
	texto += "                        <viewpoint USE=\'vp\' containerField=\'viewpoint\'></viewpoint>\n";
	texto += "                        <background USE=\'bgnd\' containerField=\'background\'></background>\n";
	texto += "                        <group USE=\'theScene\' containerField=\"scene\"></group>\n";
	texto += "                    </renderedTexture>\n";
	texto += "                    <composedShader>\n";
	texto += "                        <field name=\'tex\' type=\'SFInt32\' value=\'0\'></field>\n";
	texto += "                        <field name=\'leftEye\' type=\'SFFloat\' value=\'0\'></field>\n";
	texto += "                        <shaderPart type=\'VERTEX\'>\n";
	texto += "                            attribute vec3 position;\n";
	texto += "                            attribute vec2 texcoord;\n";

	texto += "                            uniform mat4 modelViewProjectionMatrix;\n";
	texto += "                            varying vec2 fragTexCoord;\n";

	texto += "                            void main()\n";
	texto += "                            {\n";
	texto += "                                vec2 pos = sign(position.xy);\n";
	texto += "                                fragTexCoord = texcoord;\n";

	texto += "                                gl_Position = vec4((pos.x + 1.0) / 2.0, pos.y, 0.0, 1.0);\n";
	texto += "                            }\n";
	texto += "                        </shaderPart>\n";
	texto += "                        <shaderPart USE=\"frag\" type=\'FRAGMENT\'>\n";
	texto += "                        </shaderPart>\n";
	texto += "                    </composedShader>\n";
	texto += "                </appearance>\n";
	texto += "                <plane solid=\"false\"></plane>\n";
	texto += "            </shape>\n";
	texto += "        </group>\n";
	texto += "    </scene>\n";
	texto += "</x3d>";

	
	var div = document.getElementById("CameraVR");   
    div.innerHTML = texto;
    x3dom.reload();
}

function loadCameraVR(JSONEscenario){
	texto= "";
	texto += "<navigationInfo headlight='false' type='\"GAME\"'></navigationInfo>"
	//texto += "<navigationInfo  headlight=\"false\" avatarSize=\'" + 0.1 + " " + JSONEscenario.scene.camera.altura + " " + JSONEscenario.scene.camera.salto + "\' type=\'\"walk\"\' speed=\"1\" transitiontime=\"1\" transitiontype=\"LINEAR\"></navigationInfo>\n";
	texto += "<transform translation=\'0 0 0\' rotation=\'0 1 0 0\'>\n"; 
	texto += "   <viewpoint id=\'vpp\' DEF=\'vp\' description=\'ViewPoint 1\' centerOfRotation=\'3.4625 1.73998 -5.55\' fieldOfView=\"1.5\"\n";
	texto += "   orientation=\'0 1 0" + JSONEscenario.scene.camera.rotation + "\' position=\'" + JSONEscenario.scene.camera.x + " " + JSONEscenario.scene.camera.y + " " + JSONEscenario.scene.camera.z + "\'\n";
	texto += "   zNear=\'0.001\' zFar=\'100\'></viewpoint> \n";
	texto += "</transform>\n";

	return texto;

	/*
		<navigationinfo type="&quot;walk&quot; &quot;any&quot;" id="navType" headlight="true" typeparams="-0.4,60,0.05,2.8" explorationmode="all" avatarsize="0.25,1.6,0.75" speed="1" transitiontime="1" transitiontype="LINEAR "></navigationinfo>

	*/
}