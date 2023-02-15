let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.innerText = "sum: " + sum
    if (sum < 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "you've got black jack!"
        hasBlackJack = true
    } else {
        message = "you lost"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let Card = getRandomCard()
        sum += Card
        cards.push(Card)


        renderGame()
    }
}