let score = 0;
let capivaraCount = 0;
let intervalId;
let autoIncrementAmount = 1;

function clickTacaca() {
    score++;
    updateScore();

    if (score >= 50) {
        enableCapivaraButton();
    }

    if (score >= 100){
        enableBotoButton();
    }
}


function updateScore() {
    document.getElementById("score").innerText = `${score} tacacás`;
}

function enableCapivaraButton() {
    let capivaraButton = document.querySelector('#capivaraButton');
    capivaraButton.removeAttribute('disabled');
}

function enableBotoButton() {
    let botoButton = document.querySelector("#botoButton");
    botoButton.removeAttribute("disabled")
}

function clickCapivara() {
    if (score >= 50) {
        score -= 50;
        updateScore();
        doubleIncrement();
        startAutoIncrement();
        buyCapivara();
    }
}


function clickBoto() {
   if (score >= 100) {
        score -= 100;
        updateScore();
        buyBoto();
        multScore();
   }
}

function doubleIncrement() {
    autoIncrementAmount *= 2;
}

function multScore(){
    score * 2
}

function buyCapivara() {
    capivaraCount++;
    updateCapivaraCount();
}
function buyBoto(){

}

function updateCapivaraCount() {
    document.getElementById("capivaraCount").innerText = capivaraCount;
}

function startAutoIncrement() {
    if (!intervalId) {
        intervalId = setInterval(function () {
            score += autoIncrementAmount;
            updateScore();
        }, 1000);
    }
}
