<?php namespace Space\Quantum;
    function calculate_time(){
        $time = '1939-01-01';
        $interval = date_diff(date_create($time), date_create('now'));
        /** @var TYPE_NAME $interval */
        $interval->format('%y years %M months %D days');
        $days = ($interval->format("%Y") * 365.6 
                    + $interval->format("%m") * 30.5 
                    + $interval->format("%d")) / 7;
        $array = [];
        array_push($array, floor($days / 365.2425));
            $days %= 365.2425;
        array_push($array, floor($days / 30.436875));
            $days %= 30.436875;
        array_push($array, floor($days));
        return $array;
    
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
    <p><?php echo "In quantum space you were absent for ". $time[0] .
" years, ".$time[1] . " months, ". $time[2] . " days"; ?></p>
</body>

</html>