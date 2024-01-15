let n = parseInt(prompt("Nhập n:"));
if (isNaN(n) || n <= 0) {
    console.log("Nhập sai rồi.");
} else {
    console.log("Phân giải " + n + " thành tích của các số nguyên tố:");
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }
}