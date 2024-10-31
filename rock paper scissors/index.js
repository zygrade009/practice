const choice=[`rock`,`paper`,`scissor`];

function getComputerChoice(){
    const index=Math.floor(Math.random()* 3);
    return choice[index];
}
function getHumanChoice(){
    const index=parseInt(prompt(`what is your option 
        1)rock 
        2)paper 
        3)scissor   `));
        return choice[index-1];
}
let humanScore;
let computerScore;
function playRound(){
    let humanChoice= getHumanChoice();
    let computerChoice= getComputerChoice();
    switch(humanChoice){
        default:
            break;
        case 'rock':
            if(computerChoice==='rock'){
                console.log(`tie`);
            }
            else if(computerChoice==='scissor'){
                console.log(`human wins and his score is ${++humanScore}`);
            }
            else{
                console.log(`computer wins ans his score is ${++computerScore}`);
            }
            break;
        case 'scissor':
            if(computerChoice==='scissor'){
                console.log(`tie`);
            }
            else if(computerChoice==='paper'){
                console.log(`human wins and his score is ${++humanScore}`);
            }
            else{
                console.log(`computer wins ans his score is ${++computerScore}`);
            }
            break;
        case 'paper':
            if(computerChoice==='paper'){
                console.log(`tie`);
            }
            else if(computerChoice==='rock'){
                    console.log(`human wins and his score is ${++humanScore}`);
            }
            else{
                console.log(`computer wins ans his score is ${++computerScore}`);
            }
            break;       
        return;
   }

}
function playGame(){
    humanScore=0;
    computerScore=0;
    for(let i=0;i<5;i++){
        playRound();
        console.log(`human score = ${humanScore} and computer score = ${computerScore} after round-${i+1}\n`);
    }
    return;
}

playGame();
