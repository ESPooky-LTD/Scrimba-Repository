let deckId

let myCards
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const winnerEl = document.getElementById('winner')
document.getElementById("new-deck").addEventListener("click", handleClick)


function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
        const activateBtn=document.getElementById('draw-cards')
        activateBtn.removeAttribute('disabled')
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            document.getElementById('card-container1').innerHTML = 
    `<img src=${data.cards[0].image}>`
            document.getElementById('card-container2').innerHTML =
    `<img src=${data.cards[1].image}>`        
    })
})



function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    const card1Obj = card1ValueIndex
    const card2Obj = card2ValueIndex
    console.log("card 1:", card1ValueIndex)
    console.log("card 2:", card2ValueIndex)
    
    if (card1ValueIndex > card2ValueIndex) {
        winnerEl.innerText="ComputerWins!"
    } else if (card1ValueIndex < card2ValueIndex) {
         winnerEl.innerText="You Win!"
    } else {
         winnerEl.innerText="War!"
    }

}
