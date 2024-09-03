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
            if (playerScore % 5===0 && compScore>0 && playerScore>compScore) {
                return `Congratulations !! YOU WIN. Your Score: ${playerScore}  Computer Score: ${compScore}`;
            } else if (compScore % 5===0 && playerScore>0 && compScore>playerScore) {
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

