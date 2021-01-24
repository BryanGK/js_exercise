// let i = 0
// while (i < 3) {
//     alert(i);
//     i++
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// for (let i = 2; i < 10; i++) {
//     if (i % 2  == 0) 

//     alert(i);
// }

// let i = 0;

// while (i < 3) {
//     alert('number ' + i);
//     i++
// }

// for (i = 0; i <= 100;) {
//     i = prompt("Enter a number greater than 100", 0);
//     if (i > 100) {
//         break;
//     }
// }

/* FizzBuzz */


// function fizzBuzz(num) {
//     let count = num;
//     for (let i = 0; i <= count; i++) {
//         if (num % 3 == 0 && num % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if (num % 3 == 0) {
//             console.log("Fizz");
//         } else if (num % 5 == 0) {
//             console.log("Buzz");
//         }
//         num--;
//     }
// }

// fizzBuzz(100);

// const person = {
//     name: {
//         first: 'Bob',
//         last: 'Smith'
//     },
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function () {
//         alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' +
//             this.interests[0] + ' and ' + this.interests[1] + '.');
//     },
//     greeting: function () {
//         alert('Hi! I\'m ' + this.name[0] + '.');
//     }
// };

// person.age = 45;
// person['name']['last'] = 'Cratchit';

// person['eyes'] = 'Hazel';
// person.farewell = function () {
//     alert('Bye everybody!');
// }

// let myDataName = 'Height';
// let myDataValue = '1.75m';
// person[myDataName] = myDataValue;

function Person(name) {
    this.name = name;
    this.greeting = function () {
        alert("Hi! I\'m " + this.name + '.');
    };
}

let person1 = new Person("Bob");
let person2 = new Person("Sarah");




