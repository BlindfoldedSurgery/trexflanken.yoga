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
const imageToggle = document.getElementById("hideImageToggle");
let oldFirst = 0;
let oldSecond = 1;

function setCookie(key, value) {
    document.cookie = `${key}=${value};samesite=strict`;
}

function getCookie(key) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${key}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setImageToggleText() {
    const current = getCookie("renderImage");
    console.log(current);
    if (current === "false") {
        imageToggle.innerText = "Show pictures";
    } else {
        imageToggle.innerText = "Hide pictures";
    }
}

function toggleImageRender() {
    const current = getCookie("renderImage");
    if (current === "false") {
        setCookie("renderImage", "true");
    } else {
        setCookie("renderImage", "false");
    }

    setImageToggleText();
}

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
    const cookieValue = getCookie("renderImage");

    // show images per default
    if (cookieValue === undefined || cookieValue === "true") {
        first = 3;
        second = 5;
        image.src = `https://sos-de-fra-1.exo.io/trexflankenyoga/trex_${first}_${second}.jpg`;
    } else {
        image.src = "";
    }
}

function rollDice() {
    const first = getRandomSide([oldFirst]);
    const second = getRandomSide([oldSecond, first]);

    cubeOne.innerText = first.toString();
    cubeTwo.innerText = second.toString();

    addDescription(first, second);
    renderImage(first, second);
    setImageToggleText();
}

// set initial side
rollDice();