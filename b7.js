let a = parseInt(prompt("Nhập a:"));
let b = parseInt(prompt("Nhập b:"));
let c = parseInt(prompt("Nhập c:"));
let d = parseInt(prompt("Nhập d:"));
if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    console.log("Nhập sai rồi.");
} else {
    let bcnn = a;
    while (bcnn % b !== 0 || bcnn % c !== 0 || bcnn % d !== 0) {
        bcnn += a;
    }
    console.log("Bội chung nhỏ nhất của " + a + ", " + b + ", " + c + " và " + d + " là: " + bcnn);
}