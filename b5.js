let inputA = prompt("Nhập a:");
let inputB = prompt("Nhập vào hệ số b:");
let a = parseFloat(inputA);
let b = parseFloat(inputB);
if (isNaN(a) || isNaN(b)) {
    console.log("Nhập sai rồi.");
} else {
    if (a === 0) {
        if (b === 0) {
            console.log("Phương trình có vô số nghiệm.");
        } else {
            console.log("Phương trình vô nghiệm.");
        }
    } else {
        let x = -b / a;
        console.log("Nghiệm của phương trình là x = " + x);
    }
}