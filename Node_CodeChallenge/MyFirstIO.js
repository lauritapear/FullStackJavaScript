var fs = require('fs');
var data = fs.readFileSync(process.argv[2]);
// console.log("Reading: " + data.toString());
var split_lines = data.toString().split("\n");
// console.log("Reading: " + split_lines.length);
console.log(split_lines.length - 1);
