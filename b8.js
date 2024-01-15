let length = parseInt(prompt("Nhập chiều dài:"));
let width = parseInt(prompt("Nhập chiều rộng:"));
if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    console.log("Nhập sai rồi.");
} else {
    let minSide = Math.min(length, width);
    let minSquares = Math.floor(length / minSide) * Math.floor(width / minSide);
    console.log("Số hình vuông tối thiểu có thể cắt từ hình chữ nhật là: " + minSquares);
}