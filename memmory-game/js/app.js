let cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];

// shuffling cardArray randomly
cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);

let gridDisplay = document.querySelector("#grid");

let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let resultDisplay = document.querySelector("#result");

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
        cardsWon.push(cardsChosen);
    }
    cardsChosen = [];
}

createBoard();

function checkMatch() {
    let cards = document.querySelectorAll("#grid img");
    // console.log('check for match');
    let optionOneId = cardsChosenIds[0];
    let optionTwoId = cardsChosenIds[1];
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        alert("you clicked the same image");
    }
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("you found a match");
        cards[optionOneId].setAttribute("src", "images/white.png");
        cards[optionTwoId].setAttribute("src", "images/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        alert("sorry try again!");
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations! you found all';
    }
}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
    console.log(cardsChosen, cardsChosenIds);
}