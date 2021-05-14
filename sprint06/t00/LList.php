<?php

class LList implements IteratorAggregate{
    public function __construct(){
        $this->head = null;
    }

    public function getFirst(){
        if($this->head ==null)
            return null;
        return $this->head->data;
    }

    public function getLast(){
        if($this->head ==null)
            return null;
        $point = $this->head;
        while($point->next != null){
            $point = $point->next;
        }
        return $point->data;
    }
 
    public function add($value){
        
        if($this->head == null){
            $this->head = new LLitem();
            $this->head->data = $value;
            return;
        }
        $point = $this->head;
        while($point->next != null){
            $point = $point->next;
        }

        $point->next = new LLitem();
        $point->next->data = $value;
    }
    
    public function addArr($array){
        foreach($array as $data)
            $this->add($data);
    }

    public function remove($value){
        $point = $this->head;

        if($point->data == $value)
        {
            if($point->next == null)
            {
                $this->head = null;
                return true;
            }
            else{
                $this->head = $this->head->next;
            }       
        }

        while($point->next != null){
            if($point->next->data == $value && $point->next != null){
                $point->next = $point->next->next;
                return true;
            }

            $point = $point->next;
        }
        return false;
    }
    
    public function removeAll($value){
        while($this->remove($value));
    }

    public function contains($value){
        $point = $this->head;

        while($point != null){
            if($point->data == $value)
            {
                return true;
            }

            $point = $point->next;
        }
        return false;
    }

    public function clear(){
        $this->head = null;
    }

    public function count(){
        $point = $this->head;
        $counter = 0;
        while($point != null){
            $counter++;
            $point = $point->next;
        }
        return $counter;
    }

    public function toString(){
        $str = '';
        $point = $this->head;
        while($point != null){
            $str .= $point->data;

            if($point->next != null)
                $str .= ', ';

            $point = $point->next;
        }

        return $str;
    }

    public function toArray(){
        $arr = [];
        $point = $this->head;
        while($point != null){
            array_push($arr,$point->data);
            $point = $point->next;
        }

        return $arr;
    }

    public function getIterator(){
        return new ArrayIterator($this->toArray());
    }
}

?>