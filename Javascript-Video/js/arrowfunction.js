let fungsi = function (nama) {
    console.log("Belajar Function " + nama);
}

fungsi ("Joni");

let contoh = (nama) => {
    console.log("Belajar Function " + nama);
};

contoh ("Budi");

let tambah = function (a, b) {
    return a + b;
}

console.log(tambah(2, 3));

let plus = (a, b) => a + b;

console.log(plus(2, 3));

let hasil = (a) => a * 2;

console.log(hasil(4));

let lagi = ()=>console.log("Coba Lagi");

lagi();

let belajar=()=>{
    console.log("Baris Satu")
    console.log("Baris Dua")
    console.log("Baris Tiga")
    console.log("Baris Selanjutnya")
};

belajar();

let nilai = 6;

let uji = nilai < 7 ? () => Predikat = "Gagal":() => Predikat = "Berhasil";
console.log(uji());