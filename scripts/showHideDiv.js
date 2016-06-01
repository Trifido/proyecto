//http://www.willmaster.com/library/features/show-hide-all-at-once.php

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Single Div

function HideContent(d) {
    document.getElementById(d).style.display = "none";
}

function ShowContent(d) {
    document.getElementById(d).style.display = "block";
}

function ReverseDisplay(d) {
    if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
    else { document.getElementById(d).style.display = "none"; }
}

// Multiple Divs
//function ShowAllDivs(IDvaluesOfEachDiv) {
//  IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/[,\s"']/g," ");
//   IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/^\s*/,"");
//    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/\s*$/,"");
//    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/  +/g," ");

//    var IDlist = IDvaluesOfEachDiv.split(" ");

//    for(var i=0; i<IDlist.length; i++) {
//        document.getElementById(IDlist[i]).style.display = "";
//    }
//}

//function HideAllDivs(IDvaluesOfEachDiv) {
//    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/[,\s"']/g," ");
//    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/^\s*/,"");
//    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/\s*$/,"");
//    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/  +/g," ");

//    var IDlist = IDvaluesOfEachDiv.split(" ");

//    for(var i=0; i<IDlist.length; i++) {
//        document.getElementById(IDlist[i]).style.display = "none";
//    }
//}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Miscelaneous

function activateCameraMode() {

    /**** CAMBIAR APARIENCIA EDITOR ****/
    var heading = $('<div/>', {id: "appendHeading", class: "panel-heading text-center", text: "Generación de Rutas"});
    var footer = $('<div/>', {id: "appendFooter", class: "panel-footer"}).append($('<small/>', {text: "El modo generación de rutas permite añadir cámaras y puntos de ruta al editor para la generción automática de caminos."}));

        //Activar
    if ($("#panelCanvas").hasClass("panel-primary")) {
        $("#panelCanvas").removeClass("panel-primary").addClass("panel-red");
        $("#panelCanvas").prepend( heading );
        $("#panelCanvas").append( footer );

        $("#buttonCameraMode").blur();
    }
        //Desactivar
    else if ($("#panelCanvas").hasClass("panel-red")) {
        $("#panelCanvas").removeClass("panel-red").addClass("panel-primary");
        $("#appendHeading").remove();
        $("#appendFooter").remove();

        $("#buttonCameraMode").blur();
    }

    /**** OCULTAR Y ACTIVAR ****/
    
    // Modificar mas cosas -------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ReverseDisplay("panelInfo");
    ReverseDisplay("panelCameras");

    ReverseDisplay("accordion");
    ReverseDisplay("panelCamerasPoints");
}



