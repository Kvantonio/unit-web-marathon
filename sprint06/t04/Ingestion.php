<?php
class Ingestion {
    public $id;
    public $meal_type;
    public $day_of_diet;
    public $products = array();

    public function get_from_fridge($product){
        if($this->products[$product]->getKcal()>200){
            throw new EatException("No more junk food, dumpling");
        }
    }
    
    public function setProduct($product) {
        $this->products[$product->getName()] = $product;
    }

    public function getProducts()
    {
        return $this->products;
    }

    

}

?>