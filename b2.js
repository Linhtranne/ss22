let inputSide1 = prompt("cạnh thứ nhất:");
let inputSide2 = prompt("cạnh thứ hai:");
let inputSide3 = prompt("cạnh thứ ba:");
let side1 = parseFloat(inputSide1);
let side2 = parseFloat(inputSide2);
let side3 = parseFloat(inputSide3);
if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
    console.log("Độ dài cạnh không hợp lệ.");
} else {
    // Kiểm tra xem 3 cạnh có tạo thành tam giác không
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        console.log("có thể tạo thành một tam giác.");
    } else {
        console.log("không thể tạo thành một tam giác.");
    }
}