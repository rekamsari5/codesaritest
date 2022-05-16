'use strict';
const readline = require("readline-sync")
let n = readline.question("Nilai N?")

    let hasil = ''
    if(n%2 == 0){
        console.log("Bilangan harus ganjil")
    }else{
        for (let i = 0; i < n; i++) {
            if(n == 3){
                for (let j = 0; j < n; j++) {
                    hasil += '* ';
                }
                hasil += '\n';
            }
        }
        console.log(hasil);
    }

// Hanya bisa Menampilkan hasil Nilai 2 dan Nilai 3
