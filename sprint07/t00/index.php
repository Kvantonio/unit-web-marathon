<?php
header( "Content-Type: text/html; charset=utf-8" );

if($_COOKIE['counter']){
    setcookie("counter", $_COOKIE['counter']+1, time()+60);
}
else{
    setcookie("counter", 1, time()+60);
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Cookie counter</h1>
<?php
    echo("This page was loded " . $_COOKIE['counter']. " time(s) in a last minute");
?>

</body>
</html>