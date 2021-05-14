function addWords(obj, wrds){
  let temp = obj.words
  temp =temp.split(' ')
  data_word = wrds.split(' ')
  for(let i=0; i<=temp.length; i++){
    if(temp[i]=='' || temp[i]==' '){
      temp.splice(i, 1);
      i--
    }
  }
  let result = [];
  for (let str of temp) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  for(let i=0; i<=data_word.length; i++){
    if(data_word[i]=='' || data_word[i]==' '){
      data_word.splice(i, 1);;
      i--
    }
  }
  for(let i=0; i<=result.length; i++)
  {
    for(let j=0; j<data_word.length; j++)
    {
      if(result[i] == data_word[j]){
         
        data_word.splice(j, 1);
        j--
      }
    }
    
  }
  res = result.join(' ') + ' '+ data_word.join(' ')
  obj.words = res;
  return res;
}

function removeWords(obj, wrds){
  temp = addWords(obj,obj['words'])

  res = temp.split(' ')
  for(let i=0; i<=res.length; i++){
    if(res[i]=='' || res[i]==' '){
      res.splice(i, 1);
      i--
    }
  }
  data_word = wrds.split(' ')
  for(let i=0; i<=data_word.length; i++){
    if(data_word[i]=='' || data_word[i]==' '){
      data_word.splice(i, 1);;
      i--
    }
  }

  for(let i=0; i<=data_word.length; i++){
    for(let j=0; j<res.length; j++){
      if(data_word[i]==res[j]){
        res.splice(j, 1);
        j--
      }
    }
    
  }
  rest = res.join(' ')
  obj.words = rest;
  return rest
}

function changeWords(obj, oldWrds, newWrds){
  temp = addWords(obj,obj['words'])
  res = temp.split(' ')
  for(let i=0; i<=res.length; i++){
    if(res[i]=='' || res[i]==' '){
      res.splice(i, 1);
      i--
    }
  }

  data_oldword = oldWrds.split(' ')

  for(let i=0; i<=data_oldword.length; i++){
    if(data_oldword[i]=='' || data_oldword[i]==' '){
      data_oldword.splice(i, 1);;
      i--
    }
  }

  data_newword = newWrds.split(' ')

  for(let i=0; i<data_newword.length; i++){
    if(data_newword[i]=='' || data_newword[i]==' '){
      data_newword.splice(i, 1);;
      i--
    }
  }

  for(let i=0; i<data_oldword.length; i++){
    for(let j=0; j<res.length; j++){
      if(data_oldword[i]==res[j]){
        res.splice(j, 1);
        j--
      }
    }
  }

  for(let i=0; i<data_newword.length; i++){
    res.push(data_newword[i])
  }
  res = res.join(' ')
  obj.words = res;
  return res
}

/*
const obj = {
  words: 'newspapers newspapers  books magazines'
};

console.log(addWords(obj, 'radio newspapers   '));

console.log(removeWords(obj, 'newspapers   radio'));


console.log(changeWords(obj, 'books radio  magazines', 'tv internet'));
*/