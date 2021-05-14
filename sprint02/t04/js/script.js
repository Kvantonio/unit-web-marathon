function checkDivision(beginRange, endRange){
  for(let i = beginRange; i <= endRange; i++)
  {
    var s = i;
    if(i%2==0)
    {
      s+=' is even';  
    }
    if(i%3==0)
    {
      if (s==i){
        s+=' is a multiple of 3';
      }
      else{
        s+=", a multiple of 3";
      }

    }
    if(i%10==0)
    {
      if (s==i){
        s+=' is a multiple of 10';
      }
      else{
        s+=", a multiple of 10";
      }
    }
    if (s==i)
    {
      s+=' -';
    }
    console.log(s);
  }

}
var str = prompt("number is?");
data = str.split('-')
checkDivision(data[0], data[1]);

