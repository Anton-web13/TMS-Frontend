// 1)
const videos = [
    {
        id: 65432445,
        title: 'The Chamber'
    },
    {
        id: 675465,
        title: 'Fracture'
    },
    {
        id: 70111470,
        title: 'Die Hard'
    },
    {
        id: 654356453,
        title: 'Bad Boys'
    },
];

const createIdTittleMap = (video) => video.reduce((idTitleMap, {id, title}) => {
    idTitleMap[id] = title;

    return idTitleMap
});

// console.log(createIdTittleMap());


// 2)
const boxarts = [
    {
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture200.jpg'
    },
    {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture150.jpg'
    },
    {
        width: 300,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture300.jpg'
    },
    {
        width: 425,
        height: 150,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture425.jpg'
    },
]

const getBiggerSquereUrl = (boxarts) => {
    return boxarts.reduce((currentBoxart, nextBoxart, index) => {
        const {width, height} = currentBoxart;
        const {width: nextBoxartWidth, height: nextBoxartHeight} = nextBoxart;

        const currentSquere = width * height;
        const nextSquere = nextBoxartWidth * nextBoxartHeight;

        return currentSquere > nextSquere ? currentBoxart : nextBoxart;
    });

};

// console.log(getBiggerSquereUrl(boxarts));


// 3)
// Функция принимает объект с неограниченным количеством полей. Результатом выполнения функции должен быть объект,
// в котором были отсеяны поля со значениями null или undefined

// fn({ a: 1, b: ‘Hello’, c: null, z: undefined}) // { a: 1, b: ‘Hello’ }
// fn({ name: ‘alex’, age: 10, friends: [], address: null}) // { name: ‘alex’, age: 10, friends: [], }

const omitNullable = (obj) => {
    const entries = Object.entries(obj);

    const filterEntries = entries.filter(([_, value]) => value !== 'null' && typeof value !== "undefined");

    return Object.fromEntries(filterEntries);
};

// console.log(omitNullable({ a: 1, b: "Hello", c: null, z: undefined}));


// 4)
const cutString = (stirng, availableChars) => {
    if (stirng.length > availableChars) {
        return `${string.slice(0, availableChars)}...`;
    }

    return stirng;
};

// console.log(cutString("Hello", 3));










const findMostFrequentNumber = (numbers) => {
    const mettingCount = numbers.reduce((result, number) => {
        if (!result[number]) {
            result[number] = 0
        }

        result[number] += 1;

        return result;
    }, {})

    console.log(mettingCount);

    let max = 0;

    for (const number in mettingCount) {
        const meetings = mettingCount[number];

        if (meetings > max) {
            max = meetings;
        }
    }

    return max;
};

// console.log(findMostFrequentNumber([1,1,1,1,2,2,2,2,2,2,2,2,2,2,0]));




// 5)
// ОК_ОК Правильное решение
Array.prototype.customMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const currentItem = this[i];

        const newItem = callback(currentItem, i, this);

        result.push(newItem);
    }

    return result;
}

const x = [1,2,3];

// console.log(x.customMap((item) => item * 2));
// ОК_ОК Правильное решение \


// 6)
// ОК_ОК Правильное решение
Array.prototype.customFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const currentItem = this[i];

        const isAcceptable = callback(currentItem, i, this);

        if (isAcceptable) {
            result.push(currentItem);
        }
    }

    return result;
}

const xs = [1,2,3];

// console.log(xs.customFilter((item) => item >= 2));
// ОК_ОК Правильное решение \







//
//
//
//
//
//
//
//
//
//
//


const someFunction = () => {
    someFunction();
}

// console.log(someFunction())

// ОК_ОК Правильное решение
// "99" = 9 (9+9 = 18  1+8 = 9)
//"13" = 4
const countDigits = (number) => {
    const digits = String(number).split("")

    // console.log(digits)

    const sum = digits.reduce((result, digit) => result + Number(digit), 0);

    // console.log(sum)

    if (sum > 9) {
        return countDigits(sum)
    }

    return sum;
}

// console.log(countDigits(555))
// ОК_ОК Правильное решение \




// new Map(), new Set()
// const numbers = [1,1,2,2,3,3,3,5,4,4,5,5,6];
// const unigueNumbers = new Set(numbers);

// console.log(unigueNumbers);
//
// const array = Array.from(unigueNumbers);
//
// console.log(array)

// const unigueNumbers = new Set();
// unigueNumbers.add(1);
// unigueNumbers.add({a: 1});


// const unigueNumbers = new Set([{ k:{a: 3, b: 5}}, {f:{g: 555}}]);

// console.log(unigueNumbers.has(8))
// console.log(unigueNumbers.values())
// console.log(unigueNumbers.keys())

// unigueNumbers.forEach((currentelement, index, currentArray) => {
//     console.log(currentelement)
//     console.log(index)
//     console.log(currentArray)
// })

// for (const key of unigueNumbers.keys()) {
//     console.log(key)
// }

// console.log(unigueNumbers.forEach())




// new Map();
// const object = {
//     id: "123",
//     name: "Alex",
// }
// const users = {};
//
// users[object] = true;
//
// console.log(users)


// const myMap = new Map();
const myMap = new Map();

myMap.set(1, "Hello");
myMap.set(2, "w");
myMap.set(3, "r");

// console.log(myMap.get(1));
//
// myMap.clear()
// console.log(myMap.get(2));
// console.log(myMap.entries());
// myMap.clear()

// console.log(Array.from(myMap))

for (const key of myMap.keys()) {
    // console.log(key)
}


// const object = {
//     id: "123",
//     name: "Alex",
// }

// myMap.set(object, true);
// console.log(myMap.get(object));

// myMap.set([], true);
// console.log(myMap);


const films = [];
const comments2 = [];

for (let i= 0; i < 100000; i++) {
    films.push({title : `Film - ${i}`, id: i});
    comments2.push({text : `Comment - ${i}`, filmId: i})
}


const videos2 = [
    {
        id: 65432445,
        title: 'The Chamber'
    },
    {
        id: 675465,
        title: 'Fracture'
    },
    {
        id: 70111470,
        title: 'Die Hard'
    },
    {
        id: 654356453,
        title: 'Bad Boys'
    },
];


const comments = [
    {
        text: "Scheisse",
        filmId: 65432445,
    },
    {
        text: "Very good",
        filmId: 675465,
    },
    {
        text: "Not good",
        filmId: 70111470,
    },
    {
        text: "This is good",
        filmId: 654356453,
    }
]

const associateFilmByComment = (films, comments) => {
    const FilmsIdTitleMap = new Map();

    films.forEach(({id, title}) => {
        FilmsIdTitleMap.set(id, title);
        // console.log("1");
        console.log(FilmsIdTitleMap)
    })

    return comments.map(comment => ({
        ...comment,
        filmName: FilmsIdTitleMap.get(comment.filmId),
    }))

    // this not work
    // const FilmsIdTitleMap = films.reduce((result, film) => {
    //     result[film.id] = film.title;
    //
    //     return result;
    // })
    //
    // return comments.map(comment => ({
    //     ...comment,
    //     filmName: FilmsIdTitleMap.get(comment.filmId),
    // }))
};

// console.log(associateFilmByComment(videos2, comments));



// ОК_ОК Правильное решение
// const getFactorial = (number) => {
//     let result = 1;
//
//     for (let i = 1; i <= number; i++) {
//         result *= i;
//     }
//
//     return result
// }
//
// console.log(getFactorial(5))
// ОК_ОК Правильное решение \


// const getFactorial = (a, b) => {
//
//     let result = 1;
//
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//
//     return result;
//
//
//     // if (b === 1) {
//     //     return a;
//     // }
//     //
//     // return a * getFactorial(a, b - 1)
// }
//
// console.log(getFactorial(2,3));






