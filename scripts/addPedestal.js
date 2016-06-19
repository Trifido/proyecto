
function addAlturaPedestal( alturaPedestal ){
	if(alturaPedestal!="" && alturaPedestal>-1 && elementoSeleccionado!=null){
		elementoSeleccionado.setAttributeNS(null, 'pedestalAlto', parseFloat(alturaPedestal));
	}
	updateInfoForm("campPedAlto");
}

function addAnchuraPedestal( anchuraPedestal ){
	if(anchuraPedestal!="" && anchuraPedestal>-1 && elementoSeleccionado!=null){
		elementoSeleccionado.setAttributeNS(null, 'pedestalAncho', parseFloat(anchuraPedestal));
	}
	updateInfoForm("campPedAncho");
}