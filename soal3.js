'use strict';
const readline = require("readline-sync")

let ticket  = readline.question('Input Password ? ');
var reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{8,32}$/) // Kata sandi minimal 8 karakter, max 32
var reg2 =  new RegExp(/(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/) // Harus memiliki 2 atau lebih simbol
var reg3 = new RegExp(/\d{3,}/)

if (reg.test(ticket)==false) {
  console.log('Kata sandi minimal 8 karakter, max 32 & Karakter awal tidak boleh angka');
}else{
    if (reg2.test(ticket)==false){
        console.log('Harus memiliki 2 atau lebih simbol');
    }else{
        if (reg3.test(ticket)==true){
            console.log('Tidak boleh memiliki 3 angka berurutan');
        }else{
            console.log('Kata sandi valid')
        }
    }
}