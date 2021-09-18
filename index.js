let welcomeRGBDiv = document.getElementById("welcomeRGB");

let redSlider = document.querySelector('#r');
let greenSlider = document.querySelector('#g');
let blueSlider = document.querySelector('#b');

let outputOfRedSlider = document.getElementById('redOutput');
let outputOfGreenSlider = document.getElementById('greenOutput');
let outputOfblueSlider = document.getElementById('blueOutput');

let showHexButton = document.getElementById('showHex');
let showRainButton = document.getElementById('showRain');

let outputHexDiv = document.getElementById('outputHexDiv');
let outputHexValue = document.getElementById('rgbHexValue');

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

setInterval(
    function () {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        welcomeRGBDiv.style.backgroundColor = "#" + randomColor;
    }, 1000);

function pad(n) {
    return (n.length < 2) ? "0" + n : n;
}

function generateNewHexCodeValue() {
    let redHexValue = parseInt(redSlider.value, 10).toString(16);
    let greenHexValue = parseInt(greenSlider.value, 10).toString(16);
    let blueHexValue = parseInt(blueSlider.value, 10).toString(16);

    let currentHexValue = "#" + pad(redHexValue) + pad(greenHexValue) + pad(blueHexValue);

    outputHexValue.value = currentHexValue;
}

//Red:
redSlider.addEventListener('change', function () {
    generateNewHexCodeValue();
    outputOfRedSlider.value = redSlider.value;
}, false);

redSlider.addEventListener('input', function () {
    generateNewHexCodeValue();
    outputOfRedSlider.value = redSlider.value;
}, false);

//Green:
greenSlider.addEventListener('change', function () {
    generateNewHexCodeValue();
    outputOfGreenSlider.value = greenSlider.value;
}, false);

greenSlider.addEventListener('input', function () {
    generateNewHexCodeValue();
    outputOfGreenSlider.value = greenSlider.value;
}, false);

//Blue:
blueSlider.addEventListener('change', function () {
    generateNewHexCodeValue();
    outputOfblueSlider.value = blueSlider.value;
}, false);

blueSlider.addEventListener('input', function () {
    generateNewHexCodeValue();
    outputOfblueSlider.value = blueSlider.value;
}, false);

//Make it rain:
showRainButton.addEventListener('click', function () {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let letters = 'MATRIXoldsHERE:)KLM5311NOPQRSTUVXYZABCDE41341341FGHIJKLMNOPQ4RSTUVXYZAB12CDEFGHIJKLMN5OPQRSTUVXYZ97A78BCDEFGHIJKLMN68OPQRSTUVX97797YZABCDEFGHIJKL676MNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    let fontSize = 8;
    let columns = canvas.width / fontSize;

    let drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, .1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < drops.length; i++) {
            var text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = outputHexValue.value;
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                drops[i] = 0;
            }
        }
    }

    setInterval(draw, 33);
});

//Show HEX:
showHexButton.addEventListener('click', function () {
    if (outputHexDiv.hasAttribute('hidden'))
        outputHexDiv.removeAttribute('hidden');
    else
        outputHexDiv.setAttribute('hidden', true);
});