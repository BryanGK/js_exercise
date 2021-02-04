// const userInput = prompt("Enter something");

// if (userInput) {
//     console.log("Truthy")
// } else {
//     console.log("Falsey")
// }

// if (0) {
//     console.log("Truthy");
// } else {
//     console.log("Falsey");
// }

// if (1) {
//     console.log("Truthy");
// } else {
//     console.log("Falsey");
// }

// if (" ") {                      // truthy
//     console.log("Truthy");
// } else {
//     console.log("Falsey");
// }

// const password = prompt("Enter password");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password");
// } else {
//     console.log("Invalid Password");
// }

// const age = 10;

// if ((age >= 0 && age <= 5) || age >= 65) {
//     console.log("Free");
// } else if (age > 5 && age <= 10) {
//     console.log("$10")
// } else if (age > 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("Invalid Age")
// }

// const firstName = prompt("Enter your first name");
// if (!firstName) {
//     firstName = prompt("Enter your first name")
// }

// const age = 45;

// if (!(age >= 0 && age <= 5 || age >= 65)) {
//     console.log("Not baby or senior");
// }

// let maximum = parseInt(prompt("Enter the max number:"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number:"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;


// let guess = parseInt(prompt("Enter your guess:"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high, guess again:");
//     } else {
//         guess = prompt("Too low, guess again:");

//     }
// }
// if (guess === 'q') {
//     console.log("Quit");
// } else {
//     console.log("Congrats!");
//     console.log(`You got it! It took you ${attempts} guesses.`);
// }



// const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// function returnDay(dayNum) {
//     if (dayNum < 1 || dayNum > 7) {
//         return null;
//     }
//     return daysOfWeek[(dayNum - 1)];
// }

// console.log(returnDay(2));
const names = ["  tim  ", "  bety  ", "   gary   "];
// function cleanNames(names) {
//          return names.map(function (name) {
//         return name.trim();
//     });
// // }

// console.log(newArray);

const newArray = names.map(function (name) { 
    return name.trim();
});

console.log(newArray);