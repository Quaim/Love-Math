// wait for DOM to finish loading before running the game
// Get the buttomn elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType= this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })

    }

})

/**create random numbers to be used in equation */
function runGame() {
    let num1 = Math.ceil(Math.random()*25);
    let num2 = Math.ceil(Math.random()*25);
}



function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore () {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayDivisionQuestion() {

}