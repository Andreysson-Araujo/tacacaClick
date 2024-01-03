let score = 0;
let countdown = 0;
let intervalId;

function clickTacaca() {
    score++;
    updateScore();

    if (score === 50) {
        activateButton();
    }
}

function updateScore() {
    document.getElementById("score").innerText = `${score} tacacás`;
}

function activateButton() {
    document.querySelector('button').removeAttribute('disabled');
}

function clickCapivara() {
    if (score >= 50) {
        score -= 50;
        updateScore();
        document.querySelector('button').setAttribute('disabled', 'true');
        startAutoIncrement();
    }
}

function startAutoIncrement() {
    if (!intervalId) {
        intervalId = setInterval(function () {
            score++;
            updateScore();
        }, 1000);
    }
}
