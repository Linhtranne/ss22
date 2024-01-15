let inputNumber = prompt("Nhập vào một số có 4 chữ số:");
let number = parseInt(inputNumber);
if (isNaN(number) || number < 1000 || number > 9999) {
    console.log("Nhập sai rồi.");
} else {
    let thousands = Math.floor(number / 1000);
    let hundreds = Math.floor((number % 1000) / 100);
    let tens = Math.floor((number % 100) / 10);
    let units = number % 10;
    console.log("Chữ số hàng nghìn: " + thousands);
    console.log("Chữ số trăm: " + hundreds);
    console.log("Chữ số chục: " + tens);
    console.log("Chữ số đơn vị: " + units);
}