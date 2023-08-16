const BODY_PARTS = [
    "Linker Unterschenkel",
    "Rechter Unterschenkel",
    "Linker Oberschenkel",
    "Rechter Oberschenkel",
    "Linker Unterarm",
    "Rechter Unterarm",
]

//select the classes we require
const cubeOne = document.getElementById('firstDie');
const cubeTwo = document.getElementById('secondDie');
const rollBtn = document.getElementById('roll');
let oldFirst = 0;
let oldSecond = 1;

function getRandomSide(unacceptable) {
    let next = 0;
    do {
        next = Math.floor((Math.random() * 6) + 1)
    } while (unacceptable.includes(next));

    return next;
}

function rollDice() {
    const first = getRandomSide([oldFirst]);
    const second = getRandomSide([oldSecond, first]);

    cubeOne.innerText = first;
    cubeTwo.innerText = second;
}

// set initial side
rollDice();