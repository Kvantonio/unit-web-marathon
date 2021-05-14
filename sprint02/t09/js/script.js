function getFormattedDate(dateObject) {
  let res = ''  //.${dateObject.getMonth()}.${dateObject.getYear()}`;
  res+= (dateObject.getDate() < 10) ? `0${dateObject.getDate()}` : dateObject.getDate();
  res+='.'
  res+= (dateObject.getMonth()+1 < 10) ? `0${dateObject.getMonth()+1}` : dateObject.getMonth()+1;
  res+='.'
  res+=  dateObject.getFullYear();

  res+=" ";
  res+= (dateObject.getHours() < 10) ? `0${dateObject.getHours()}` : dateObject.getHours();
  res+=":";
  res+= (dateObject.getMinutes() < 10) ? `0${dateObject.getMinutes()}` : dateObject.getMinutes();
  res+=" ";
  let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  res+=days[dateObject.getDay()]
  return res;
}

/*
let constdate0 = new Date(1993, 11, 1);
let constdate1 = new Date(1998, 0, -33);
let constdate2 = new Date('42 03:24:00');

console.log(getFormattedDate(constdate0));
console.log(getFormattedDate(constdate1));
console.log(getFormattedDate(constdate2));
*/