// const toDoList = ["Go for a run", "Walk the dog"];

// let action = prompt("Please choose an action:");

// while (action !== "quit" && action !== "q") {
//     if (action === "new") {
//         const addToDo = prompt("Enter toDo:")
//         toDoList.push(addToDo);
//         console.log(`${addToDo} has been added to #${toDoList.length - 1} on the list.`)
//         action = prompt("Please choose an action:");
//     } else if (action === "list") {
//         console.log(" ***** ***** ***** ");
//         for (let i = 0; i < toDoList.length; i++) {
//             console.log(`#${i}: ${toDoList[i]}`);   
//         }
//         console.log(" ***** ***** ***** ");
//         action = prompt("Please choose an action:");
//     } else if (action === "delete") {
//         const remove = parseInt(prompt("Remove which toDo:"));
//         if (!Number.isNaN(remove)) {
//             const deleted = toDoList.splice(remove, 1);
//             console.log(`You have deleted item #${remove} ${deleted[0]} from the list.`);
//         }
//         action = prompt("Number not valid, Please choose an action:");
// } else {
//         action = prompt("Please choose an action:");

//     }
// }

//     console.log("Exiting App");

// const nemo = ['nemo'];
// const large = new Array(100).fill('nemo');

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log('Found Nemo!');
//         }
//     }
// }

// findNemo(large);

// const boxes = [1, 2, 3, 4, 5];

// function logPairs(boxes) {
//     for (let i = 0; i < boxes.length; i++) {
//         for (let j = 0; j < boxes.length; j++) {
//             console.log(`${boxes[i]} ${boxes[j]}`);
//         }
//     };
// }

// logPairs(boxes);

// const scores = [
//     60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44,
// ];

// function displayScores(scores) {
//     let highScore = 0;
//     let highScoreIndex = [];
//     for (let i = 0; i < scores.length - 1; i++) {
//         console.log(`Bubble solution #${[i]} score: ${scores[i]}`);
//         if (highScore < scores[i]) {
//             highScore = scores[i];
//         }
//     }
//     console.log(`Highest bubble score: ${highScore}`);
//     for (let i = 0; i < scores.length - 1; i++) {
//         if (highScore === scores[i]) {
//             highScoreIndex.push(`#${[i]}`);
//         }
//     }
//     highScoreIndex.map(i => console.log(`Solutions with the highest score: ${i}`));
// }

// function displayLength(scores) {
//     console.log(`Bubble tests: ${scores.length}`)
// }

// displayScores(scores);
// displayLength(scores);

// const string = "Hello world"

// function reverseString() {
//     const stringArray = string.split("");
//     stringArray.reverse();
//     const stringreverse = stringArray.join("");
//     console.log(stringArray);
//     console.log(stringreverse);
// }

// reverseString(string);

// function mergeSortedArrays(arr1, arr2) {
//     const mergedArrays = [...arr1, ...arr2];
//     mergedArrays.sort((a, b) => a - b);
//     console.log(mergedArrays);
// }

// mergeSortedArrays([0, 3, 4, 31, 123,], [4, 6, 30]);

var longestCommonPrefix = function (strs) {
    let commonPrefix = '';
    let lastCommonPrefix = strs[0];

    if (lastCommonPrefix === "") {
        return lastCommonPrefix;
    }

    for (let i = 0; i < strs.length; i++) {
        if (strs[i + 1] === undefined) {
            break;
        }
        commonPrefix = '';
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][0] !== strs[i + 1][0] || strs[i + 1] === "") {
                return lastCommonPrefix = '';
            }
            if (strs[i][j] === strs[i + 1][j]) {
                commonPrefix += strs[i][j];
            }
            else if (strs[i][j] !== strs[i + 1][j]) {
                break;
            }

            lastCommonPrefix = commonPrefix;

        }
    }
    console.log(lastCommonPrefix);
};

longestCommonPrefix(["", "a", "a"]);
