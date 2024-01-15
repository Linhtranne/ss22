let inputA = prompt("Nhập vào số a:");
var inputB = prompt("Nhập vào số b:");
let a = parseInt(inputA);
var b = parseInt(inputB);
if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập vào các số hợp lệ.");
} else {
    if (a % b === 0) {
        console.log(a + " chia hết cho " + b);
    } else if (b % a === 0) {
        console.log(b + " chia hết cho " + a);
    } else {
        console.log("Không có số nào chia hết cho số kia.");
    }
}
