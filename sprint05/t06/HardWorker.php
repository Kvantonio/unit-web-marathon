<?php

class HardWorker
{
    private $name;
    private $age;
    private $salary;

    public function getName()
    {
        return $this->name;
    }

    public function getAge()
    {
        return $this->age;
    }

    public function getSalary()
    {
        return $this->salary;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setAge($age)
    {
        if ($age >= 1 && $age <= 100) {
            $this->age = $age;
            return true;
        } else {
            return false;
        }
    }

    public function setSalary($salary)
    {
        if ($salary >= 100 && $salary <= 10000) {
            $this->salary = $salary;
            return true;
        } else {
            return false;
        }
    }

    public function toArray()
    {
        return "Array\n(\n\t[name] => $this->name\n\t[age] => $this->age\n\t[salary] => $this->salary\n)\n";
    }
}
?>
