
function sendX3DTecho(){
    var form = document.getElementById('modelForm');
    var fileSelect = document.getElementById('inputX3DTecho');
    var uploadButton = document.getElementById('BX3DTecho');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('modelTecho', file, file.name);
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

function sendX3DSinTecho(){
    var form = document.getElementById('modelForm');
    var fileSelect = document.getElementById('inputX3DSinTecho');
    var uploadButton = document.getElementById('BX3DSinTecho');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('modelSinTecho', file, file.name);
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.

    xhr.open('POST', './upload/uploadX3DSinTecho.php', false);
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

function sendObjModel(){
    var form = document.getElementById('modelForm');
    var fileSelect = document.getElementById('inputOBJ');
    var uploadButton = document.getElementById('BOBJ');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('modelObj', file, file.name);
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

function sendImgCanvas(){
    var form = document.getElementById('ImgForm');
    var fileSelect = document.getElementById('inputImgCanvas');
    var uploadButton = document.getElementById('BImgCanvas');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var file = files[0];

    // Add the file to the request.
    formData.append('imgCanvas', file, file.name);
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

function sendImgMenu(){
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

function sendTextureX3D(){
    var form = document.getElementById('ImgForm');
    var fileSelect = document.getElementById('inputTexX3D');
    var uploadButton = document.getElementById('TexX3D');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var i;
    for( i=0; i<files.length; i++){
        // Add the file to the request.
        formData.append('imgTexture', files[i], files[i].name);
        // Set up the request.
        var xhr = new XMLHttpRequest();
        // Open the connection.

        xhr.open('POST', './upload/uploadX3DTexture.php', false); 
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
    }
}

function sendTextureOBJ(){
    var form = document.getElementById('ImgForm');
    var fileSelect = document.getElementById('inputTexOBJ');
    var uploadButton = document.getElementById('TexOBJ');

    uploadButton.innerHTML = 'Uploading...';

    var files = fileSelect.files;
    var formData = new FormData();

    var i;
    for( i=0; i<files.length; i++){
        // Add the file to the request.
        formData.append('imgTexture', files[i], files[i].name);
        // Set up the request.
        var xhr = new XMLHttpRequest();
        // Open the connection.

        xhr.open('POST', './upload/uploadOBJTexture.php', false); 
        // Set up a handler for when the request finishes.

        var Auxresult;
        xhr.onload = function () {
            if (xhr.status === 200) {
                // File(s) uploaded.
                Auxresult= xhr.responseText;
                uploadButton.innerHTML = 'Upload';
                alert(Auxresult);
            } else {
                alert('An error occurred!');
            }
        };
        xhr.send(formData);
    }
}