const randomnumber = (parseInt(Math.random()*100+1));

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#Guessfield')
const guessSlot = document.querySelector('.Guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.loworhi')
const startOver = document.querySelector('.resultParse')

const p = document.createElement('p')

let prevGuess = [];
let numguess = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click',function(e){
        // in form the value transfer into server or where it is called so we keep preventdefault which keep its value.
        e.preventDefault()
          const guess = parseInt(userinput.value);
          console.log(guess);
          validateGuess(guess);
    });
}

// it check wether it is checking the valid number that is it should not be -ve,alphabet, <100
function validateGuess(guess){
      if(isNaN(guess)){
        alert('please enter a valid number')
      } else if (guess<1)   {
        alert('please enter a number more than 1')
      } else if(guess>100){
        alert('please enter a number less than 100')
      } else{
        prevGuess.push(guess)
        if(numguess === 11){
         displayGuess(guess)
         displayMessage(`Game Over.random number was ${randomnumber}`)
         endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)

        }
      }
}


// it check whether the ur validvalue is correct,low,high,equal
function checkGuess(guess){
       if(guess ===  randomnumber){
        displayMessage(`You guessed it right`);
        endGame();
       } else if(guess < randomnumber){
        displayMessage(`number is too low`);
       }
        else if(guess > randomnumber){
        displayMessage(`number is too high`);
       }
}


// it cleans the inputted value to enter the next value , update the my previous guesss,remaining guesss
function displayGuess(guess){
    userinput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numguess++;
    remaining.innerHTML = `${11-numguess} `
}


// it print the messgae passed on loworhi id
function displayMessage(message){
     loworhi.innerHTML = `<h2>${message}</h2>`
}



function endGame(){
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newgame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
//    const newGameButton = document.querySelector('#newgame')
//    newGameButton.addEventListener('click', function(e){
    randomnumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numguess}`;
     userinput.removeAttribute('disabled');
     startOver.removeChild(p);
    playGame = true;
//    });
}