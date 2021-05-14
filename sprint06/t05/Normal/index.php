<?php namespace Space\Normal;

    function calculate_time(){
        $time = '1939-01-01';
        $datetime1 = date_create($time);
        $datetime2 = date_create('now');
        $interval = date_diff($datetime1, $datetime2);
        return $interval;
    };

?>