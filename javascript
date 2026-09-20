let jumlah = parseInt(prompt("jumlah pengunjung:"));
let total = 0;

for (let i = 1; i <= jumlah; i++) {
    let usia = parseInt(prompt("usia pengunjung ke-" + i + ":"));

    if (usia < 5) {
        total += 0;
    } else if (usia <= 12) {
        total += 5;
    } else if (usia <= 59) {
        total += 10;
    } else {
        total += 7;
    }
}

let promo = prompt("masukkan kode promo:");

let diskon = 0;

if (jumlah >= 5 && promo == "diskon10") {
    diskon = total * 0.10;
}

let hargaAkhir = total - diskon;

console.log("jumlah tiket: " + jumlah);
console.log("total harga: $" + total);
console.log("diskon: $" + diskon);
console.log("harga akhir: $" + hargaAkhir);
