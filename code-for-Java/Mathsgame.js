// Find the html element our code will need
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const form = document.querySelector('form');
const report = document.querySelector('#report');

//Write the function to be called when the player presses Enter
function checkAnswer(e) {
  // Stops the page reloading
    e.preventDefault(); 
  // Read what the player entered 
    const correctAnswer = Number(num1.innerText) + Number(num2.innerText);
    const guess = form.name.value; 
    if(guess === correctAnswer) {
        report.innerText = "Correct!";
        // update score variable, and score text
    }
    else {
        report.innerText = "Wrong! Try again";
        
    }

}

//Connect that function to the Enter Button
form.enterButton.addEventListener('click', checkAnswer); 

function makeRandomNumbers() {
    const first = makeRandomNumbers();
    const second = makeRandomNumbers();
    num1.innerText = first;
    num2.innerText = second;
    return Math.floor(Math.random() * 100) + 1;
}

function makeRandomNumbers() {
    const first = (Math.random() * 100) + 1;
}

num1.innerText = 25;
num2.innerText = 9;


