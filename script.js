// Function to handle the game logic
let compScore=0,playerScore=0;
function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    

    let result,Score;
    if (playerSelection === computerSelection) {
        result = 'It\'s a tie!';
       
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        updateScore();
        result = `Yeah ${playerSelection} beats ${computerSelection}.`;
    
    } else {
        result = `Nah! ${computerSelection} beats ${playerSelection}.`;
        compScore++;
        updateScore();
        
    }
    function updateScore() {
        // Function to determine the score message
        function getScoreMessage() {
            if (playerScore === 5) {
                return `Congratulations !! YOU WIN. Your Score: ${playerScore}  Computer Score: ${compScore}`;
            } else if (compScore === 5) {
                return `YOU LOSE, Better Luck Next Time. Your Score: ${playerScore}  Computer Score: ${compScore}`;
            } else {
                return `Your Score: ${playerScore} Computer Score: ${compScore}`;
            }
        }
    
        // Update the scoreDisplay element
        const scoreDisplay = document.getElementById('scoreDisplay');
        if (scoreDisplay) {
            scoreDisplay.textContent = getScoreMessage();
        } else {
            console.error('Score display element not found');
        }
    }

    // Update the result div with the result
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = result;


}

// Adding event listeners to the buttons
document.getElementById('rockBtn').addEventListener('click', () => playRound('rock'));
document.getElementById('paperBtn').addEventListener('click', () => playRound('paper'));
document.getElementById('scissorsBtn').addEventListener('click', () => playRound('scissors'));







    
function getHumanChoice(){
   // let sign = Number(window.prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissor. It will be a 5 Round Game",""));

    if(sign!=1 && sign!==2 && sign!=3){
        console.log("You entered invalid value")
               }
    
        return sign;
}


  function playGame(){
    let humanScore=0;
    let computerScore=0;
    
    
        function playRound(humanChoice, computerChoice) {
            if(humanChoice === 1 && computerChoice === 2){
                console.log("You Lose !, Paper beats Rock")
                computerScore++;
            }

            else if(humanChoice === 1 && computerChoice === 3){
                console.log("You Win!, Rock beats scissors ")
                humanScore++;
            }

            else if(humanChoice === 2 && computerChoice === 1){
                console.log("You Win!, Paper beats Rock ")
                humanScore++;
            }

            else if(humanChoice === 2 && computerChoice === 3){
                console.log("You Lose!, Scissors beats Paper ")
                computerScore++;
            }

            else if(humanChoice === 3 && computerChoice === 1){
                console.log("You Lose!, Rock beats Scissor ")
                computerScore++;
            }

            else if(humanChoice === 3 && computerChoice === 2){
                console.log("You Win!, Scissors beats Paper ")
                humanScore++;
            }

            else if(humanChoice === computerChoice) {
                console.log("It's draw, both members select equal choice")
            }

            
        }

        for(i=1; i<=5;i++){
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(1,4);
        playRound(humanSelection, computerSelection);
        }


        return [humanScore,computerScore]

  }
  
  let [human_score,computer_Score]=playGame();
 console.log("Your Score: " + human_score);
 console.log("Computer Score:" + computer_Score);
 
if(human_score>computer_Score){
    console.log("Congratulations!!, YOU WON")
}
else if(human_score===computer_Score){
    console.log("It's a Tie, NO ONE WON, You can play again")
}
else{
    console.log("oh!, YOU LOSE, BETTER LUCK NEXT TIME")
}
  

