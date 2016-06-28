var fs = require('fs');
var data = fs.readFileSync(process.argv[2]);
var split_lines = data.toString().split("\n");
console.log(split_lines.length - 1);
