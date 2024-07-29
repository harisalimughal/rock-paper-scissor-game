

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
  

