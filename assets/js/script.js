// wait for DOM to finish loading before running the game
// Get the buttomn elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType= this.getAttribute("data-type");
                runGame(gameType)
            }
        })

    }
    runGame("addition");
})
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}



function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";

}

function displayMiltiplicationQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "*";

}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";

}





// /**create random numbers to be used in equation */
// function runGame(gameType) {
//     let num1 = Math.ceil(Math.random()*25);
//     let num2 = Math.ceil(Math.random()*25);

//     if(gameType === "addition") {
//         displayAdditionQuestion(num1, num2);
        

//     } else if(gameType === "subtraction"){
//         displaySubtractionQuestion(num1, num2);
//     } else if(gameType === "multiplication"){
//         displayMultiplicationQuestion(num1, num2);
//     } else if(gameType === "division"){
//         displayDivisionQuestion(num1, num2);
//     } else {
//         alert(`Unknown game type: ${gameType} `);
//         throw `Unknown game type: ${gameType}. Aborting!`;
//     }
// }


// //**Checks user answer against correct answer */
// function checkAnswer() {

//     let userAnswer = parseInt(document.getElementById("answer-box").value);
//     let calculatedAnswer = calculateCorrectAnswer();
//     let isCorrect = userAnswer === calculatedAnswer[0];

//     if(isCorrect) {
//         alert("You got it right!");

//     } else {
//         alert(`Unlucky, you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
//     }

//     runGame(calculatedAnswer[1]);
// }

// /**Calculates correct answer  */
// function calculateCorrectAnswer() {
//     let operand1 = parseInt(document.getElementById("operand1")).innerText;
//     let operand2 = parseInt(document.getElementById("operand2")).innerText;
//     let operator = document.getElementById("operator").innerText;

//     if (operator === "+")  {
//         return [operand1 + operand2, "addition"]; 
//     } else if (operator === "-") {
//         return [operand1 - operand2, "subtraction"]; 
    
//     } else if (operator === "*") {
//         return [operand1 * operand2, "multiplication"];     
//     } else if (operator === "/") {
//         return [operand1 / operand2, "division"];     
//     } else {
//         alert(`Unimplemented operator ${operator}`);
//         throw `Unimplemented operator ${operator}. Aborting!`;
//     }   


// }

// function incrementScore () {

// }

// function incrementWrongAnswer() {

// }

// function displayAdditionQuestion(operand1, operand2) {
//     document.getElementById("operand1").textContent = operand1;
//     document.getElementById("operand2").textContent = operand2;
//     document.getElementById("operator").textContent = "+";


// }

// function displaySubtractQuestion(operand1, operand2) {
//     document.getElementById("operand1").textContent = operand1;
//     document.getElementById("operand2").textContent = operand2;
//     document.getElementById("operator").textContent = "-";

// }

// function displayMiltiplicationQuestion(operand1, operand2) {
//     document.getElementById("operand1").textContent = operand1;
//     document.getElementById("operand2").textContent = operand2;
//     document.getElementById("operator").textContent = "*";

// }


// function displayDivisionQuestion(operand1, operand2) {
//     document.getElementById("operand1").textContent = operand1;
//     document.getElementById("operand2").textContent = operand2;
//     document.getElementById("operator").textContent = "/";

// }