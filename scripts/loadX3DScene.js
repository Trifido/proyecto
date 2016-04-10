function loadX3D() {
    var texto="";// = [];
    texto+='<X3D id="the_scene">\n';
    texto+='\t<Scene>\n\n';

    
    texto+='\t\t<Background backUrl=\'space.jpg\'></Background>\n';
    texto+='\t\t<Viewpoint description="Faceted box, smooth shading" position="-3 10 2" orientation="1 0 0 -1.5708"></Viewpoint>\n';
    
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
            posX= parseInt(objDin.x) * 0.01;
            posZ= parseInt(objDin.z) * 0.01;

            if(objDin.pedestalAlto>0){
                var ancho= objDin.pedestalAncho * 0.01;
                var alto= objDin.pedestalAlto * 0.01;
                texto+='\t\t\t<Transform DEF="boxTrafo" translation=\''+ posX + ' 0 ' + posZ +'\'>';
                texto+='\t\t\t\t<Shape DEF="boxShape">';
                texto+='\t\t\t\t\t<Appearance DEF="boxApp">'; 
                texto+='\t\t\t\t\t\t<Material diffuseColor="1 0 0" specularColor=".5 .5 .5" />';
                texto+='\t\t\t\t\t</Appearance>';
                texto+='\t\t\t\t\t<Box DEF=\"box\" size=\''+ ancho + alto + ancho +'\' />';
                texto+='\t\t\t\t</Shape>';
                texto+='\t\t\t</Transform>\n';

                /*texto+='\t\t\t<Transform DEF="TranslatePedestal" translation="' + posX + ' 0 ' + posZ + '">\n';
                var ancho= objDin.pedestalAncho * 0.01;
                var alto= objDin.pedestalAlto * 0.01;
                texto+='\t\t\t\t<Box ccw="true" hasHelperColors="false" lit="true" size="'+ ancho +' , ' + alto + ' , ' + ancho +'" solid="true" useGeoCache="true" ></Box>\n';
                texto+='\t\t\t</Transform>\n';*/
            }
            
            texto+='\t\t\t<Transform DEF="Translate' + objDin.nombre +'" translation="' + posX + ' ' + ((objDin.pedestalAlto/2)*0.01) + ' ' + posZ + '">\n';
            if(objDin.rotation > 0){
                texto+='\t\t<Transform DEF="Rotate' + objDin.nombre +'" rotation="0 1 0 '+ objDin.rotation + '">\n';
            }

            texto+='\t\t\t\t<inline url="./models/X3D/' + objDin.nombre + '.x3d"> </inline>\n';

            if(objDin.rotation > 0)
                texto+='\t\t\t</Transform>\n';
            texto+='\t\t</Transform>\n\n';
        }
    }

    texto+='\t</Scene>\n';
    texto+='</X3D>\n';

    var x3d = document.getElementsByTagName("x3d")[0];
    x3d.parentNode.removeChild(x3d);
    var div = document.getElementById("escena");
    //        
    div.innerHTML = texto;
    /*'<X3D id="the_scene">\
      <Scene>\
        <Background backUrl=\'space.jpg\'></Background>\
        <Viewpoint description="Faceted box, smooth shading" position="-3 10 2" orientation="1 0 0 -1.5708"></Viewpoint>\
        <inline url="./models/X3D/Sala1.x3d"> </inline>\
      </Scene>\
    </x3d>';*/
    //div.innerHTML = texto;
    x3dom.reload();

    //document.getElementById('the_scene').innerHTML= texto;
    //document.getElementById('the_scene').innerText= texto;
};