
## Getting Started
- You must have been installed node js version v12.18.0.
- You must have been installed Node library : readline-sync


## Usage Test Logic
- Usege
- Soal 1 (file index.js)
```bash
usage: index.js
        - let input  = readline.question('Menampilkan bilangan cacah kelipatan 3 atau 7 sebanyak N? ');
        node index.js\ 
        - Menampilkan bilangan cacah kelipatan 3 atau 7 sebanyak N? 13
        -- Hasil = [
                        3,  6,  7,   9,  12, 14,
                        15, 18, 'z', 24, 27, 28,
                        30
                    ]
```
- Soal 3 (file soal3.js)
```bash
usage: soal3.js
        - let ticket  = readline.question('Input Password ? ');
        node soal3.js\ 
        - Input Password ? S@nd!wara419
            -- Output = Tidak boleh memiliki 3 angka berurutan
        - Input Password ? S@ndiwar4
            -- Harus memiliki 2 atau lebih simbol
        - Input Password ? S@nd1w4r3#
            --  Kata sandi valid
```
- Soal 4 (file soal4.js)
```bash
usage: soal4.js
        - let num  = readline.question('input (contoh 5 2 8 4 3 10 input with spasi) ? '); 
                    //5 2 8 4 3 10 input with spasi untuk bilangan cacah terkecil yang tidak ada
        node soal4.js\ 
        - input (contoh 5 2 8 4 3 10 input with spasi) ? 5 2 8 4 3 10
             -- Output =   6  
```
- Soal 5 (file soal5.js)
```bash
usage: soal5.js
        - let n = readline.question("Nilai N?")
        node soal4.js\ 
        - Nilai N?2
            -- Output = Bilangan harus ganjil 
        - Nilai N?3
            -- Output = * * * 
                        * * * 
                        * * * 
```
## Usage TES BACKEND (MySQL Query)
- File hasil screenshots nama file = Hasil_test_backend.docx
- Query  nama file = querytestbackend.txt



