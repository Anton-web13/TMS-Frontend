// const createFakeRequest = (value, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         }, delay);
//     });
// };
//
// // const loadData = (requestFn, timeout) => {};
// //
// // const request = createFakeRequest("Answer from server", 6000);
// //
// // loadData(request, 3000);
//
// const processRequest = async (requestFn, timeout) => {
//     const rejection = new Promise((_, reject) => {
//         setTimeout(() => {
//             reject(new Error("xdflgkjxhdbfg"));
//         }, timeout);
//     });
//
//     return Promise.race([requestFn, rejection])
//         .then((result) => {
//             console.log(result)
//         })
//         .catch((error) => {
//             console.log(error.message)
//         })
// }
//


// const numbersArray = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
//
// const newArray = (numbers) => {
//     for (const key in numbers) {
//         if (key === 0 || key === "0") {
//             numbers[numbers.length] = key;
//         }
//     }
//
//     return numbers
//     // console.log(numbers.length - 1);
// };
//
// console.log(newArray(numbersArray))



// const dummyData = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
// const solution = (array) => {
//     const numbers = [];
//     const zeros = [];
//
//     for (const item of array) {
//         if (item === 0 || item === "0") {
//             zeros[zeros.length] = item;
//         } else {
//             numbers[numbers.length] = item;
//         }
//     }
//
//     return [...numbers, ...zeros]
// };
//
// console.log(solution(dummyData));



// const numbers = [5, 8, 6, 3, 4];
// const oddNumbers = (arr) => {
//     const odd = arr.filter(i => i%2 !== 0).sort();
//     let i = 0,
//         result = [];
//     arr.forEach(e => {
//         if (e%2 === 0) {
//             result.push(e)
//         } else {
//             result.push(odd[i]);
//             i++;
//         }
//     });
//
//     return result
// };
//
// console.log(oddNumbers(numbers));


// const testData = [5, 8, 6, 3, 4];
//
// const sortTheOdd = (nums) => {
//     const evenNums = nums.reduce((result, num, index) => {
//         if (num % 2 === 0) {
//             result.push({ value: num, index })
//         }
//         return result
//     }, [])
//
//     // return evenNums
//
//     const sortedOdds = nums.filter(num => num % 2 !== 0).sort((a, b) => a - b);
//
//     evenNums.forEach(({ value, index}) => {
//         sortedOdds.splice(index, 0, value)
//     })
//
//     return sortedOdds
// };
//
// console.log(sortTheOdd(testData))





// DOM

// const greetinsBlock = document.getElementById("inigueInetifer");
// // // const greetinsBlock = document.getElementsByClassName()
// // // const greetinsBlock = document.getElementsByTagName()
// // // const greetinsBlock = document.querySelector()
// // // const greetinsBlock = document.querySelectorAll()
// //
// console.log(greetinsBlock);

// addEventListener("DOMContentLoaded", (event) => {
//     const greetinsBlock = document.getElementById("inigueInetifer");
//     console.log(greetinsBlock);
// })

// for (const item of greetinsBlock) {
//     console.log(item)
// }


// const greetinsBlock = document.getElementById("greetings");
// const greetinsBlock = document.getElementsByTagName("div");

// const greetinsBlock = document.querySelector("div")
// const greetinsBlock = document.querySelectorAll(".greetings")
// const greetinsBlock = document.querySelectorAll("#inigueInetifer, p")
const greetinsBlock = document.querySelector(".greetings");

// greetinsBlock.style.background = "black";

// console.log(greetinsBlock.getAttributeNames()[0])

greetinsBlock.classList.remove("anthorBackground");
// greetinsBlock.classList.add("anthorBackground");

console.log(greetinsBlock);




