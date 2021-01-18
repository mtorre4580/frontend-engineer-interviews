/*
    Array examples actions to replicate

    1) Copy array
    2) Insert item in a position
    3) Pop item in an index

*/

// Copy array
const array = [1,3,4];

// With spread operator
const arrayClone = [...array];

// Without operators
function copyArray(array) {
    const copy = [];
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        copy.push(value);
    }
    return copy;
}

copyArray(array);

// Insert item in a position

// With splice function
array.splice(1,0, 2);

// Without operators
function insertInPosition(array, item, position) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (i === position) {
            newArray.push(item);
            newArray.push(value);
        } else {
            newArray.push(value);
        }
    }
    return newArray;
}

// Pop item in an index

// With splice function
array.splice(2, 1);