var argvLength = process.argv.length;
var sum = 0;

for (i = 2; i < argvLength; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
