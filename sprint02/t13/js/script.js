function Calculator() {
  this.result = 0;
}

Calculator.prototype.init = function (number) {
  this.result = number;
  return this;
}
Calculator.prototype.add = function (number) {
  this.result += number;
  return this;
}
Calculator.prototype.sub = function (number) {
  this.result -= number;
  return this;
}
Calculator.prototype.mul = function (number) {
  this.result *= number;
  return this;
}
Calculator.prototype.div = function (number) {
  this.result /= number;
  return this;
}
Calculator.prototype.alert = function () {
  setTimeout(alert, 5000, this.result);
}


/*
const calc = new Calculator();
console.log(calc.init(2).add(2).mul(3).div(4).sub(2).result);
  
calc.alert();
*/