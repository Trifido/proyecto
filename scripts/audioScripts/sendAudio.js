function sendAudio () {
    var fileSelect = document.getElementById('loadAudio');

    var files = fileSelect.files;

    if (files.length > 0) {
        var file = files[0];

        var formData = new FormData();
        // Add the file to the request.
        formData.append('audio', file, file.name);

        // Set up the request.
        var xhr = new XMLHttpRequest();
        // Open the connection.
        xhr.open('POST', './php/upload/uploadAudio.php', false);
        // Send
        xhr.send(formData);
    }
}