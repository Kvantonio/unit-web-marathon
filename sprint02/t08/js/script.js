function checkBrackets(str) {
  let r = 0
  if (!str) { return -1 }

  if (typeof (str) != "string") { return -1 }
  if (str.length == 0 || str == NaN || ((str.indexOf('(') == -1) && (str.indexOf(')') == -1))) {
    return -1;
  }
  let holder = [];
  let openBrackets = ['('];
  let closedBrackets = [')'];
  for(let letter of str){
      if(openBrackets.includes(letter)){ 
          holder.push(letter)
      }else if(closedBrackets.includes(letter)){ 
          let openPair = openBrackets[closedBrackets.indexOf(letter)]
          if(holder[holder.length - 1] === openPair){
              holder.splice(-1,1) 
          }else{ 
              holder.push(letter);

          }
      }
  }

  return (holder.length);   
}