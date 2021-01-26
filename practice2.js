/* ====== #3 print window ====== */

// document.getElementById("print").onclick = function () {
//     window.print();
// }


/* ===== output current date ===== */


let currentDay = new Date();

let dayOfMonth = currentDay.getDate();
let month = currentDay.getMonth() + 1;
let year = currentDay.getFullYear();

document.getElementById("display-date").onclick = function () {
    if (month < 10)
        month = "0" + month;
    if (dayOfMonth < 10)
        dayOfMonth = "0" + dayOfMonth
    alert("Today's date is " + month + " / " + dayOfMonth + " / " + year);
}

console.log(currentDay);
console.log(dayOfMonth);
console.log(month);
console.log(year);
