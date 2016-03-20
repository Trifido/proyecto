
var loaded= false;

function loadMenu(element){
	loadDelete(element);
	loaded= true;
};

function loadDelete(element){

	var objDin= obtenerEscenario(element);
	var delet = document.createElementNS('http://www.w3.org/2000/svg','image');

	//delet.setAttribute('id', this.id);
	delet.setAttributeNS(null, 'nombre', 'delete');
	delet.setAttributeNS(null,'height', objDin.alto);
	delet.setAttributeNS(null,'width', objDin.ancho);
	delet.setAttributeNS('http://www.w3.org/1999/xlink','href', './img/submenu/cross.png');
	delet.setAttributeNS(null,'x',(objDin.x + objDin.ancho));
	delet.setAttributeNS(null,'y',(objDin.z - objDin.alto));
	delet.setAttributeNS(null, 'visibility', 'visible');


	document.getElementById('lienzo').appendChild(delet);
}