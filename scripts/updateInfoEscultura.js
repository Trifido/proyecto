var lastNameObject = null;

function DisplayFormSculpture(nombreBD, cronologia, tecnica, info, anchoPx, altoPx){
    document.getElementById("campoCronologia").value = cronologia;
    document.getElementById("campoTecnica").value = tecnica;
    document.getElementById("campoInfo").value = info;
    document.getElementById("campoAlto").value = altoPx;
    document.getElementById("campoAncho").value = anchoPx;
}

function DisplayFormPicture(nombreBD, cronologia, tecnica, info, anchoPx, altoPx, alto, largo){
    document.getElementById("campoCronologia").value = cronologia;
    document.getElementById("campoTecnica").value = tecnica;
    document.getElementById("campoInfo").value = info;
    document.getElementById("campoAlto").value = altoPx;
    document.getElementById("campoAncho").value = anchoPx;
    document.getElementById("campoAltoCuadro").value = alto;
    document.getElementById("campoLargoCuadro").value = largo;
}

function DisplayFormRoom(anchoPx, altoPx, alto, largo){
    document.getElementById("campoLargo").value = alto;
    document.getElementById("campoAncho").value = largo;
    document.getElementById("campoAltoPx").value = altoPx;
    document.getElementById("campoAnchoPx").value = anchoPx;
}

function showInfoEscultura(typeObject, nombreBD){
    lastNameObject = nombreBD;
    var ajaxResponse;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ajaxResponse = JSON.parse(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "./readInfoForm.php?typeObject=" + typeObject + "&nombreBD=" + nombreBD, false);
    xmlhttp.send();

    if( typeObject == "sculpture" ){
        DisplayFormSculpture(nombreBD, ajaxResponse.cronologia, ajaxResponse.tecnica, ajaxResponse.info, ajaxResponse.AnchoPx, ajaxResponse.AltoPx);
    }
    else if( typeObject == "picture" ){
        DisplayFormPicture(nombreBD, ajaxResponse.cronologia, ajaxResponse.tecnica, ajaxResponse.info, ajaxResponse.AnchoPx, ajaxResponse.AltoPx, ajaxResponse.Alto, ajaxResponse.Largo);
    }
    else{
        DisplayFormRoom(ajaxResponse.AnchoPx, ajaxResponse.AltoPx, ajaxResponse.Alto, ajaxResponse.Ancho);
    }
}

function updateEscultura(typeInput){
    var regUpdate = null;
    var regValue = null;

    switch(typeInput){
        case "Cronologia":
            regUpdate = "Cronologia";
            regValue = document.getElementById("campoCronologia").value;
            break;
        case "Tecnica":
            regUpdate = "Tecnica";
            regValue = document.getElementById("campoTecnica").value;
            break;
        case "Informacion":
            regUpdate = "Informacion";
            regValue = document.getElementById("campoInfo").value;
            break;
        case "Ancho":
            regUpdate = "AnchoPx";
            regValue = document.getElementById("campoAncho").value;
            break;
        case "Alto":
            regUpdate = "AltoPx";
            regValue = document.getElementById("campoAlto").value;
            break;
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //ajaxResponse = JSON.parse(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "./updateInfoForm.php?typeObject=sculpture" + "&nombreBD=" + lastNameObject + "&regUpdate=" + regUpdate + "&regValue=" + regValue, true);
    xmlhttp.send();
}

function updateCuadro(typeInput){
    var regUpdate = null;
    var regValue = null;

    switch(typeInput){
        case "Cronologia":
            regUpdate = "Cronologia";
            regValue = document.getElementById("campoCronologia").value;
            break;
        case "Tecnica":
            regUpdate = "Tecnica";
            regValue = document.getElementById("campoTecnica").value;
            break;
        case "Informacion":
            regUpdate = "Informacion";
            regValue = document.getElementById("campoInfo").value;
            break;
        case "AnchoCuadro":
            regUpdate = "Largo";
            regValue = document.getElementById("campoAnchoCuadro").value;
            break;
        case "AltoCuadro":
            regUpdate = "Alto";
            regValue = document.getElementById("campoAltoCuadro").value;
            break;
        case "Ancho":
            regUpdate = "AnchoPx";
            regValue = document.getElementById("campoAncho").value;
            break;
        case "Alto":
            regUpdate = "AltoPx";
            regValue = document.getElementById("campoAlto").value;
            break;
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //ajaxResponse = JSON.parse(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "./updateInfoForm.php?typeObject=picture" + "&nombreBD=" + lastNameObject + "&regUpdate=" + regUpdate + "&regValue=" + regValue, true);
    xmlhttp.send();
}

function updateRoom(typeInput){
    var regUpdate = null;
    var regValue = null;

    switch(typeInput){
        case "Ancho":
            regUpdate = "AnchoSala";
            regValue = document.getElementById("campoAncho").value;
            break;
        case "Largo":
            regUpdate = "LargoSala";
            regValue = document.getElementById("campoLargo").value;
            break;
        case "AnchoPx":
            regUpdate = "AnchoPix";
            regValue = document.getElementById("campoAnchoPx").value;
            break;
        case "AltoPx":
            regUpdate = "AltoPix";
            regValue = document.getElementById("campoAltoPx").value;
            break;
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //ajaxResponse = JSON.parse(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "./updateInfoForm.php?typeObject=room" + "&nombreBD=" + lastNameObject + "&regUpdate=" + regUpdate + "&regValue=" + regValue, true);
    xmlhttp.send();
}