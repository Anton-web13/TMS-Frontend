// const sum = function(a,b) {
//     return a+b;
// }
//
// console.log(sum(8,4));
// // const arrowSum = (a, b) => {
// //     return a+b;
// // }
//
// console.log(arguments)

// const someFunction = (fn) => {
//   console.log(fn());
//
// }
//
// someFunction( () => {
//     console.log('Hello, Ich bin hier');
//     return a+b;
// })
//
// const sum = (a,b) => a + b;
// someFunction(() => sum(1,2))


// const mumber = 5;
// const string = mumber.toString();
// const string2 = String(mumber);
// const string3 = `${mumber}`;



// const string = '55';
// const number1 = Number(string);
// const number2 = string;
// console.log(number2);



// map, filter, reduce, forEach (новый массив, немутирующий)
// find, findIndex

// map
// const doubleNumbers = (numbers) => {
//
//     if (!Array.isArray(numbers)) {
//         return;
//     }
    // if (Array.isArray(numbers)) {
    //     const result = numbers.map((currentElement) => currentElement.toString());
    //     return result;
    // }

    // return numbers.map((number) => number.toString());

    // const result = numbers.map((currentElement, index, currentArray) => {
    //     // console.log('Fisrt argument', currentElement)
    //     // console.log('Second argument', index)
    //     // console.log('Third argument', currentArray)
    //     return currentElement.toString();
    // })

// }

// const array = [1,2,3];
// console.log(doubleNumbers([1,2,3]));
// console.log(array);
// doubleNumbers([1,2,3])


// const doubleNumbers2 = (numbers) => {
//     const result = [];
//
//     for (let i = 0; i < numbers.length; i++) {
//         result.push(numbers[i])
//     }
//     return result
// }
// console.log(doubleNumbers2([1,2,3]));



// const matrix = [[1,2], [1,5], [4,5,6]];
// console.log(matrix[2][1]);

// console.clear();



//
// // filter
// const nums = [1,2,3,4,5,8]
// const filterNums = (numbers) => {
//     if (!Array.isArray(numbers)) {
//         return;
//     }
//
//     // const result = numbers.filter((number) => {
//     //     return number === 3;
//     // })
//
//     return numbers.filter((number) => {
//         return number === 3;
//     })
// }
//
// console.log(filterNums(nums));
//
// const filterNumsWithFor = (numbers) => {
//     const result = [];
//
//     for (const number of numbers) {
//         if (number > 3) {
//             result.push(number)
//         }
//     }
//
//     return result;
// }
//
// console.log(filterNumsWithFor(nums))
//
//
//
//
// //forEach
// const nums = [1,2,3,4,5,8];
// const filterNums = (numbers) => {
//     if (!Array.isArray(numbers)) {
//         return;
//     }
//
//     // const result = numbers.filter((number) => {
//     //     return number === 3;
//     // })
//
//     return numbers.filter((number) => {
//         return number === 3;
//     })
// }
//
// console.log(filterNums(nums));
//
//
// const filterNumsForEach = (numbers) => {
//     const result = [];
//     numbers.forEach((number) => {
//         if (number > 3) {
//             result.push(number)
//         }
//     })
//
//     return result;
// }
//
// console.log(filterNumsForEach([1,25,8,2,8,6,54,8,3,4,8]))




// find

// const muberstwo = ['Alex', 'Max', 'Vika', 'Petr']
//
// const findNum = (users, userToSearch) => {
//     const foundUser = users.find((user) => {
//         return user.toLowerCase() === userToSearch.toLowerCase()
//     });
//
//     if (foundUser) {
//         return foundUser;
//     }
//
//     return 'user not found!'
// }
//
// console.log(findNum(muberstwo, 'Alex'))



// findIndex

// const muberstwo2 = ['Alex', 'Max', 'Vika', 'Petr']
//
// const findNumfindIndex = (users, userToSearch) => {
//     const foundUserIndex = users.findIndex((user) => {
//         return user.toLowerCase() === userToSearch.toLowerCase()
//     });
//
//     if (foundUserIndex !== -1) {
//         return foundUserIndex;
//     }
//
//     return 'user not found!'
// }
//
// console.log(findNumfindIndex(muberstwo2, 'Alex'))





// const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

// my task my task my task my task my task my task my task my task

// const filterUserList = (users) => {
//     const allNames = [];
//
//     if (!Array.isArray(users)) {
//         return;
//     }
//
//     users.filter((user) => {
//         const numberToUpperCase = user.toUpperCase();
//         if (numberToUpperCase[0] !== 'M' && user[0] !== 'P') {
//             allNames.push(user)
//         }
//     })
//
//     return allNames;
// }
//
// console.log(filterUserList(userList));


// const filterUserList = (users) => {
//     const FIRST_LETTER = 'm';
//     const SECOND_LETTER = 'p';
//
//     if (!Array.isArray(users)) {
//         return;
//     }
//
//     return users.filter((user) => {
//         const firstLetter = user[0].toLowerCase();
//
//         return (
//             firstLetter !== FIRST_LETTER && firstLetter !== SECOND_LETTER
//         );
//     });
//
// };
//
// console.log(filterUserList(userList));


const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

// ['a','p']
// includes

const filterUserList = (users, letterUsers) => {
    if (!Array.isArray(users)) {
        return;
    }

    return users.filter((user) => {
        const firstUser = user[0].toLowerCase();

        for (const letter of letterUsers) {
            if (firstUser.includes(letter)) {
                return;
            }
        }

        return user;

    });

};

console.log(filterUserList(userList, ['a','p']));





