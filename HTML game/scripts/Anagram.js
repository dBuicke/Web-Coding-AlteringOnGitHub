const anagram = document.querySelector('#anagram');
const form = document.querySelector('form');
const report = document.querySelector('#report');

const answers = ["table", "cat", "flower", "chair", "mouse"];
const anagrams = [ "blaet",  "tac", "elowfr", "irhca", "suoem"];

// this happens when the js file is loaded by the html
let round = 0;

anagram.innerText = anagrams[round];

function enter(e) {
    e.preventDefault();
// very important technique of getting value of form input
    const guess = form.answerBox.value;
    if(guess ==answers[round] ) {
        report.innerText = "Well done!";
        round += 1;
        anagram.innerText = anagrams[round];
        // increase player's score variable and update score text
        // make sure you don't overrun your array
    }
    else {
        report.innerText = "Wrong try again...";
    }
}

// add timer?
// difficulty levels
// high scores
// skip button per game
form.enterButton.addEventListener('click', enter);




const timerText = document.querySelector('#timerText');
let timeleft = 0;


// How to make a timer is js
// setinterval takes a function and a duration, and call the function that often.
let countdown = setInterval(Tick, 1000);

function Tick() {
    timeleft += 1;
    timerText.innerText = timeleft;
    // check to see if time has run out.
    if (timeleft <= 0) {
        // stop the reapting function with a clear interval and two variable
        // we store above.
        clearInterval(countdown);
        // Here is where you would put your game over code.
        // score etc.
        document.querySelector('#gameover').innerText = "Game Over";
    }
}