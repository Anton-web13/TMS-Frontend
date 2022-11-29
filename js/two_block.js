const numbers = [1,2,3,4,5];

// const sum = (numbers) => {
//     return numbers.reduce((accumulator, number, index, currentArray) => {
//         console.log('Промежуточное значание', accumulator)
//         console.log('Тек. значание', number);
//         console.log('-------------------------------------')
//
//         return accumulator + number;
//     }, '');
// };
//
// console.log(sum(numbers));


// const sum = (numbers) => {
//     return numbers.reduce((result, number) => {
//         if (number % 2 === 0) {
//             result.push(number ** 2)
//         }
//
//         // const isNaN = 0;
//         // if (isNaN === isNaN) {
//         //     return;
//         // }
//
//         return result;
//     }, []);
// };
//
// console.log(sum(numbers));

const user = {
    id: 1,
    name: 'Alex',
    email: 'lolKek@mail.com',
    birtYear: 1945,
    address: {
        location: {
            locationLocal: {
                city: 'Minsk',
            }
        }
        // city: 'Minsk',
        // country: 'Belarus',
        // zip: 220130,
        // street1: 'Pishkina dom Lol',
        // street2: null,
    },
    hobbies: ['Football', 'Codding'],
    field: {
        field2: {
            field3: null,
        }
    },
    location: {},
    // 1: 25,
    // 2: 38,
};

// const city = user.address && user.address.location && user.address.locationLocal && user.address.locationLocal.city;
// const city2 = user.address?.location?.locationLocal?.city || 'City is not found';


const users = {
    id: 1,
    name: 'Alex',
    email: 'lolKek@mail.com',
    birtYear: 1945,
    hobbies: ['Football', 'Codding'],
    address: {
        city: "Minsk",
    }
};

// users.email = "asrfsrgser";
// users.lasName = "Petrov";

// Object.freeze(users);
// users.email = "asrfsrgser";
// users.address.city = "Kiev";

// delete users.id;


const user3 = {
    id: 1,
    name: 'Alex',
    email: 'lolKek@mail.com',
    address: {
        city: 'Minsk',
    },

    sayHello: () => {
        console.log('Hello');
    }
};

// const user2 = user3;
// user3.id = 2;
// user2.email = 'anton@mail.com';

// const user2 = Object.assign({}, user3);
// const user2 = {...user3}
const deepClone = JSON.parse(JSON.stringify(user3))

deepClone.address.city = 'Berlin'
console.log(deepClone);
console.log(user3);

const userNwe = {
    last: 'NAme'
}

const { name, ...restFields } = user3;
const user4 = { ...userNwe, ...user3 };

console.log(user4)
