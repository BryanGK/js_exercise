const array1 = [1, 2, 3, 4, 5, 8];
const array2 = [2, 4, 6, 8, 3];

const collision = (arr1, arr2) => {
    let hashTable = {};
    let result = [];

    arr1.forEach(element => {
        hashTable[element] = true;
    });

    arr2.forEach(element => {
        if (hashTable[element])
            result.push(element)
    })

    return result;
}

console.log(collision(array1, array2));

const strArray1 = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'e'];

const duplicates = (arr) => {
    let hashTable = {};
    let duplicate = [];

    arr.forEach((element) => {
        hashTable[element] ? duplicate.push(element) : hashTable[element] = true;
    })
    return duplicate

}

console.log(duplicates(strArray1));