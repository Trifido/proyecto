function generarVRX3D() {
	var texto="";

	texto += "<x3d id=\'x3dElement\' showStat=\'false\' showLog=\'false\' style=\'width:100%; height:100%; border:0; margin:0; padding:0;\'>\n";
	texto += "<scene id=\'scene\'>\n";
	texto += "<Environment frustumCulling=\"false\"></Environment>\n";

	texto += "<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'20 20 20\' radius=\'5000000\' ></PointLight>\n";

	texto += loadNodeVRCamera();

	texto += "        <background DEF=\'bgnd\' backUrl=\'space.jpg\'></background>\n";
	texto += "       <group id=\'root\' render=\'true\'>\n";
	texto += "            <group DEF=\'theScene\'>\n";
	
	texto += initX3DScene();

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

	return texto;
}

function generarGameCameraX3D() {
	var texto="";

	texto += "<x3d id=\'x3dElement\' showStat=\'false\' showLog=\'false\' style=\'width:100%; height:100%; border:0; margin:0; padding:0;\'>\n";
	texto += "	  <scene id=\'scene\'>\n";
	texto += "    	<Environment frustumCulling=\"false\"></Environment>\n";

	texto += "		<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'20 20 20\' radius=\'5000000\' ></PointLight>\n";

	texto += "		<navigationInfo  avatarSize=\'0.001 0.15 0.15\' type=\'\"game\"\'></navigationInfo>\n";

	texto += loadSimpleCamera();

	texto += "        <background DEF=\'bgnd\' backUrl=\'space.jpg\'></background>\n";
	
	texto += initX3DScene();

	texto += "    </scene>\n";
	texto += "</x3d>";

	return texto;
}


function loadVRX3D() {

	var textoX3D = generarGameCameraX3D();

	var div = document.getElementById("FirstCameraVR");   
    div.innerHTML = textoX3D;

    x3dom.reload();
    cargarEscenarioVRX3D();
};



var runtime = null;
var rtLeft, rtRight;
var lastW, lastH;
var degreeToRadiansFactor = Math.PI / 180;

x3dom.fields.Quaternion.prototype.setFromEulerYXZ = function (alpha, beta, gamma) {

    var c1 = Math.cos( alpha / 2 );
    var c2 = Math.cos( beta / 2 );
    var c3 = Math.cos( gamma / 2 );
    var s1 = Math.sin( alpha / 2 );
    var s2 = Math.sin( beta / 2 );
    var s3 = Math.sin( gamma / 2 );

    this.x = s1 * c2 * c3 + c1 * s2 * s3;
    this.y = c1 * s2 * c3 - s1 * c2 * s3;
    this.z = c1 * c2 * s3 - s1 * s2 * c3;
    this.w = c1 * c2 * c3 + s1 * s2 * s3;
}

var MYAPP={"deviceOrientation":null, "screenOrientation":null};
onDeviceOrientationChangeEvent = (function(rawEvtData) {
    this.deviceOrientation = rawEvtData;
}).bind(MYAPP);

window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);

function deg2rad(deg){return deg * degreeToRadiansFactor;}

function cargarEscenarioVRX3D()
{
    runtime = document.getElementById('x3dElement').runtime;
    rtLeft = document.getElementById('rtLeft');
    rtRight = document.getElementById('rtRight');
    //rtLeft._x3domNode.lensCenter = 0;
    //rtRight._x3domNode.lensCenter = 0;

    lastW = +runtime.getWidth();
    lastH = +runtime.getHeight();

    var hw = Math.round(lastW / 2);
    rtLeft.setAttribute('dimensions',  hw + ' ' + lastH + ' 4');
    rtRight.setAttribute('dimensions', hw + ' ' + lastH + ' 4');

    var element = document.getElementById("x3dElement");
    MYAPP.viewpoint = document.getElementById('vpp');
/* */
    element.runtime.exitFrame = function() {
        // check if screensize changed
        var w = +runtime.getWidth();
        var h = +runtime.getHeight();
        if (w != lastW || h != lastH)
        {
            var half = Math.round(w / 2);
            rtLeft.setAttribute('dimensions',  half + ' ' + h + ' 4');
            rtRight.setAttribute('dimensions', half + ' ' + h + ' 4');
            lastW = w;
            lastH = h;
        }
        //handle device orientation change
        if(!MYAPP.deviceOrientation){
            return;
        }

        var q0 = x3dom.fields.Quaternion.axisAngle(new x3dom.fields.SFVec3f(0,0,1),-deg2rad(window.orientation)); // phone rotation offset
        var q = new x3dom.fields.Quaternion();
        q.setFromEulerYXZ(deg2rad(MYAPP.deviceOrientation.beta), deg2rad(MYAPP.deviceOrientation.alpha), -deg2rad(MYAPP.deviceOrientation.gamma));

        var q1 = new x3dom.fields.Quaternion.axisAngle(new x3dom.fields.SFVec3f(1,0,0),-Math.PI/2); // device orientation points upwards. rotate down to camera orientation

        q = q.multiply(q1);
        q = q.multiply(q0);

        var aa = q.toAxisAngle();

        MYAPP.viewpoint.setAttribute("orientation", aa[0].x + " " + aa[0].y + " " + aa[0].z + " " + aa[1]);
        MYAPP.deviceOrientation= false;
    };
}

function fullscreenVR() {
    //lens center auf null setzten
    rtLeft = document.getElementById('rtLeft');
    rtRight = document.getElementById('rtRight');
    rtLeft._x3domNode.lensCenter = 0;
    rtRight._x3domNode.lensCenter = 0;

    //fullscreen aktivieren
    container = document.getElementById('x3dElement');
    if (container.requestFullscreen) {
        container.requestFullscreen();
    } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
    }
};

function loadNodeVRCamera(){
	texto= "";

	var objdin= obtenerVRCamera();

    interpolador.Interpolacion(parseInt(objdin.x),parseInt(objdin.z));

	texto += "<navigationInfo  avatarSize=\'" + 0.001 + " " + 0.15 + " " + 0.15 + "\' type=\'\"game\"\'></navigationInfo>\n";

	texto += "<transform translation=\'0 0 0\' rotation=\'0 1 0 0\'>\n"; 
	texto += "	<viewpoint id=\'vpp\' DEF=\'vp\' description=\'ViewPoint 1\' centerOfRotation=\'3.4625 1.73998 -5.55\' fieldOfView=\"1.5\"\n";
	texto += "  orientation=\'0 1 0" + objdin.rotation + "\' position=\'" + interpolador.getX() + " " + objdin.y + " " + interpolador.getZ() + "\'\n";
	texto += "  zNear=\'0.001\' zFar=\'100\'></viewpoint> \n";
	texto += "</transform>\n";

	return texto;
}

function loadSimpleCamera(){
	texto= "";

	var objdin= obtenerVRCamera();

    interpolador.Interpolacion(parseInt(objdin.x),parseInt(objdin.z));

	texto += "<navigationInfo  avatarSize=\'" + 0.001 + " " + 0.15 + " " + 0.15 + "\' type=\'\"game\"\'></navigationInfo>\n";
	texto += "<transform translation=\'0 0 0\' rotation=\'0 1 0 0\'>\n"; 
	texto += "   <viewpoint id=\'vpp\' DEF=\'vp\' description=\'ViewPoint 1\' centerOfRotation=\'3.4625 1.73998 -5.55\' fieldOfView=\"1.5\"\n";
	texto += "   orientation=\'0 1 0" + objdin.rotation + "\' position=\'" + interpolador.getX() + " " + objdin.y + " " + interpolador.getZ() + "\'\n";
	texto += "   zNear=\'0.001\' zFar=\'100\'></viewpoint> \n";
	texto += "</transform>\n";

	return texto;
}
