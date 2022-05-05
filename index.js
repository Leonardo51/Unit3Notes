const cardList = document.querySelector('.cardList' );
const totalScore = document.querySelector('h1');
let gameScore = 0;

buildBoard();

function addScore(){
    if (e= 'active'){
        gameScore = gameScore+1;
        totalScore.textContent=`${gameScore}`;

    }else if (e='inactive'){
        gameScore = gameScore+2;
        totalScore.textContent=`${gameScore}`;
    }
}

let interval = setInterval(function (){
    addCard(cardList.children.length+1)
},2000);

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for(let i=0; i <12;i++){
        addCard('starter');
    }
}

cardList.addEventListener('click', function(e){
    console.log(e.target);
    addScore();
    if(e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length<1){
        clearInterval(interval);
    }


})