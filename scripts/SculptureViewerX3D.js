function loadX3DSculpture(sculptureName){
	var texto="";

    texto += '<X3D id="the_monument_viewer">\n';
    texto += '\t<Scene>\n';

    texto += '<NavigationInfo headlight=\'true\'></NavigationInfo>\n';
	texto += '<Viewpoint description="Faceted box, smooth shading" position="0 0 1"></Viewpoint>\n';
	texto += '<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'0 0 0 \' radius=\'5000000\' ></PointLight>\n';
 	texto+='\t\t<Background backUrl=\'space.jpg\'></Background>\n';

 	texto+='\t\t<Transform DEF="Position' + sculptureName +'" translation="0 0 0">\n';
    texto+='\t\t\t<inline url="./models/X3D/' + sculptureName + '.x3d"> </inline>\n';
    texto+='\t\t</Transform>\n\n';

    texto +='\t</Scene>\n';
    texto +='</X3D>\n';

    var div = document.getElementById("visorEscultura");      
    div.innerHTML = texto;

    x3dom.reload();
};

function removeX3DSculpture(){
	var texto= "";
	texto += '<X3D id="the_monument_viewer">\n';
    texto += '\t<Scene>\n';

    texto += '<NavigationInfo headlight=\'true\'></NavigationInfo>\n';
	texto += '<Viewpoint description="Faceted box, smooth shading" position="0 0 1"></Viewpoint>\n';
	texto += '<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'0 0 0 \' radius=\'5000000\' ></PointLight>\n';
 	texto+='\t\t<Background backUrl=\'space.jpg\'></Background>\n';

 	texto +='\t</Scene>\n';
    texto +='</X3D>\n';

	var div = document.getElementById("visorEscultura");      
    div.innerHTML = texto;

    x3dom.reload();
}