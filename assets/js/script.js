const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard;
let secondCard;
let lockBoard = false

function flipCard() {
    if(lockBoard == true) { return }
    if(this === firstCard){ return }

    this.classList.add('flip')  
    if(hasFlippedCard == false) {
        hasFlippedCard = true
        firstCard = this      
        return
    }

    secondCard = this 
    hasFlippedCard = false  
    checkForMatch()
}

function checkForMatch() {   
    if(firstCard.dataset.card == secondCard.dataset.card){       
        disableCards()            
        return     
    }

    unflipCards()
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
}

function unflipCards() {
    lockBoard = true
    setTimeout(function() {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip') 
        lockBoard = false        
    }, 1200)
}

(function shuffle() {
    cards.forEach((card) => {
       let randomPosition = Math.floor(Math.random() * 12)
       card.style.order = randomPosition
    })
})()

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})