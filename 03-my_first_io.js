var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split("\n");
console.log(lines.length - 1);
