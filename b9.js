let a = parseInt(prompt("Nhập a:"));
let b = parseInt(prompt("Nhập b:"));
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0 || a > b) {
    console.log("Nhập sai rồi.");
} else {
    for (let i = a; i <= b; i++) {
        let num = i;
        let digitSet = new Set();

        let hasDigits = true;

        while (num > 0) {
            let digit = num % 10;

            if (digitSet.has(digit)) {
                hasDigits = false;
                break;
            } else {
                digitSet.add(digit);
            }

            num = Math.floor(num / 10);
        }

        if (hasDigits) {
            console.log(i);
        }
    }
}