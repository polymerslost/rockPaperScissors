let computerChoice = [
    "rock",
    "paper",
    "scissors"
  ];
  // make computer to return rock paper or scissors
let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;
function playRound() {
  let computerOutput = computerChoice[Math.floor(Math.random()*computerChoice.length)];
   console.log(computerOutput);   
    playersChoice = prompt('Make your call');//make player input
    console.log(playersChoice); 
    if (computerOutput === 'rock' && playersChoice.toLowerCase() == 'paper') {
      console.log('You win, paper beats rock')
      winCounter++;
      console.log(winCounter)
    }
    else if (computerOutput === 'rock' && playersChoice.toLowerCase() == 'scissors') {
      console.log('You lose, rock beats scissors')
      loseCounter++;
    }
    else if (computerOutput === 'rock' && playersChoice.toLowerCase() == 'rock'){
      console.log('Round is a draw')
      drawCounter++;
    }
    else if (computerOutput === 'scissors' && playersChoice.toLowerCase() == 'rock'){
      console.log('You win, rock beats scissors')
      winCounter++;
    }
    else if (computerOutput === 'scissors' && playersChoice.toLowerCase() == 'paper'){
      console.log('You lose, scissors beat rock')
      loseCounter++;
    }
    else if (computerOutput === 'scissors' && playersChoice.toLowerCase() == 'scissors'){
      console.log('Round is a draw')
      drawCounter++;
    }
    else if (computerOutput === 'paper' && playersChoice.toLowerCase() == 'rock'){
      console.log('You lose, paper beats rock')
      loseCounter++;
    }
    else if (computerOutput === 'paper' && playersChoice.toLowerCase() == 'paper'){
      console.log('Round is a draw')
      drawCounter++;
    }
    else if (computerOutput === 'paper' && playersChoice.toLowerCase() == 'scissors'){
      console.log('You win, scissors beat paper')
      winCounter++;
    }
    //set up unteractions between rock paper scissors

}

function gameLoop(){ //set up a 5 rounds loop

  for (let i = 0; i <= 4; i++) {
console.log(winCounter);
console.log(loseCounter); 
    playRound()
      if (i === 4 && winCounter > loseCounter) {
        console.log("You won "); 
        return('You won the game');
        }
      if (i === 4 && winCounter == loseCounter ) {
        console.log("Draw");
        return('Its a draw')
      }
      if (i === 4 && loseCounter > winCounter ) {
        console.log("You lost");
        return('You lost. That says a lot about our society')
      }
    
      
  }  
 
  
}
gameLoop()

