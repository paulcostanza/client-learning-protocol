import { cardsData } from "./components/questionsAnswers.js"
console.log(cardsData)

const cardsContainer = document.getElementById('cards-container')
const preBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const currentEl = document.getElementById('current')
const showBtn = document.getElementById('show')
const hideBtn = document.getElementById('hide')
const addContainer = document.getElementById('add-container')

// Keep track of current card
let currentActiveCard = 0

// Store DOM cards
const cardsEl = []



// Create all cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index))
}

// Create a single card in DOM
function createCard(data, index) {
    const card = document.createElement('div')
    card.classList.add('card')

    if (index === 0) {
        card.classList.add('active')
    }

    card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
        <p>${data.question}</p>
    </div>
    <div class="inner-card-back">
        <p>${data.answer}</p>
    </div>
    </div>`

    card.addEventListener('click', () => card.classList.toggle('show-answer'))

    // Add to DOM cards
    cardsEl.push(card)

    cardsContainer.appendChild(card)

    updateCurrentText()
}

// show number of cards
function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`
}

createCards()

// Next Button
nextBtn.addEventListener('click', () => {

    // moves card over
    cardsEl[currentActiveCard].className = 'card left'

    currentActiveCard++

    // Makes card loop to beginning, does not look pretty though
    if (currentActiveCard > cardsEl.length - 1) {
        // currentActiveCard = cardsEl.length - 1
        currentActiveCard = 0
    }

    cardsEl[currentActiveCard].className = 'card active'

    updateCurrentText()
})

// Prev Button
preBtn.addEventListener('click', () => {

    // moves card over
    cardsEl[currentActiveCard].className = 'card right'

    currentActiveCard--

    // makes card loop to end, does not look pretty though
    if (currentActiveCard < 0) {
        currentActiveCard = cardsEl.length - 1
    }

    cardsEl[currentActiveCard].className = 'card active'

    updateCurrentText()
})

// show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'))

// hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'))


