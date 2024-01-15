let userInput = prompt("Nhập vào một số:");
let number = parseInt(userInput);
if (isNaN(number) || number < 0) {
    console.log("Giá trị không hợp lệ. Vui lòng nhập một số không âm.");
} else {
    var squareRoot = Math.sqrt(number);
    if (squareRoot === Math.floor(squareRoot)) {
        console.log(number + " là số chính phương.");
    } else {
        console.log(number + " không phải là số chính phương.");
    }
}