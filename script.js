"use strict";

const generateRandomNumber = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;


let lowerLimit;
let higherLimit;
let highScore=0;

document.querySelector('.limitbtn-both').addEventListener("click", function() {
    lowerLimit = Number(document.querySelector('.lowerlimit').value);
    higherLimit = Number(document.querySelector('.higherlimit').value);
    
    // Validate inputs
    if (lowerLimit >= higherLimit) {
        alert('Lower limit must be less than higher limit!');
        return;
    }
    
    if (!lowerLimit || !higherLimit) {
        alert('Please enter both limits!');
        return;
    }
    
    // Update display
    document.querySelector('.lower-limit').textContent = lowerLimit;
    document.querySelector('.higher-limit').textContent = higherLimit;
});


let correctAnswer;
let guessesLeft;

document.querySelector('.generate').addEventListener("click", function(){
    if (higherLimit && lowerLimit) {
        correctAnswer = generateRandomNumber(lowerLimit, higherLimit);
        console.log(correctAnswer);
    }
    
    guessesLeft = higherLimit - lowerLimit;
    document.querySelector('.currentScore').textContent=guessesLeft;
});


document.querySelector('.check').addEventListener("click", function(){
    let guessedAns=Number(document.querySelector('.guess').value);
    let returnStatement;

    //when the guess is correct
    if(guessedAns===correctAnswer){
        returnStatement = `Yes, you guessed it right`;
        highScore=Math.max(highScore,guessesLeft);
        document.querySelector('.highscore').textContent=highScore;
        document.querySelector('.number').textContent=correctAnswer;
        document.body.classList.add('win');
        document.querySelector('.number').style.width='30rem';
    }
    
    
    else{
        if(guessesLeft>1){
            (guessedAns < correctAnswer)? returnStatement=`Your guess is low, try guessing a higher number`: returnStatement=`Your guess is high, try guessing a lower number`;
            guessesLeft--;
            document.querySelector('.currentScore').textContent=guessesLeft;
        }
        else if(guessesLeft==1){
            returnStatement='Better luck next time!';
            document.body.classList.add('lose');
        }
    }
    
    document.querySelector('.message').textContent=returnStatement;
});


document.querySelector('.again').addEventListener('click',function(){
    guessesLeft=0;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.currentScore').textContent=guessesLeft;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.body.classList.remove('win'); 
    document.body.classList.remove('lose'); 
});































// 'use strict';

// const correctAnswer=Math.trunc(Math.random()*20)+1;
// console.log(correctAnswer);

// document.querySelector(".check").addEventListener("click", function(){
//     let guessedAns;
//     guessedAns=Number(document.querySelector(".guess").value);
    
//     let returnStatement;
    
//     if(guessedAns>correctAnswer){
//         returnStatement=`You're guessing too high`;
//     } else if(guessedAns<correctAnswer){
//         returnStatement=`You're guessing too low`;
//     } else{
//         returnStatement=`Yes, you guessed it right`;
//     }
    
//     document.querySelector(".message").textContent=returnStatement;
// });





















