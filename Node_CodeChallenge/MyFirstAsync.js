var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log((data.toString().split("\n").length) - 1);
});
