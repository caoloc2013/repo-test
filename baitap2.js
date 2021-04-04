// Đầu vào:
var n = 235;

// Giải thuât
// Math.floor(x): làm tròn xuống, 2.35 => 2
var hangTram = Math.floor(n / 100);

var hangChuc = Math.floor((n % 100) / 10);

var hangDonVi = n % 10;

// Đầu ra
var tong = hangTram + hangChuc + hangDonVi;
console.log("Tổng: ", tong);

// Đầu vào: 235 => Đầu ra 532
var daoNguoc = hangDonVi * 100 + hangChuc * 10 + hangTram;
console.log("Đảo ngược: ", daoNguoc);
