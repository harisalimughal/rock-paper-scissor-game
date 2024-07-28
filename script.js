let humanScore=0;
let computerScore=0;

function getComputerChoice(min, max){
    let choice=Math.random() * (max - min) + min; 
    let num=Math.floor(choice)
    return num

}



    
function getHumanChoice(){
    let sign = Number(window.prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissor ",""));

    if(sign!=1 && sign!==2 && sign!=3){
        console.log("You entered invalid value")
               }
    
        return sign;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === 1 && computerChoice === 2){
        console.log("You Lose !, Paper beats Rock")
        computerScore++;
    }

    else if(humanChoice === 1 && computerChoice === 3){
        console.log("You Win!, Rock beats scissors ")
        humanChoice++;
    }

    else if(humanChoice === 2 && computerChoice === 1){
        console.log("You Win!, Paper beats Rock ")
        humanChoice++;
    }

    else if(humanChoice === 2 && computerChoice === 3){
        console.log("You Lose!, Scissors beats Paper ")
        computerScore++;
    }

    else if(humanChoice === computerChoice) {
        console.log("It's draw, both members select equal choice")
    }
    
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice(1,4);

  
  playRound(humanSelection, computerSelection);
  

