let userScore = 0;
let cpuScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const cpuScorePara = document.querySelector("#cpu-score");

const genCpuChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "";
};

const showWinner = (userWin, userChoice, cpuChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!. Your ${userChoice} beats ${cpuChoice}`;
        msg.style.backgroundColor = "green";
    } else {
      cpuScore++;
      cpuScorePara.innerText = cpuScore; 
        msg.innerText = `You lose. ${cpuChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
};

const playGame = (userChoice) => {

  const cpuChoice = genCpuChoice();

  if(userChoice === cpuChoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userChoice === "rock") {
      userWin =  cpuChoice === "paper" ? false : true
    } else if(userChoice === "paper") {
      userWin = cpuChoice === "scissors" ? false : true
    } else  {
        userWin = cpuChoice === "rock" ? false : true
    }
    showWinner(userWin, userChoice, cpuChoice);
  };
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
