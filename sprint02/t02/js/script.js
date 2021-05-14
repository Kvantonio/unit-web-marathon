var name = prompt("What animal is the superhero most similar to?");



if (name.length > 20 || !((/^[a-zA-Z_]*$/).test(name))) {
  alert("Bad");
} else {
  var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
  if (!(/^male$|^female$/.test(gender)) && gender.length != 0) {
    alert("Bad2");
  }
  else {
    var old = prompt("How old is the superhero");
    if (old.length > 5 || !((/^[0-9]*$/).test(old)) || old == 0) {
      alert("Bad3");
    }
    else {
      if (gender === 'male' && old < 18) {
        alert(`The superhero name is: ${name}-boy`);
      }
      else if (gender === 'male' && old >= 18) {
        alert(`The superhero name is: ${name}-man`);
      }
      else if (gender === 'female' && old < 18) {
        alert(`The superhero name is: ${name}-girl`);
      }
      else if (gender === 'femail' && old >= 18) {
        alert(`The superhero name is: ${name}-woman`);
      }
      else if (gender === '' && old >= 18) {
        alert(`The superhero name is: ${name}-hero`);
      }
      else if (gender === '' && old < 18) {
        alert(`The superhero name is: ${name}-kid`);
      }
    }

  }
}


