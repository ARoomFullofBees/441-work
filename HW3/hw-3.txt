// Prob 1

console.log(typeof 1);
console.log(typeof "Hello world!");
console.log(typeof false);



// Prob 2

var number = " ";
for (var i = 0; i < 10; i++) {
console.log(number += "#");
}



// Prob 3

for (var i = 0; i < 100; i++) {
let count = "";
var number = i + 1;
if (number % 3 == 0) {
count = "fizz";
}
if (number %5 == 0) {
count = "buzz";
}
if (!count) {
count = (i+1);
}
console.log(count);
}
