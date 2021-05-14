<?php

namespace Space\Normal;

function calculate_time()
{
    $time = '1939-01-01';
    $datetime1 = date_create($time);
    $datetime2 = date_create('now');
    $interval = date_diff($datetime1, $datetime2);
    return $interval;
};
$time = calculate_time();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quantum space</title>
</head>

<body>
    <p><?php echo "In real life you were absent for " . $time->format("%Y") . " years, " . $time->format("%m") .
    " months, " . $time->format("%d") . " days"; ?></p>
</body>

</html>