// const myPromise = new Promise((resolve, reject) => {
//     resolve(5);
// });
//
// // console.log(myPromise);
// // console.log(myPromise * 2);
//
//
// myPromise.then((data) => {
//     return new Promise((resolve, reject) => {
//         console.log(data);
//         reject(data * 2);
//     })
//     // console.log(data)
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(`Error happened with ${error}`)
// });
//
//
// const delay = (ms) => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve();
//         }, ms)
//     })
// };
//
// delay(2000);
//
//
//
// // const promisefvedFive = new Promise( resolve => {
// //
// // })
//
// const createSuccessPromise = (value) => {
//     return new Promise( resolve => {
//         resolve(value)
//     })
// };
//
// const foo = createSuccessPromise(1);
//
// foo
//     .then(one => createSuccessPromise(one + 10))
//     .then(result => {
//         console.log(result)
//     });







// const URL = "https://pokeapi.co/api/v2/pokemonhhhh"
//
// const response = fetch(URL)
//     .then(response => {
//         console.log(response)
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         response.json()
//     })
//     .then(data => {
//     console.log(data)
// }).catch(error => {
//         console.log(error.message)
//         alert("A good error");
// })



// console.clear();


// const someFn = () => {
//     console.log(1);
//     console.log(2);
//
//     throw new Error("Ooops") ;
// };
//
// someFn();



// const someFn = () => {
//     try {
//         console.log(1)
//         console.log(2)
//
//         throw new Error("Ooops");
//     } catch (e) {
//         console.log(e)
//     }
// };
//
// someFn();





// OK_OK
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async () => {
  try {
    const response = await fetch(URL).then((response) => response.json());

    const details = await fetch(response.results[0].url).then((response) =>
        response.json()
    );
    console.log(details);
  } catch (error) {
    console.log(error)
  }
};

getPokemons();
// OK_OK /



// const getPokemons =  () => {
//     fetch(URL)
//         .then(response => response.json())
//         .then((data) => {
//         data.count;
//     });
//
// };
//
// getPokemons();

const poromise = new Promise((resolve) => {
  console.log( "Poromise")

  resolve()
})

setTimeout(() => {
  console.log("Promise")
}, 0);





