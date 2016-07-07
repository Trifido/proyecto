<?php
    require_once '../dbhandler.php';

    session_start();

    $db = sqlite_open('../../database/360DB.db');

    // BD
    $path_dir = "./uploads/AUDIO/" . $_SESSION['username'] . "/";
    $path_file = $path_dir . basename($_FILES["audio"]["name"]);

    $query = 'INSERT INTO Audio (path) 
              VALUES ("'.$path_file.'")';

    $result = sqlite_query($db, $query);

    sqlite_close($db);

    // Save
    $target_dir = "../../uploads/AUDIO/" . $_SESSION['username'] . "/";
    $target_file = $target_dir . basename($_FILES["audio"]["name"]);

    move_uploaded_file($_FILES["audio"]["tmp_name"], $target_file);
?>