// const string = "Hi My name is Andrei";

// function reverse(string) {
//     return string.split('').reverse().join('');
// }

// const reverse2 = string => string.split('').reverse().join('');


// console.log(reverse(string));
// console.log(reverse2(string));

// const array1 = [];
// const array2 = [0, 3, 4, 31, 34, 87];

// const mergeSortedArrays = (arr1, arr2) => {
//     const output = [];
//     let idx1 = 0;
//     let idx2 = 0;
//     let arr1Item = arr1[idx1];
//     let arr2Item = arr2[idx2];

//     for (let i = 0; i < arr1.length + arr2.length; i++) {
//         if (arr1Item < arr2Item || arr2Item === undefined) {
//             output.push(arr1Item);
//             idx1++;
//             arr1Item = arr1[idx1];
//         } else {
//             output.push(arr2Item);
//             idx2++;
//             arr2Item = arr2[idx2];
//         }
//     }

//     console.log(output);
// }

// mergeSortedArrays(array1, array2);


// const isSubsequence = (subSequence, sequence) => {
//     let subSequenceResult = '';
//     let j = 0;

//     for (let i = 0; i < subSequence.length; i++) {
//         j = i;
//         if (subSequence[i] === sequence[i])
//             subSequenceResult += subSequence[i];
//         else {
//             while (j < sequence.length) {
//                 if (subSequence[i] !== sequence[j]) {
//                     j++;
//                 } else if (subSequence[i] === sequence[j]) {
//                     subSequenceResult += subSequence[i];
//                     j = sequence.length + 1;
//                 }
//             }
//         }
//     }
//     return subSequenceResult === subSequence ? true : false;
// }

// function isSubsequence(str1, str2) {
//     if (str1.length === 0) return true;

//     let i = 0;
//     let j = 0;

//     while (j < str2.length) {
//         if (str1[i] === str2[j]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;

// }


// console.log(isSubsequence('abc', 'acb')) //=> false (order matters)
// console.log(isSubsequence('hello', 'hello world')); //=> true
// console.log(isSubsequence('sing', 'buttsstridngger')); //=> true
// console.log(isSubsequence('sing', 'string')) //=> false (order matters)
// console.log(isSubsequence('ring', 'bringer')) //=> false (order matters)
// console.log(isSubsequence('crap', 'craneop')) //=> false (order matters)
// console.log(isSubsequence('gift', 'grifter')) //=> false (order matters)
// console.log(isSubsequence('abc', 'abracadabra'))

// var maxSubArray = function (nums) {
//     let largestSum = 0;
//     let runningTotal = 0;

//     for (let i = 0; i < nums.length; i++) {
//         runningTotal = nums[i];
//         largestSum = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             runningTotal += nums[j];
//             if (runningTotal > largestSum) {
//                 largestSum = runningTotal;
//             }
//         }
//     }
//     return largestSum;
// };

// var maxSubArray = function (nums) {
//     let currentMax = nums[0], max = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         currentMax = Math.max(nums[i], currentMax + nums[i]);
//         max = Math.max(currentMax, max);
//     }
//     return max;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// var arrayPairSum = function (nums) {
//     let number = 0;
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i += 2) {
//         number += nums[i];
//     }
//     return number
// };

// console.log(arrayPairSum([1, 4, 3, 2]));

function repeatedString(string, n) {
    let result = 0;

    const remainder = n % string.length;

    result += Math.floor(n / string.length * checkString(string, string.length));
    result += checkString(string, remainder);

    return result;
}

function checkString(string, num) {
    let counter = 0;
    for (let i = 0; i < num; i++) {
        if (string[i] === 'a')
            counter++
    }

    return counter;
}

console.log(repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570)); 16481469408