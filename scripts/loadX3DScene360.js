function loadX3D360() {
    // Mensaje de error si no esta cargada la escena

    //o...

    var content = '';
    content +='\t<X3D id="the_sceneCamera">\n';
    content += '\t<Scene>\n\n';
    
    content += '\t\t<Viewpoint description="Faceted box, smooth shading" position="2 10 3" orientation="1 0 0 -1.5708"></Viewpoint>\n';
    
    content += initX3DScene();

    content += '\t</Scene>\n';
    content += '</X3D>\n';
    //console.log(content);

    $('#sceneCamera').html(content); // Actualizar el contenido

    x3dom.reload();
};