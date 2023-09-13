const BODY_PARTS = [
    "Linker Unterschenkel",
    "Rechter Unterschenkel",
    "Linker Oberschenkel",
    "Rechter Oberschenkel",
    "Linker Unterarm",
    "Rechter Unterarm",
]

const cubeOne = document.getElementById('firstDie');
const cubeTwo = document.getElementById('secondDie');
const descriptionOne = document.getElementById('firstDescription');
const descriptionTwo = document.getElementById('secondDescription');
const image = document.getElementById("image");
const imageToggle = document.getElementById("hideImageToggle");
let oldFirst = 0;
let oldSecond = 0;

function setCookie(key, value) {
    document.cookie = `${key}=${value};samesite=strict`;
}

function getCookie(key) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${key}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function shouldRenderImage() {
    const value = getCookie("renderImage");

    return value === undefined || value === "true";
}

function setImageToggleText() {
    if (shouldRenderImage()) {
        imageToggle.innerText = "Hide pictures";
    } else {
        imageToggle.innerText = "Show pictures";
    }
}

function toggleImageRender() {
    if (shouldRenderImage()) {
        setCookie("renderImage", "false");
    } else {
        setCookie("renderImage", "true");
    }

    setImageToggleText();
    renderImage();
}

function addDescription(first, second) {
    descriptionOne.innerText = BODY_PARTS[first - 1];
    descriptionTwo.innerText = BODY_PARTS[second - 1]
        .replace("Linker", "Linken")
        .replace("Rechter", "Rechten");
}

function getRandomSide(unacceptable) {
    let next = 0;
    do {
        next = Math.floor((Math.random() * 6) + 1)
    } while (unacceptable.includes(next));

    return next;
}

function renderImage(first, second) {
    // show images per default
    if (shouldRenderImage()) {
        // if called by `toggleImageRender` we can use the old values since we set them in `rollDice` after rolling
        if (first === undefined || second === undefined) {
            first = oldFirst;
            second = oldSecond;
        }

        const lower = Math.min(first, second);
        const higher = Math.max(first, second);
        image.src = `https://sos-de-fra-1.exo.io/trexflankenyoga/trex_${lower}_${higher}.jpg`;
        image.alt = `example for position with numbers ${lower} and ${higher}`;
    } else {
        image.src = "";
        image.alt = "";
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

    oldFirst = first;
    oldSecond = second;
}

// set initial side
rollDice();