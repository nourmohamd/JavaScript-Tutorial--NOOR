// Start Javascript Code
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d)));

// Use Variable a + d One Time To Get The Needed Output : 10000
console.log(Math.pow(a, Math.round(d)));

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(+d.toFixed(0));
console.log(Number.parseInt(d));
console.log(Math.floor(d));

// Use Variables b + d To Get The Values
console.log(+(Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67
console.log(Math.round((Math.floor(b) / Math.ceil(d)).toFixed(2))); // 67
