const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let result;
let computerChoice;
let counter = 0;

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        showUserChoice(userChoice);
        generateComputerChoice();
        getResult();
    });
});

function showUserChoice(userChoice) {
    let userChoiceImg = null;
    if (userChoice === 'scissors') {
        userChoice = "scissors";
        userChoiceImg = "img/scissors.png";
    }
    if (userChoice === 'rock') {
        userChoice = "rock";
        userChoiceImg = "img/rock.png";
    }
    if (userChoice === 'paper') {
        userChoice = "paper";
        userChoiceImg = "img/paper.png";
    }
    userChoiceDisplay.innerHTML = `<img src=${userChoiceImg} />`;
}

function generateComputerChoice() {
    let computerChoiceImg = null;
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    if (randomNumber === 0) {
        computerChoice = "rock";
        computerChoiceImg = "img/rock.png";
    }
    if (randomNumber === 1) {
        computerChoice = "paper";
        computerChoiceImg = "img/paper.png";
    }
    if (randomNumber === 2) {
        computerChoice = "scissor";
        computerChoiceImg = "img/scissors.png";
    }
    computerChoiceDisplay.innerHTML = `<img src=${computerChoiceImg} />`;
}

function getResult() {
    // console.log("hello");
    if (computerChoice === userChoice) {
        result = "it's a draw!";
        console.log("1 case");
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "you win!";
        counter++;
        console.log("2 case");
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "you lose!";
        counter--;
        console.log("3 case");
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "you win!";
        counter++;
        console.log("4 case");

    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "you lose!";
        counter--;
        console.log("5 case");

    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "you win!";
        counter++;
        console.log("6 case");

    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "you lose!";
        counter--;
        console.log("7 case");

    }
    resultDisplay.innerHTML = result;
    updateCounter(counter);
}

function updateCounter(counter) {
    document.querySelector("#score").innerText = counter;
}