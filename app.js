//Game variables
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min , max),
    guessesLeft = 3;

//UI Variables
let game = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    msg = document.querySelector('#msg');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Add event-listener play again btn
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again')
    {
        window.location.reload();
    }
});

//Listen for Guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

  //Validation of guessed number
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Number must be between ${min} and ${max}`, 'red');
    }
    else{
    // Check number is winning num
    if(guess === winningNum)
    {
        //Game Over -WON!
        
         //Disable input
         guessInput.disabled = true;
         gameOver(true, `YOU WON!!!..${guess} is a winning number`);
        //Play Again
        guessBtn.value = 'PLAY AGAIN';
        guessBtn.className += 'play-again';
      
    }else{
        
        guessesLeft -= 1;

        if(guessesLeft === 0){
            //Game Over -LOSE

            //Disable input
            guessInput.disabled = true;
             gameOver(false , `YOU LOSE....winning number was ${winningNum}`);
            //Play Again
            guessBtn.value = 'PLAY AGAIN';
            guessBtn.className += 'play-again';      
        }
        else{
            //Game Over -Continue
       
            //clear input
            guessInput.value = '';
            gameOver(false , `${guess} is not correct , ${guessesLeft} guesses left`); 
        }
    }
}
});

function gameOver(won , message){
        
         won === true ? color = 'green' : color = 'red';
         //Set border color
         guessInput.style.borderColor = color;
         //Set text Color
         msg.style.color = color;
        
        setMessage(message, color);
       
}     
function setMessage(message ,textColor)
{ 
    msg.textContent = message; 
    msg.style.color = textColor;
}

function getRandomNumber(min , max)
{
    return Math.floor(Math.random() *(max-min +1)+min);
}