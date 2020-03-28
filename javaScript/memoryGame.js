
var piecesArray = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"];
var cards = document.getElementsByTagName('td');
var firstCard, secondCard, counter = 0;
var hasFlippedCard = false;
var lockBoard = false
var score = document.getElementsByTagName('b');


function shuffle(array){
    var j, tmp;
    for (let index = array.length - 1; index > 0; index--){
        j = Math.floor(Math.random()*(index+1))
        tmp = array[index];
        array[index] = array[j];
        array[j]=tmp;
    }

}
function writeCards(){
    let index = 0;
        for (const card of cards) {
        card.innerText = piecesArray[index];
        card.classList = 'hiden';
        index++;
    }
}


shuffle(piecesArray);
writeCards();


function flipcard(){
    updateScore();
    if (lockBoard) return;
    this.classList = 'show';
    if (this === firstCard) {
        return;
    }

    if (hasFlippedCard === false) {
        hasFlippedCard = true;
        firstCard = this;
       return;
     }

     secondCard = this;
     hasFlippedCard = false;
     
     checkForMatch();
     
   }
  
   function checkForMatch() {
       counter++;
     if (firstCard.innerText === secondCard.innerText) {
       disableCards();
       return;
     }
    backflip();
  
   }
  
   function disableCards() {
     firstCard.removeEventListener('click', flipcard);
     secondCard.removeEventListener('click', flipcard);
   }

   function backflip(){
       lockBoard = true;
    setTimeout(() => {
        firstCard.classList = "hiden";
        secondCard.classList = 'hiden';
        lockBoard = false;
        counter--;
      }, 1000); 
      
   }

for (let index = 0; index < cards.length; index++) {
    cards[index].addEventListener('click', flipcard);
        
}

function updateScore(){
    score.innerText = counter;
    console.log('called')
}
function reset(){
    shuffle(piecesArray);
    writeCards();
    hasFlippedCard = false;
    lockBoard = false;
    for (let index = 0; index < cards.length; index++) {
        cards[index].addEventListener('click', flipcard);}
    firstCard = null;
    secondCard = null;
}



