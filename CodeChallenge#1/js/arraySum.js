var numbers = [
  1,
  2,
  3,
  4,
  5
];

var sum= 0;
var arrayValue;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < numbers.length; i ++) {
  sum = numbers[i] + sum;
}

numbers.splice(2,0,6);

for (var i = 0; i < numbers.length; i ++) {
  arrayValue = numbers[i];
  // html += "array value " + arrayValue;
  console.log(arrayValue);
}

html = "Hey! the sum of the numbers in the array is " + sum;

print(html);
