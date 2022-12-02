// const user = {
//     name: 'Alex',
//     email: 'alex@dfhtgdfth.com',
//     address: {
//         city: 'Minsk',
//     },
// }
//
//
// const user2 = {
//     name: 'Oleg',
//     email: 'dfgsdgfsdf',
//     address: {
//         city: 'Minsk',
//     },
//     a: 1,
//     b: 2,
//     c: 3,
// }

// const { address: { city: myOwnCity }} = user;
// const { name, email } = user;
// const { name: olegNAme, email: olegEmail} = user2;

// const lolKek = {};

// const { a, b, c} = user2;
// const { email, name, ...lolKek} = user2

// const numbers = [1,2,3,4,5]
//
// const [first, second, ...loolKek] = numbers;
//
// const [ ...firstBunch ] = numbers

// console.log(firstBunch);


// const numberes2 = [1,2,3];
// const numberes3 = [].concat(numberes2);
// const user = [{name: 'Alex'}]
// const numberes3 = [...numberes2];
//
// const updateData = user.map(() => {
//     return {
//         name: user.name + 1,
//     }
// })

// numberes2.push(5);

// console.log(updateData)
// console.log(numberes3)

// const user = [
//     {
//         id: 1,
//         name: 'Alex'
//     },
//     {
//         id: 2,
//         name: 'Alex'
//     },
//     {
//         id: 3,
//         name: 'Alex'
//     },
//     {
//         id: 4,
//         name: 'Alex'
//     },
// ];


// const sergsrt = () => {
//     return user.filter(({id}) => {
//         return id % 2 === 0
//     });
// }

// console.log(sergsrt(user))





// const user2 = {
//     name: 'Alex',
//     id: 21654651651,
// }
//
// const logName = ({name, id}) => {
//     return (`Username: ${name}; UserId: ${id}`)
// }
//
// console.log(logName(user2))




// const user95299526 = {
//     name: 'Alex',
//     age: 12,
// }

// const{'age'} = 12,





// const letters = ['a','b','c','d','e','f'];
//
// const create = (letterList) => {
//     const result = {};
//
//     letterList.forEach((letter) => {
//         result[letter] = true;
//     });
//
//     return result;
// }
//
//
// console.log(create(letters))




// const user = {
//     name: 'Alex',
//     age: 23,
//     email: 'sdgfsdgs@srfser.com',
// };

// const userFields = Object.keys(user);
// const userValues = Object.values(user);
// const userEntries = Object.entries(user);
// const fromEntries = Object.fromEntries(userEntries);




// const replaceKeyValue = (someObject) => {
//     const result = {};
//
//     const entries = Object.entries(someObject);
//
//     for (const [key, value] of entries) {
//         console.log(key, value)
//     }
//     // console.log(entries)
//
//     // const newEntries = entries.map(entry => entry.reverse());
//     //
//     // return Object.fromEntries((newEntries));
//
//
//     // for (const [key, value] of entries) {
//     //     result[value] = key
//     // }
//
//     // for (const entry of entries) {
//     //     result[entry[1]] = entry[0];
//     // }
//
//     // return result;
// }
//
// console.log(replaceKeyValue(user));


// const numc = [1,2,3];
// numc.reverse();
// console.log(numc)


// console.log(fromEntries);




const users = [
    {
        name: "Petr",
        age: 23,
        email: "asdasd@mail.com",
    },
    {
        name: "Max",
        age: 23,
        email: "asdasd@mail.com",
    },
    {
        name: "Alex",
        age: 23,
        email: "asdasd@mail.com",
    },
    {
        name: "Anastasiya",
        age: 23,
        email: "asdasd@mail.com",
    },
    {
        name: "Oleg",
        age: 23,
        email: "asdasd@mail.com",
    },
];

// console.log(users)



// const someFunction = (users) => {
//     return users.map(({name, email}) => {
//         return {
//             name,
//             email,
//         };
//     });
// };

// const someFunction = (users) => {
//     return users.map(({name, email}) => ({name, email}));
// };



// const someFunction = (users) => {
//     return users.map((user, index) => {
//         if (index % 2 === 0) {
//             return {
//                 name: user.name,
//                 email: user.email,
//             };
//         }
//
//         return users;
//     });
// };
//
//
// console.log(someFunction(users));




const someData = [
    {
        id: "asasd123asda",
        name: "Alex",
    },
    {
        id: "dghfghd3134",
        name: "Maria",
    },
    {
        id: "ssseeeqwe221",
        name: "Petr",
    },
    {
        id: "ssseeeqwe221333",
        name: "Anastasiya",
    },
];


const createIdUserMap = (users) => {
    // const result = {};

    // for (const user of users) {
    //     result[user.id] = user.name;
    // }

    // for (const {id, name} of users) {
    //     result[id] = name;
    // }
    //
    // return result;

    return users.reverse((result, {id, name}) => {
        result[id] = name;

        return result
    }, {})

}

console.log(createIdUserMap(someData))






