// // const a = 15;
// // const b = 19;

// console.log(a, b);

// const sfasrf = Symbol(123);

// console.log(typeof a);

// // function sayHello () {
// //     if (a > b) {
// //         console.log('Hello World')
// //     }
// // }

// // sayHello();

// const firstNumber = 11;
// const secondNumber = 59;

// function calcilateSum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// // calcilateSum(firstNumber, secondNumber);
// // calcilateSum(1, 2);

// const sumOfOneAndTwo = calcilateSum(1, 2);

// console.log(sumOfOneAndTwo);

// console.clear();

// function sumValue(a, b) {
//     // if (a > b) {
//     //     console.log('A is the winner')
//     // } else {
//     //     console.log('B is the winner')
//     // }

//     if (a < b) {
//         console.log('A is the winner');
//         return;
//     }
    
//     console.log('B is the winner')
// }

// sumValue(1, 5);

// console.clear();

function someFunction (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return 'One'
}
console.log(someFunction(1, 'string'));

console.log(!!'sdfgsdg');