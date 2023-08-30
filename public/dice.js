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
const descriptionOne = document.getElementById('firstDescription');
const descriptionTwo = document.getElementById('secondDescription');
const rollBtn = document.getElementById('roll');
const image = document.getElementById("image");
let oldFirst = 0;
let oldSecond = 1;

function addDescription(first, second) {
    descriptionOne.innerText = BODY_PARTS[first - 1];
    descriptionTwo.innerText = BODY_PARTS[second - 1];
}

function getRandomSide(unacceptable) {
    let next = 0;
    do {
        next = Math.floor((Math.random() * 6) + 1)
    } while (unacceptable.includes(next));

    return next;
}

function renderImage(first, second) {
    const url = "";
    image.src = url;
}

function rollDice() {
    const first = getRandomSide([oldFirst]);
    const second = getRandomSide([oldSecond, first]);

    cubeOne.innerText = first.toString();
    cubeTwo.innerText = second.toString();

    addDescription(first, second);
    renderImage(first, second);
}

// set initial side
rollDice();