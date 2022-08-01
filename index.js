let computerScore = 0;
let playerScore = 0;
let drawScore = 0;

        function computerPlay() {      
            const gameArray = ['rock','paper','scissors']; 
            const random = Math.floor(Math.random() * gameArray.length);
            return gameArray[random];
        }
    

            
        const btn = document.querySelectorAll('button.rps');
        let playerInput = btn.forEach((button) => {       
            button.addEventListener('click', () => {
                playerInput = button.id;
                alert('You chose ' + playerInput.charAt(0).toUpperCase() + playerInput.slice(1));
            });
        });   
        
        let mContent = document.querySelector('.mContent');
        let pScore = document.querySelector('.pScore');
        let cScore = document.querySelector('.cScore');
        let dScore = document.querySelector('.dScore');
        let start = document.querySelector('button#ready');

        function playRound(playerSelection, computerSelection) {
            

            if (playerSelection == computerSelection) {
                drawScore++;
                mContent.textContent = "You Tied!";

            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                computerScore++;
                mContent.textContent = 'You Lose! Paper beats Rock';
                
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                playerScore++;
                mContent.textContent = "You Win! Rock beats Scissors";
                
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                playerScore++;
                mContent.textContent = 'You Win! Paper beats Rock';
                
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                computerScore++;
                mContent.textContent = 'You Lose! Scissors beats Paper';
                
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                playerScore++;
                mContent.textContent = 'You Win! Scissors beats Paper';
                
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                computerScore++;
                mContent.textContent = 'You Lose! Rock beats Scissors';   
            }

        };

    function game() {
              
        const playerSelection = playerInput;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        pScore.textContent = 'Player Score: ' + playerScore;
        cScore.textContent = 'Computer Score: ' + computerScore;
        dScore.textContent = 'Draws: ' + drawScore;                                           
    };

    start.addEventListener('click', () => {
        game();
    });
    
 