'use strict';
const readline = require("readline-sync")

let num  = readline.question('input (contoh 5 2 8 4 3 10 input with spasi) ? '); //5 2 8 4 3 10 input with spasi
let digits = num.toString().split(' ');
let realDigits = digits.map(Number)
    realDigits.sort(function(a, b) {
    return a - b;
  });
let min = Math.min.apply(Math, realDigits)
let ref = {};
for (const value of realDigits) {
    if (value < min) continue;
    ref[value] = true;
    while (ref[min]) min++;
}

console.log(min);
     