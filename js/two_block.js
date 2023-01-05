// const createFakeRequest = (response, delay, isFailed = false) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isFailed) {
//                 reject(new Error("sdfgxdfgdgf"))
//             }
//
//             resolve(response)
//         }, delay)
//     })
// }
//
//
// // const getPokemon = (id) => {
// //     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
// //         response.json();
// //     });
// // }
//
// const loadDate = async () => {
//     // const pokemons = await createFakeRequest({name: "Pikashu", ability: "Power Shot"}, 5000); // 1m
//     // const weather = await createFakeRequest({weather: "Sunny", temperatur: "20 deg"}, 5000); // 1m
//     // const userProfileData = await createFakeRequest({id: "Pikashu", name: "Alex", age: 25}, 5000); // 1m
//
//     // console.log({
//     //     pokemons,
//     //     weather,
//     //     userProfileData,
//     // })
//
//     try {
//         // const [pokemon, weather, userProfileData] = await Promise.allSettled([
//         //     createFakeRequest({name: "Pikashu", ability: "Power Shot"}, 1000),
//         //     createFakeRequest({weather: "Sunny", temperatur: "20 deg"}, 3000),
//         //     createFakeRequest({id: "Pikashu", name: "Alex", age: 25}, 2000)
//         // ])
//
//         // const result = await Promise.race([
//         //     createFakeRequest({name: "Pikashu", ability: "Power Shot"}, 1000),
//         //     createFakeRequest({weather: "Sunny", temperatur: "20 deg"}, 3000),
//         //     createFakeRequest({id: "Pikashu", name: "Alex", age: 25}, 2000)
//         // ])
//
//         const result = await Promise.any([
//             createFakeRequest({name: "Pikashu", ability: "Power Shot"}, 4000),
//             createFakeRequest({weather: "Sunny", temperatur: "20 deg"}, 3000),
//             createFakeRequest({id: "Bulba", name: "Alex", age: 25}, 2000)
//         ])
//
//         // console.log({pokemon, weather, userProfileData});
//         console.log(result);
//     } catch(error) {
//         console.log(error.message)
//     }
// };
//
// console.log(loadDate());





const solutions = async () => {

    try {
        const pokemonsShortInfos = await fetch("https://pokeapi.co/api/v2/pokemon").then((response) => {
            response.json();
        })

        console.log(pokemonsShortInfos)

    } catch (error) {
        console.log(error.message)
    }
}

console.log(solutions())













