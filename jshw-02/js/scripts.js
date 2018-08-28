'use strict';
let userInput;
const numbers = [];
let total = 0;

while (true) {
  var value = prompt("Введите любое число", '');
  if (value === "" || value === null || isNaN(value)) break;
  numbers.push(+value);
}
  for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
  alert(total);

