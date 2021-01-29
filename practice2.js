/* ====== #3 print window ====== */

// document.getElementById("print").onclick = function () {
//     window.print();
// }


/* =====  #3 output current date ===== */


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

// console.log(currentDay);
// console.log(dayOfMonth);
// console.log(month);
// console.log(year);


/* ===== #4 find the area of a triangle ===== */

let area = 0;

function findArea(a, b, c) {
    s = (a + b + c) / 2;
    return area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(findArea(5, 6, 7));


/* ===== #5 Shuffle an String ===== */

// I'm not even close to solving something like this

function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

/* ===== #6 Determine if its a leap year. ===== */

function isLeapYear(year) {
    if (year % 4 != 0) {
        return false;
    } else if (year % 100 != 0) {
        return true;
    } else if (year % 400 != 0) {
        return false;
    } else
        return true;
}

console.log(isLeapYear(2021));

// Their solution

// function leapYear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

/* ====== Eleoquent JS Data Structures ====== */

const range = function (x, y) {
    const numbers = Array.from({ length: (y - x)},
        (_, key) => key + 1);
    console.log(numbers);
}


// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

// console.log(range(1, 10));

range(5, 10);