var name = prompt("Your name?");


var t = false;
for(let i=0; i<=name.length; i++)
{
  if(!(isNaN(name[i]))){
    alert('Wrong input!');
    console.log('Wrong input!');
    t=true
    break;
  }
}
var last_name = prompt("Your last name?");
for(let i=0; i<=last_name.length; i++)
{
  if(!(isNaN(last_name[i]))){
    alert('Wrong input!');
    console.log('Wrong input!');
    t=true
    break;
  }
}


if(t==false){
  name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  last_name = last_name[0].toUpperCase() + last_name.slice(1).toLowerCase();
  alert(name + ' ' + last_name);
}


