let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let resetButton = document.querySelector("#reset");

let inputField = document.querySelector("input");
let fieldScore = document.querySelector("#fieldScore");

let gameOver = false;
let winningScore = 5;
p1Score = 0;
p2Score = 0;

p1Button.addEventListener('click', function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }   
});

p2Button.addEventListener('click', function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }   
});

resetButton.addEventListener('click', function() {
    reset();
});

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

inputField.addEventListener("change", function() {
    fieldScore.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});