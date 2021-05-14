<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Quantum space</title>
    </head>
    <body>

        <p><?php echo "SCRIPT_FILENAME: " . $_SERVER["SCRIPT_FILENAME"];?> </p>
        <p><?php echo "argv: " . implode(", ", $_SERVER["argv"]);?> </p>
        <p><?php echo "SERVER_ADDR: " . $_SERVER["SERVER_ADDR"];?> </p>
        <p><?php echo "SERVER_NAME: " . $_SERVER["SERVER_NAME"];?> </p>
        <p><?php echo "SERVER_PROTOCOL: " . $_SERVER["SERVER_PROTOCOL"];?> </p>
        <p><?php echo "QUERY_STRING: " . $_SERVER["QUERY_STRING"];?> </p>
        <p><?php echo "HTTP_USER_AGENT: " . $_SERVER["HTTP_USER_AGENT"];?> </p>
        <p><?php echo "REMOTE_ADDR: " . $_SERVER["REMOTE_ADDR"];?> </p>
        <p><?php echo "PATH_INFO: " . $_SERVER["PATH_INFO"];?> </p>

    </body>
</html>