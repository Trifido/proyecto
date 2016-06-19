var lastTypeObject = null;
var lastNameObject = null;

function DisplayFormSculpture(option, nombreBD, cronologia, tecnica, info, pathImg) {

    document.getElementById("campNombre").value = nombreBD;
    document.getElementById("campCronologia").value = cronologia;
    document.getElementById("campTecnica").value = tecnica;
    document.getElementById("campInfo").value = info;

    if(option){
        document.getElementById("viewPicture").style.display = "none";
        document.getElementById("viewElement").style.display = "block";
        document.getElementById("anchoPedestal").style.display = "block";
        document.getElementById("altoPedestal").style.display = "block";
    }
    else{
        document.getElementById("viewElement").style.display = "none";
        document.getElementById("viewPicture").style.display = "block";
        document.getElementById("viewPicture").src = pathImg;
        document.getElementById("anchoPedestal").style.display = "none";
        document.getElementById("altoPedestal").style.display = "none";
    }
}

function hideFormSculpture(){
    lastTypeObject = null;
    lastNameObject = null;

    document.getElementById("viewPicture").style.display = "none";
    document.getElementById("viewElement").style.display = "block";
    document.getElementById("anchoPedestal").style.display = "block";
    document.getElementById("altoPedestal").style.display = "block";
    document.getElementById("anchoPedestal").style.display = "block";
    document.getElementById("altoPedestal").style.display = "block";

    document.getElementById("campNombre").value = "";
    document.getElementById("campCronologia").value = "";
    document.getElementById("campTecnica").value = "";
    document.getElementById("campInfo").value = "";
    document.getElementById("viewPicture").src = "";
    document.getElementById("anchoPedestal").value = "";
    document.getElementById("altoPedestal").value = "";
    document.getElementById("anchoPedestal").value = "";
    document.getElementById("altoPedestal").value = "";
}

function showInfoForm(typeObject, nombreBD, pathImg){
    var ajaxResponse;

    if( typeObject != null && lastNameObject != nombreBD ){

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                ajaxResponse = JSON.parse(xmlhttp.responseText);
            }
        };
        xmlhttp.open("GET", "./php/readInfoForm.php?typeObject=" + typeObject + "&nombreBD=" + nombreBD, false);
        xmlhttp.send();

        if( typeObject == "sculpture" ){
            DisplayFormSculpture(true, nombreBD, ajaxResponse.cronologia, ajaxResponse.tecnica, ajaxResponse.info, pathImg);
        }
        else{
            DisplayFormSculpture(false, nombreBD, ajaxResponse.cronologia, ajaxResponse.tecnica, ajaxResponse.info, pathImg);
        }

        lastTypeObject = typeObject;
        lastNameObject = nombreBD;
    }
}

function updateInfoForm(typeInput){
    if( lastTypeObject != null ){ 

        var regUpdate = null;
        var regValue = null;

        switch(typeInput){
            case "campNombre":
                if( lastTypeObject == "sculpture")
                    regUpdate = "NombreEscultura";
                else
                    regUpdate = "NombreCuadro";
                regValue = document.getElementById("campNombre").value;
                break;
            case "campCronologia":
                regUpdate = "Cronologia";
                regValue = document.getElementById("campCronologia").value;
                break;
            case "campTecnica":
                regUpdate = "Tecnica";
                regValue = document.getElementById("campTecnica").value;
                break;
            case "campInfo":
                regUpdate = "Informacion";
                regValue = document.getElementById("campInfo").value;
                break;
            case "campPedAncho":
                regUpdate = "AnchoPedestal";
                regValue = document.getElementById("campPedAncho").value;
                break;
            case "campPedAlto":
                regUpdate = "AltoPedestal";
                regValue = document.getElementById("campPedAlto").value;
                break;
        }

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //ajaxResponse = JSON.parse(xmlhttp.responseText);
            }
        };
        xmlhttp.open("GET", "./php/updateInfoForm.php?typeObject=" + lastTypeObject + "&nombreBD=" + lastNameObject + "&regUpdate=" + regUpdate + "&regValue=" + regValue, true);
        xmlhttp.send();
    }
}