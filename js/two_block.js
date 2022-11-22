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

// function someFunction (a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }
//     return 'One'
// }
// console.log(someFunction(1, 'string'));

// console.log('sdfgsdg');

// const someString = "Hello";
// // let someString = "Hello";

// const firstLetter = someString[0];
// const lastLetter = someString[someString.length -1];
// console.log(firstLetter, lastLetter);

// const someStringe = function() {

//     const newValu = someString.toUpperCase()
//     return newValu;
// }

// console.log(someStringe());





// const someStringe = function() {

//     someString = someString.toUpperCase()

//     console.log(someString);
// }

// someStringe();

// console.log(someString);


// const hello = '    helo     oooolo            ';

// const someString = function() {
//     // console.log(hello);
//     // return hello.trim();
//     // return hello.trim();

//     // const newWord = hello.replace('o', 'Y');
//     const newWord = hello.replaceAll(' ', '').replaceAll('o', 'A');
//     return newWord;

// }

// console.log(someString())



// const globalVariable = 'Hello World';

// const someFumctions = function() {
//     const firstWorld = globalVariable.slice(0, 4);
//     const firstWorld2 = globalVariable.substring(0, 8);
//     const firstWorld3 = globalVariable.indexOf('l');
//     const firstWorld4 = globalVariable.indexOf('l', 4);

//     const firstWorld5 = globalVariable.slice(-globalVariable.length, -2);
//     const firstWorld6 = globalVariable.slice(-5, 11);
//     const firstWorld7 = globalVariable.slice(-5, globalVariable.length);
//     const firstWorld8 = globalVariable.charAt(150);

//     console.log(firstWorld, firstWorld2, firstWorld3, firstWorld4, firstWorld5, firstWorld6, firstWorld7, firstWorld8);
// }

// someFumctions()

// hello
// hElLo
// HELLO




//  1)
const helloOleg = function(value) {

    if(value === 'Mark') {
        console.log(`Hi, ${value}`)
    } else {
        console.log(`Hello, ${value}`)
    }
}

helloOleg('Pol');


//  2)
const hypotenuse = function(n, m) {

    const result = (n*n) + (m*m);
    console.log(Math.sqrt(result));
}

hypotenuse(4, 4);


// 3)
const min = function(a ,b) {
    let minValue = 0;
    let maxValue = 0;
    if(a < b) {
        minValue = a;
        maxValue = b;
    } else {
        minValue = b;
        maxValue = a;
    }

    console.log(minValue);
}

min(3, -1)

// 4 )
const isEven = function(value) {
    if(value % 2 === 0) {
        value = 'true';
    } else {
        value = 'false';
    }

    console.log(value);
}

isEven(98);

// 5)
const deleteChars = function() {
    const stringValue = 'Hello';
    console.log(stringValue.slice(1, -1));
}

deleteChars();

console.clear()

// 6)
const stringValue = function(value) {
    const resultOneLetter = value[0].toUpperCase();
    const resultAllLetter = value.slice(1).toLowerCase();
    const resultAllLetterWhitoutLastLetter = value.slice(0, -1).toLowerCase();
    let lastLetter = value.slice(value.length -1);

    if(value.length % 2 === 0) {
        lastLetter = lastLetter.toUpperCase();
        console.log(`${resultOneLetter}${resultAllLetterWhitoutLastLetter}${lastLetter}`);
    } else {
        console.log(`${resultOneLetter}${resultAllLetter}`);
    }

}

stringValue('helflo');











