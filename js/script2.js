const daftarProduk = [
  { nama: "Minyak Goreng", harga: 42000, stock: 46 },
  { nama: "Beras", harga: 12000, stock: 30 },
  { nama: "Gula", harga: 15000, stock: 25 },
];

console.log(daftarProduk);

function menghitungDiscount(totalBelanja) {
  let discount = 0;
  if (totalBelanja >= 100000) {
    discount = totalBelanja * 0.1;
  } else if (totalBelanja >= 50000) {
    discount = totalBelanja * 0.05;
  } else {
    discount = 0;
  }
  return discount;
}

console.log(
  `Harga Beli 130.000 dapat discount : ${menghitungDiscount(130000)}`,
);
console.log(`Harga Beli 75.000 dapat discount : ${menghitungDiscount(75000)}`);
// switch : nyari tau metode pembayaran
// for..of : hitung satu total

// let metodeBayar = "qris";
function metodeBayar(metode) {
  let biayaAdmin = 0;
  switch (metode) {
    case "cash":
      biayaAdmin = 0;
      break;
    case "transfer":
      biayaAdmin = 3000;
      break;
    case "qris":
      biayaAdmin = 2500;
      break;
    default:
      biayaAdmin = 0;
  }
  return biayaAdmin;
}

console.log(`Biaya Admin untuk pembayaran cash: ${metodeBayar("cash")}`);
console.log(
  `Biaya Admin untuk pembayaran transfer: ${metodeBayar("transfer")}`,
);
console.log(`Biaya Admin untuk pembayaran qris: ${metodeBayar("qris")}`);

let totalHarga = 0;
for (const produk of daftarProduk) {
  totalHarga += produk.harga * produk.stock;
}
console.log(`Total Harga: ${totalHarga}`);
