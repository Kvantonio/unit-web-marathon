function transformation(){
    if (transformation.count%2==0){
        document.getElementById("lab").style.background = "#ffb300";
        document.getElementById("hero").innerHTML = "Bruce Banner";
        document.getElementById("hero").style.fontSize = "60px";
        document.getElementById("hero").style.letterSpacing= '2px';
        transformation.count++
    }
    else{
        document.getElementById("lab").style.background = "#70964b ";
        document.getElementById("hero").innerHTML = "Hulk";
        document.getElementById("hero").style.fontSize = "120px";
        document.getElementById("hero").style.letterSpacing= '6px';
        transformation.count++
    }
    
}

transformation.count=1;