// const { chartreuse } = require("color-name");

// const cyclesFunction = function() {
//     const string = 'Hello World';

//     let result = '';

//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];

//         if(char === char.toUpperCase()) {
//             result += char.toLowerCase;
//         } else {
//             result += char.toUpperCase;
//         }
//     }

//     // for (let i = string.length; i >= 0; i--) {
//     //     const char = string[i];

//     //     if(char === char.toUpperCase()) {
//     //         result += char.toLowerCase;
//     //     } else {
//     //         result += char.toUpperCase;
//     //     }
//     // }

//     // for (const char of string) {
//     //     console.log(char)
//     // }

//     // if(char.toLowerCase() === 'w') {
//     //     break;
//     // }
//     // // result += char;
//     return result;
// }

// console.log(cyclesFunction());








// for of


// const cyclesFunction = function() {
//     const string = 'Hello World';

//     for (let char in string) {

//         char = string[char]

//         console.log(char)

//     }
// }
// console.log(cyclesFunction());




// while

// const cyclesFunction = function() {
//     const string = 'Hello World';
//     let i = 0;

//     while (i < string.length) {
//         console.log(string[i]);
//         i++;
//     }
// }
// // console.log(cyclesFunction());
// cyclesFunction();





// do while

// const cyclesFunction = function() {
//     const string = 'Hello World';
//     let i = 0;

//     do {
//         const char = string[i];

//         console.log(char);
//         i++;
        
//     } while (i < string.length)
// }
// cyclesFunction();



// array

// const numbers = [1,2,3,4,5];
// numbers[0] = 'a';
// console.log(numbers);
// const arrayOfArrays = [[1,2], [6,2], [9,5], ['Hello']];




//  push, unshift, pop, schift, sort

// const users = [];

// users.push('2sfsr');
// users.push('Hello');
// users.push(1);
// console.log(users);
// users.pop();
// users.unshift(123);

// console.log(users);


// slice не мутирующий метод
// const result = users.slice(0 ,1);
// console.log(result);

// splice мутирующий метод
// const result = users.splice(2, 1, 4,5,7,6,9);
// console.log(result);
// console.log(users);






// split

const getCharArray = function(string) {
    // const result = [];

    // for (const char of string) {
    //     result.push(char);
    // }

    // return result

    return string.split('/')
}

// console.log(getCharArray('Hello I am'))
console.log(getCharArray('10/12/2022'))




// join 

const dates = ['10', '12', '2022']
const joinDates = function() {

    return dates.join('/');
}

console.log(joinDates())













