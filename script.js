let computerScore = 0;
let playerScore = 0;



let buttons = document.querySelectorAll('.play_button')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', playerPlay)
})

function playerPlay(e){
    let playerChoice = e.target.id;
      
    if (computerScore < 5 && playerScore < 5){
   
        result = playRound(playerChoice, computerPlay())
           
        document.getElementById("current_play").innerHTML = result[0];
        document.getElementById("player_choice").innerHTML = result[1];
        document.getElementById("computer_choice").innerHTML = result[2];

        document.getElementById("player_score").innerHTML = playerScore; 
        document.getElementById("computer_score").innerHTML = computerScore; 
    }
    else{
        console.log("GAME OVER!!!")
        endGame();
    }
}

const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber) {
          case 0:
              return "rock";
          case 1:
              return "paper";
          case 2:
              return "scissors";
      }
  };

  const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === computerSelection) {
        return ["It's a tie!", playerSelection.toUpperCase(), computerSelection.toUpperCase()];
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            return [`Sorry player, Computer won!`,playerSelection.toUpperCase(), computerSelection.toUpperCase()];
        } else {
            playerScore += 1;
            return [`Congratulations, you won!`, playerSelection.toUpperCase(), computerSelection.toUpperCase()]; 
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            return [`Sorry player, Computer won!`, playerSelection.toUpperCase(), computerSelection.toUpperCase()];
        } else {
            playerScore +=1
            return [`Congratulations, you won!`, playerSelection.toUpperCase(), computerSelection.toUpperCase()]; 
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            return [`Sorry player, Computer won!`, playerSelection.toUpperCase(), computerSelection.toUpperCase()];
        } else {
            playerScore += 1;
            return [`Congratulations, you won!`, playerSelection.toUpperCase(), computerSelection.toUpperCase()]; 
        }
    }
};

const endGame = () => {
    document.getElementById("current_play").innerHTML = ""; 

    //disable all buttons
    buttons.forEach(function(currentBtn){
        currentBtn.disabled = true;
      })

    
    if (playerScore > computerScore ) {
        document.getElementById("current_play").innerHTML = `Game Over! You Won!`
        
    } else if (computerScore > playerScore) {
        document.getElementById("current_play").innerHTML = `Game Over! You Lost`
        
    } else {
        document.getElementById("current_play").innerHTML =  `Game Over! \nIt's a tie!!🍻`
        
    }
    //reload page after 5 secs
    setTimeout(function(){
        window.location.reload();
     }, 5000);
}
