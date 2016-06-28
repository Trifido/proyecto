function sendImgEscenario(){
    var form = document.getElementById('EscenarioForm');
    var fileSelect = document.getElementById('inputImgEscenario');
    var uploadButton = document.getElementById('BImgEscenario');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('imgEscenario', file, file.name);
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.

    xhr.open('POST', './upload/uploadImgEscenario.php', false); 
    // Set up a handler for when the request finishes.

    var Auxresult;
    xhr.onload = function () {
        if (xhr.status === 200) {
            // File(s) uploaded.
            Auxresult= xhr.responseText;
            uploadButton.innerHTML = 'Upload';
        } else {
            alert('An error occurred!');
        }
    };
    xhr.send(formData);

    alert(Auxresult);
}