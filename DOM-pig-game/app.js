/*

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

challenges -> 
    
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
    (Hint: Always save the previous dice roll in a separate variable) - done 
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined
    score of 100. (Hint: you can read that value with the .value property in JavaScript. 
    This is a good oportunity to use google to figure this out :) - done
    */

var score, roundScore, activePlayer, map, gamePlaying;

var prevDiceScore;

init();



document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // var dice = 6;   //for testing of challenge-1
        var dice = Math.floor(Math.random() * 6) + 1;

        // challenge 1 

        if (prevDiceScore == 6 && dice == 6) {
            nextPlayer();
        }
        //2. Display 
        else {
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png'

            //3. Update  the round score if dice != 1 
            if (dice != 1) {
                //add score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            else {
                // next player
                nextPlayer();
            }
            prevDiceScore = dice;
        }
    }
    //1. Random number

});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //add current score to global score
        score[activePlayer] += roundScore;

        //update UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        var input = document.querySelector('.final-score').value;
        //Undefined , 0 , null  or "" is coerced false
        var winningScore ;
        if(input){
            winningScore = input ;
        }else{
            winningScore = 100 ;
        }
        //check if win or not
        if (score[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    prevDiceScore = 0;
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    prevDiceScore = 0;

}













// document.querySelector('#current-'+activePlayer).textContent = dice;
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>+ dice </em>';
// var a = document.querySelector('#score-0').textContent;
// console.log(a);