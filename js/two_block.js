// const container = document.querySelector('.container');

// const words = ['Alex', 'Max', 'Maria', 'Tom'];
//
// words.forEach(name => {
//     const divElement = document.createElement('div');
//     const pTag = document.createElement('p');
//
//     divElement.textContent = name;
//     pTag.textContent = "pTag";
//     divElement.classList.add('item');
//
//     // container.append(divElement, pTag);
//     container.appendChild(divElement);
//
// })
//
// // const divElement = document.createElement('div');
// // divElement.textContent = 'Hello'
// // divElement.classList.add('item');
//
// // container.appendChild(divElement);
//
//
//
// console.log(container)



const btn = document.querySelector('button');

// btn.setAttribute('disabled', 'disabled');

// setTimeout(() => {
//     btn.removeAttribute('disabled')
// }, 3000);


const counter = () => {
    let value = 0;

    return () => {
        return (value += 1);
    }
}

const myCounter = counter();

btn.addEventListener('click', (event) => {
    event.target.style.backgroundColor = myCounter() % 2 === 0 ? 'red' : "blue";
})


// const btn1 = document.querySelector('#1');
// const btn2 = document.querySelector('#2');
// const btn3 = document.querySelector('#3');
//
// btn1.addEventListener('click', () => {})
// btn2.addEventListener('click', () => {})
// btn3.addEventListener('click', () => {})


const containerNew = document.querySelector('.container');
const divContainer  = document.querySelector('#ident');
const buttonInsideDiv  = document.querySelector('#btn');

// containerNew.addEventListener('click', (event) => {
//     console.log(event.target)
// });


containerNew.addEventListener('click', () => {
    console.log("Container")
})

divContainer.addEventListener('click', () => {
    console.log("divContainer")
})


buttonInsideDiv.addEventListener('click', () => {
    console.log("buttonInsideDiv")
})






