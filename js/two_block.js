// const superAnimal = {
//     vision: true,
// }
//
// const animal = {
//     eats: true,
// }
//
// const dog = {
//     bark: true,
// }
//
// animal.__proto__ = superAnimal;
// dog.__proto__ = animal;
//
// // console.log(dog);
// // console.log(dog.eats);
// // console.log(dog.vision);
//
// // Array.prototype
// // Array.prototype.map = null;
// // const x = [];
// // x.map(()=> {});
//
// // Array.prototype.log = function () {
// //     console.log("Hello")
// // }
// // const x = [];
// // x.log();
//
//
//
// // const user = {
// //     name: "Alex",
// //
// //     // hasOwnProperty() {
// //     //     console.log("And no!")
// //     // }
// // };
// //
// // const animal2 = {
// //     eats: true,
// // };
// //
// // const dog2 = {
// //     bark: true,
// // };
// //
// // // console.log(Object.hasOwnProperty())
// //
// // // user.hasOwnProperty(name);
// //
// // // console.log(user.hasOwnProperty("eats"));
// // // console.log(dog2.hasOwnProperty("eats"));
// //
// // dog2.__proto__ = animal;
// // console.log("eats" in dog2);
//
//
//
//
// // const megaAnimal = {
// //     live: true,
// //     x: 2,
// // };
// //
// // const superAnimal2 = {
// //     eats: true,
// // };
// //
// // const animal2 = {
// //     a: 1,
// //     x: 1,
// // };
// //
// // const dog2 = {
// //     bark: true,
// // };
// //
// // superAnimal2.__proto__ = megaAnimal;
// // animal2.__proto__ = superAnimal2;
// // dog2.__proto__ = animal2;
// //
// // console.log(dog2.x)
// // console.log(superAnimal2.x);
// // console.log(dog2.live);
//
//
//
// const animal2 = {
//     a: 1,
//     x: 1,
// };
//
// const dog2 = {
//     bark: true,
// };
//
// dog2.__proto__ = animal2;
//
// // for (const key in dog2) {
// //     console.log(key)
// // }
// //
// // console.log(Object.keys(dog2));
// // console.log(Object.entries(dog2));
//
//
// const object = {}
//
// console.log(object.toString());
//
// // console.log({})
//
// Object.prototype.toString = function () {
//     return JSON.stringify(this);
// }
//
// const newUser = {
//     name: "alex",
// }
//
// console.log(newUser.toString());
//
//
// const string = `${{newUser}}`
//
// console.log(string)





const x = [4,2,2,2,9,9,9,9,3,3,3,3];

// // const list = [2,1,4,5,7,9];
// // const list = ["Maria","Alex","Leon","Pol"];
// const list = [{name: "Maria"}, {name: "Alex"}, {name: "Leon"}, {name: "Pol"}];
//
// // list.sort((previous,next) => (previous.name > next.name ? 1 : -1));
// list.sort((previous,next) => (previous.name > next.name ? 1 : -1));
//
// console.log(list)

const findMostFrequent = (numbers) => {
    const meetingCountMap = numbers.reduce((countMap, number) => {
            // if (!countMap[number]) {
            //     countMap[number] = 1
            // } else {
            //     countMap[number] += 1
            // }

        if (!countMap.hasOwnProperty(number)) {
            countMap[number] = 1
        } else {
            countMap[number] += 1
        }

        return countMap
    }, {});

    // 1 Variante
    // const entries = Object.entries(meetingCountMap);
    //
    // console.log(entries)
    //
    // entries.sort(
    //     ([prevKey, prevValue], [nextKey, nextValue]) => nextValue - prevKey
    // );
    // console.log(entries)
    // return +entries[0][0];
    //
    // console.log(meetingCountMap)

    // 2 Variante
    // const meetings = Object.values(meetingCountMap)
    //
    // console.log(meetings)
    //
    // const maxMeetings = Math.max(...meetings);
    //
    // console.log(maxMeetings)

    // 3 Variante
    // const reversedCountMap = {};
    //
    // const meetings = Object.values(meetingCountMap)
    //
    // const maxMeetings = Math.max(...meetings);
    // for (const key in meetingCountMap) {
    //     const meetingsCount = meetingCountMap[key];
    //
    //     reversedCountMap[meetingsCount] = key
    // }
    //
    // console.log(reversedCountMap);
    //
    // return +reversedCountMap[maxMeetings]

    // 4 Variante
    // const entries = Object.entries((meetingCountMap));
    //
    // // const mostFrequent = entries.reduce((result, currentSubArray) => {
    // //     return result[1] > currentSubArray[1] ? result : currentSubArray;
    // // });
    // const [key] = entries.reduce((result, currentSubArray, index) => {
    //     // console.log("Iteration", index);
    //     // console.log("Reult", result);
    //     // console.log("CurrentElenemt", currentSubArray)
    //
    //     return result[1] > currentSubArray[1] ? result : currentSubArray;
    // });
    //
    // return Number(key);

    // 5 Variante
    const entries = Object.entries((meetingCountMap));

    const [key] = entries.reduce((result, currentSubArray, index) => {
        const [resultKey, resultValue] = result;
        const [currentKey, currentValue] = currentSubArray;

        if (resultValue === currentValue) {
            return +resultKey > +currentKey ? result : currentSubArray
        }
        return resultKey > currentKey ? result : currentSubArray
    });

    return Number(key);
};
// const newArray = [Array.]
const now = performance.now();
findMostFrequent(x)
console.log(findMostFrequent(x));










