
function loadX3D() {
    var texto="";
    texto+='<X3D id="the_scene">\n';
    texto+='\t<Scene>\n\n';

    texto+='\t\t<Background backUrl=\'space.jpg\'></Background>\n';
    texto+='\t\t<Viewpoint description="Faceted box, smooth shading" position="2 10 3" orientation="1 0 0 -1.5708"></Viewpoint>\n';
    
    texto+= initX3DScene();

    texto+='\t</Scene>\n';
    texto+='</X3D>\n';

   var div = document.getElementById("escena"); 
    //activeCameraView  
   // var div = document.getElementById("activeCameraView"); 
    div.innerHTML = texto;
    x3dom.reload();
};

function initX3DScene(){
    var texto="";
    //Añadimos el escenario    
    var objDin= obtenerEscenario(document.getElementById('room_level').childNodes[0]);

    texto+='\t\t<Transform DEF="Position' + objDin.nombre +'" translation="0 0 0">\n';

    texto+='\t\t\t<inline url="./models/X3D/' + objDin.nombre + '.x3d"> </inline>\n';

    texto+='\t\t</Transform>\n\n';

    //Añadimos todos los objetos
    var nelements=document.getElementById("sculpture_level").childNodes.length;
    var posX;
    var posZ;
    var elemento;

    for(var i=0; i<nelements; i++){
        elemento= document.getElementById('sculpture_level').childNodes[i];
        if(elemento.id != 'delete' && elemento.id != 'rotate'){
            objDin= obtenerDatos(elemento);

            interpolador.Interpolacion(parseInt(objDin.x),parseInt(objDin.z));

            alert(interpolador.getX() + ' 0 ' + interpolador.getZ());
            
            if(objDin.pedestalAlto>0){
                var ancho= objDin.pedestalAncho * 0.01; //Convierte en centimetros (0.01)
                var alto= objDin.pedestalAlto * 0.01;
                texto+='\t\t\t<Transform DEF="boxTrafo" translation=\''+ interpolador.getX() + ' 0 ' + interpolador.getZ() +'\'>';
                texto+='\t\t\t\t<Shape DEF="boxShape">';
                texto+='\t\t\t\t\t<Appearance DEF="boxApp">'; 
                texto+='\t\t\t\t\t\t<Material diffuseColor="1 0 0" specularColor=".5 .5 .5" />';
                texto+='\t\t\t\t\t</Appearance>';
                texto+='\t\t\t\t\t<Box DEF=\"box\" size=\''+ ancho + alto + ancho +'\' />';
                texto+='\t\t\t\t</Shape>';
                texto+='\t\t\t</Transform>\n';
            }
            
            texto+='\t\t\t<Transform DEF="Translate' + objDin.nombre +'" translation="' + interpolador.getX() + ' ' + ((objDin.pedestalAlto/2)*0.01) +
             ' ' + interpolador.getZ() + '">\n';

            if(objDin.rotation > 0){
                texto+='\t\t<Transform DEF="Rotate' + objDin.nombre +'" rotation="0 1 0 '+ objDin.rotation + '">\n';
            }

            texto+='\t\t\t\t<inline url="./models/X3D/' + objDin.nombre + '.x3d"> </inline>\n';

            if(objDin.rotation > 0)
                texto+='\t\t\t</Transform>\n';
            texto+='\t\t</Transform>\n\n';
        }
    }

    //Añadimos todos los cuadros
    nelements=document.getElementById("picture_level").childNodes.length;

    for(var i=0; i<nelements; i++){
        elemento= document.getElementById('picture_level').childNodes[i];
        if(elemento.id != 'delete' && elemento.id != 'rotate'){
            objDin= obtenerDatosCuadro(elemento);

            interpolador.InterpolacionCuadro(parseInt(objDin.x),parseInt(objDin.z));
            
            var coordPicture;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    coordPicture= xmlhttp.responseText;
                }
            };

            xmlhttp.open("GET", "./php/iniciarPuntoCuadro.php?posX=" + interpolador.getX() + "&posZ=" + interpolador.getZ(), false);
            xmlhttp.send();

            texto+='\t\t\t<Transform DEF="Translate' + objDin.nombre +'" translation="' + coordPicture + '">\n';
            /*
            if(objDin.rotation > 0){
                texto+='\t\t<Transform DEF="Rotate' + objDin.nombre +'" rotation="0 1 0 '+ objDin.rotation + '">\n';
            }
            */

            texto+='\t\t\t\t<Shape DEF="boxShape">';
            texto+='\t\t\t\t\t<Appearance DEF="boxApp">'; 
            texto+='\t\t\t\t\t\t<Material diffuseColor="1 0 0" specularColor=".5 .5 .5" />';
            texto+='\t\t\t\t\t</Appearance>';
            texto+='\t\t\t\t\t<Box DEF=\"box\" size=\'0.1 0.1 0.1\' />';
            texto+='\t\t\t\t</Shape>';

            /*if(objDin.rotation > 0)
                texto+='\t\t\t</Transform>\n'; */
            texto+='\t\t</Transform>\n\n'; 
            
        }
    }
    return texto;
};