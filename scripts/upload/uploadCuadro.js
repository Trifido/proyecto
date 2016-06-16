
function sendImgPicture(){
    var form = document.getElementById('ImgForm');
    var fileSelect = document.getElementById('inputImgCuadro');
    var uploadButton = document.getElementById('BImgCuadro');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('imgCuadro', file, file.name);
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.

    xhr.open('POST', './upload/uploadImgCuadro.php', false); 
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

function sendImgCanvasPicture(){
    var form = document.getElementById('ImgForm');
    var fileSelect = document.getElementById('inputImgCenital');
    var uploadButton = document.getElementById('BImgCenital');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('imgCenital', file, file.name);
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.

    xhr.open('POST', './upload/uploadImgCenitalCuadro.php', false); 
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

function sendImgMenuPicture(){
    var form = document.getElementById('ImgForm');
    var fileSelect = document.getElementById('inputImgMenu');
    var uploadButton = document.getElementById('BImgMenu');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('imgMenu', file, file.name);
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.

    xhr.open('POST', './upload/uploadImgMenuCuadro.php', false); 
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