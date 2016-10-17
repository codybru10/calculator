var myVar = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Pick a number:"));
var number2 = parseInt(prompt("And another number:"));
var result = myVar(number1, number2);
alert(result);
