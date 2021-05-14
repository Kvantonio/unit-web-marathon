<?php
class Team {
    public $id;
    public $avengers;

    public function __construct($id, $avengers){
        $this->id= $id;
        $this->avengers= $avengers;
    }

    public function battle($damage){
        foreach($this->avengers as $avenger){
            $avenger->hp -=$damage;
            if($avenger->hp <= 0){
                unset($this->avengers[array_search($avenger,$this->avengers,1)]);

            }
        }
    }

    public function calculate_losses($cloned_team){
        $t = count($cloned_team->avengers) - count($this->avengers);

        if($t == 0){
            echo ("We haven't lost anyone in thisbattle!\n");
        }
        else{
            echo "In this battle we lost " . $t . " Avenger(s).\n";
        }

    }




}

?>