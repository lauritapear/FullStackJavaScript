var numbers = [
  1,
  2,
  3,
  4,
  5
];

var sum= 0;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < numbers.length; i ++) {
  sum = numbers[i] + sum;
}

html = "Hey! the sum of the numbers in the array is " + sum

print(html);
