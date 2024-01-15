let year = prompt("Nhập vào một năm:");
let inYear = parseInt(year);
if (!isNaN(inYear)) {
    if ((inYear % 4 === 0 && inYear % 100 !== 0) || inYear % 400 === 0) {
        console.log(inYear + " là năm nhuận.");
    } else {
        console.log(inYear + " không là năm nhuận.");
    }
} else {
    console.log("Nhập sai rồi.");
}