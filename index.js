let cards = [];
let sum = 0;
let isAlive = false;
let message = "";
let hasBlackJack = false;
let messageEl = document.getElementById("messageEl");
let elSum = document.querySelector("#elSum");
let elCard = document.querySelector("#elCard")

function getRandomCard(){
    let randomNum =  Math.floor(Math.random() * 13) + 1; 
    if(randomNum > 10){
        return 10
    }else if(randomNum === 1){
        return 11
    }else{
        return randomNum
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    elCard.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        elCard.textContent += cards[i] + " "
    }
    elSum.textContent = "Sum: " + sum;

    if(sum <= 20){
        message = "Draw a card 💀"
    }else if(sum === 21){
        hasBlackJack = true;
        message = "Wohoo, You got a BlackJack!!! 🥳"
    }else{
        message = "Unfortuntely, You are out of the game 🤣"
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame()
}

