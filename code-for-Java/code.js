const form = document.querySelector("form");

const raceText = document.querySelector("#raceText");
const nameText = document.querySelector("#CharacterName");
const strText = document.querySelector("#strText")
const bioText = document.querySelector("#bio")
form.submitButton.addEventListener("click", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    raceText.innerText = "Race: " + form.race.value;
    nameText.innerText = "Name: " + form.characterName.value;
    let str = 0;
    for (let i = 0; i < 3; i++) {
        let roll = Math.floor(Math.random() * 6 ) + 1;
        str += roll;
    }

    strText.innerText = "Str: " + str;
    bioText.innerText = form.bio.value;
}


// In function that's called when submit is pressed...
 // variable that stores form's race select box value.