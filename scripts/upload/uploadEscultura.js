
function sendX3DSculpture(){
    var form = document.getElementById('modelForm');
    var fileSelect = document.getElementById('inputX3D');
    var uploadButton = document.getElementById('BX3D');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('modelX3D', file, file.name);
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.

    xhr.open('POST', './upload/uploadX3D.php', false);
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

function sendObjModelSculpture(){
    var form = document.getElementById('modelForm');
    var fileSelect = document.getElementById('inputOBJ');
    var uploadButton = document.getElementById('BOBJ');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('modelOBJ', file, file.name);
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.

    xhr.open('POST', './upload/uploadOBJ.php', false); 
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

function sendImgCanvasSculpture(){
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

    xhr.open('POST', './upload/uploadImg.php', false); 
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

function sendImgMenuSculpture(){
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

    xhr.open('POST', './upload/uploadImgMenu.php', false); 
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