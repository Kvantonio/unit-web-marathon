<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Quantum space</title>
    </head>
    <body>
    

    <form action="index.php" method="post" >

        <h3>What Thanos did for the Soul Stone?</h3>
        
        <div>
            <input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" />
            <label for="question-1-answers-A">A) Jumped from the mountain</label>
        </div>
        
        <div>
            <input type="radio" name="question-1-answers" id="question-1-answers-B" value="B" />
            <label for="question-1-answers-B">B) Made stone keeper to jump from the mountain</label>
        </div>
        
        <div>
            <input type="radio" name="question-1-answers" id="question-1-answers-C" value="C" />
            <label for="question-1-answers-C">C) Pushed Gamora off the mountain</label>
        </div>
    <input type="submit" value="Submit Quiz" />
    </form>


    <?php

        $answer1 = $_POST['question-1-answers'];
        if(!$answer1){
            echo "<div id='results'></div>";
        }
        else{
            if ($answer1 == "B") {
                echo "<div id='results'>You are correct!</div>";
            }
            else{
                echo "<div id='results'>Lose</div>";
            }
        }
        ?>    
    
    </body>

</html>