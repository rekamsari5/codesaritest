'use strict';// soal nomer 1
const readline = require("readline-sync")

let input  = readline.question('Menampilkan bilangan cacah kelipatan 3 atau 7 sebanyak N? ');

let kelipatan = []

for(let j=3; j<=1000; j++){
    if((j%3==0)||(j%7==0)){
       if((j%3)===0 & (j%7 ===0)){
           kelipatan.push("z")
       }else{
           kelipatan.push(j)
       }
    }
}
let hasil = []
for(let i = 0; i <input; i++)
{
    hasil.push(kelipatan[i])
}
console.log(hasil)




