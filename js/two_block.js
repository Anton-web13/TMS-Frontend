const nums = [1,2,3,4,5];

// 1)
const numFn = (numbers) => numbers.map((number) => number % 2 === 0 ? number + 1 : number - 1);

// console.log(numFn(nums))



// 4)
const isPalindrome = (word) => {
    // const chars = word.toLowerCase().split('');
    // const reverseCharsList = chars.reverse();
    // const reversedWord = reverseCharsList.join('');
    //
    // return word.toLowerCase() === reversedWord;

    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

// console.log(isPalindrome('Шалаш'))


// 5)
const users = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
    },
    {
        id: 3,
        first_name: 'Igor',
        last_name: 'Trimailov',
        email: null,
        gender: 'Male',
        ip_address: null,
    },
    {
        id: 4,
        first_name: 'Igor',
        last_name: 'Trimailov',
        email: null,
        gender: 'strangeMale',
        ip_address: null,
    },
    {
        id: 5,
        first_name: 'Igor',
        last_name: 'Trimailov',
        email: null,
        gender: undefined,
        ip_address: null,
    },
];

const splitByGender = (users) => {
    // const WOMEN = 'Female';
    //
    // return users.reduce((gendersCollection, user) => {
    //     const isWomen = user.gender === WOMEN;
    //     const userToPush = {
    //         id: user.id,
    //         fullName: `${user.first_name} ${user.last_name}`,
    //         email: user.email,
    //         gender: user.gender,
    //         ip_address: user.ip_address,
    //     }
    //
    //     if (isWomen) {
    //         gendersCollection.women.push(userToPush);
    //     } else {
    //         gendersCollection.men.push(userToPush);
    //     }
    //
    //     return gendersCollection;
    //
    //
    // }, { men: [], women: [] })



    // const WOMEN = 'Female';
    //
    // return users.reduce((gendersCollection, {first_name, last_name, ...otherInfo}) => {
    //     const isWomen = otherInfo.gender === WOMEN;
    //     const gender = isWomen ? 'women' : 'men';
    //
    //     const userToPush = {
    //         fullName: `${first_name} ${last_name}`,
    //         ...otherInfo,
    //     };
    //
    //     gendersCollection[gender].push(userToPush);
    //
    //     return gendersCollection;
    //
    // }, { men: [], women: [] })



    const WOMEN = 'Female';

    return users.reduce((gendersCollection, {first_name, last_name, ...otherInfo}) => {
        const gender = otherInfo.gender || 'emptyGenders';

        const userToPush = {
            fullName: `${first_name} ${last_name}`,
            ...otherInfo,
        };

        if (!gendersCollection[gender]) {
            gendersCollection[gender] = [];
        }

        gendersCollection[gender].push(userToPush);

        return gendersCollection;

    }, {})
};

// console.log(splitByGender(users));


// 6)
const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [ {id: 432534, time: 65876586 }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [ {id: 432534, time: 65876586 }],
    },
];

// const someFn = (films) => films.map(({id, title}) => ({id, title}));
const someFn = (films) => films.reverse(result, ({id, title}) => {
    result[id] = title;

    return result;
});


// console.log(someFn(newReleases));

// 7)
const videoIds = (newReleases) => {

    return newReleases.reduce((result, {id, rating}) => {
        const [ratingValue] = rating;
        if (ratingValue === 5.0) {
            result.push(id);
        }

        return result
    }, [])

}

// console.log(videoIds(newReleases));








// lesson

// замыкание
const counterFn = () => {
    let counter = 0;
    // let counter = [];

    // return () => {
    //    return (counter += 1);
    // };

    return (operationType) => {
        if (operationType === '+') {
            return (counter += 1)
        }

        return (counter -= 1);
    };
};

const firstCounter = counterFn();

// console.log(firstCounter('+'));
// console.log(firstCounter('+'));
// console.log(firstCounter('+'));
//
// console.log(firstCounter('-'));
// console.log(firstCounter('-'));
// console.log(firstCounter('-'));
// console.log(firstCounter('-'));




// context

const user = {
    name: 'Alex',
    // sayName: () => {
    //     console.log(this)
    // },
    sayName2() {
        console.log(this)
    },
    sayName4() {
        const logThis = () => {
            console.log(this);
        };

        logThis();
    },
//     sayName3: function () {
//         console.log(this)
//     },
}

// user.sayName();
// user.sayName2();
// user.sayName4();
// user.sayName3();


// call, apply, bind

// const sayName = function () {
//     console.log(this.name);
// }
//
// const user1 = {
//     name: 'Alex'
// }
//
// const user2 = {
//     name: 'Alena'
// }
//
// const user3 = {
//     name: 'Max'
// }
//
// // sayName.call(user1);
// // sayName.call(user2);
//
// sayName.call(user1);
// sayName.apply(user2);
// sayName.bind(user3);
//
// const bindedSayName = sayName.bind(user3);
//
// bindedSayName()

const sayName = function (arg1, arg2, arg3) {
    console.log(`${this.name} - ${arg1} - ${arg2} - ${arg3}`);
}

const user1 = {
    name: 'Alex'
}

const user2 = {
    name: 'Alena'
}

const user3 = {
    name: 'Max'
}

// const binfded = sayName.bind(user3, 1,2,3,);
//
// console.log(binfded);

// sayName.call(user1, 1,2,3);
// sayName.apply(user2, [1,2,3,25]);



const numbersArray = [1,2,3,5,4,1,2,6,3,5,4,1,5];

// const oneNumber = (numbers) => {
//     return numbers.find((number) => {
//         return number === 1;
//     })
// };

// console.log(oneNumber(numbersArray));

// console.log(numbersArray.indexOf(1))
// console.log(numbersArray.lastIndexOf(1))

// const findUnique = (nums) => {
//     return nums.find((number, _, currentArray) => currentArray.indexOf(number) === currentArray.lastIndexOf(number));
// }


// ОК_ОК Правильное решение
const findUnique = (nums) => {
    return nums.find((number) => nums.indexOf(number) === nums.lastIndexOf(number));

    const numberMeetingCount  = nums.reduce((meetingMAP, number) => {
        if (meetingMAP[number]) {
            meetingMAP[number] += 1
        } else {
            meetingMAP[number] = 1
        }
        return meetingMAP
    }, {});

    for (const number in numberMeetingCount) {
        const numberCount = numberMeetingCount[number];

        if (numberCount === 1) {
            return +number;
        }
    }
};

console.log(findUnique(numbersArray));
// ОК_ОК Правильное решение \



// ОК_ОК Правильное решение
// const findUnique = (nums) => {
//     const numberMeetingCount = nums.reduce((meetingsCountMap, number) => {
//         if (meetingsCountMap[number]) {
//             meetingsCountMap[number] += 1;
//         } else {
//             meetingsCountMap[number] = 1;
//         }
//
//         return meetingsCountMap;
//     }, {});
//
//     for (const number in numberMeetingCount) {
//         const meetingsCount = numberMeetingCount[number];
//
//         if (meetingsCount === 1) {
//             return +number;
//         }
//     }
//
//     console.log(numberMeetingCount);
// };
// ОК_ОК Правильное решение \



// const getUniqElements = (arr) => {
//     const occurrences = {};
//     // считаем сколько раз каждый элемент встречается в массиве
//     arr.forEach(el => {
//         if(occurrences[el]) occurrences[el]++;
//         else occurrences[el] = 1
//     })
//
//     // берем только те элементы, которые попались 1 раз
//     return Object.keys(occurrences).filter(key => occurrences[key] === 1)
// }

// console.log(getUniqElements(numbersArray))
















