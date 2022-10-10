// 1. Sum all the values from an array
const numbers = [1, 5, 6, 7, 9];
const sum = numbers.reduce((x, y) => x + y);
console.log(sum);


//2. Reduce the length of an array using an array length property
const array1 = [111, 112, 113, 114, 115];
console.log(array1.length);
array1.length = 3;
console.log(array1);


// 3. Shuffling of array elements
const array2 = [111, 112, 113, 114, 115, 116, 505, 404, 202, 909];
console.log(array2.sort(() => Math.random() - 0.5));


// 4. Filtering of unique values
const array3 = [111, 112, 112, 114, 114, 116, 505, 404, 404, 909];
const unique = [...new Set(array3)];
console.log(unique);


// 5. Comma Operator
let x = 1;
x = (x++, x);
console.log(x);

x = (4, 5);
console.log(x);


// 6. Swaping of the values using array destructuring
let x1 = 9, y1 = 6;
[x1, y1] = [y1, x1]
console.log(x1) //6
console.log(y1) //9


// 7. Replace if true statements with &&
let a = 5, b = 9;
if (a < b) {
    console.log("Hello World!");
}

let c = 5, d = 9;
(c < d) && console.log("Hello World!");