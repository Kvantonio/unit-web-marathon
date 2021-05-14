<?php namespace Space\Quantum;

    function calculate_time(){
        $time = '1939-01-01';
        $interval = date_diff(date_create($time), date_create('now'));
        $interval->format('%y years %M months %D days');
        $days = ($interval->format("%Y") * 365.6 
                    + $interval->format("%m") * 30.5 
                    + $interval->format("%d")) / 7;
        $array = [];
        array_push($array, floor($days / 365));
            $days %= 365;
        array_push($array, floor($days / 30));
            $days %= 30;
        array_push($array, floor($days));
        return $array;
    
    };

?>