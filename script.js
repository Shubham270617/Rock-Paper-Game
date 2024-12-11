let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  let choices_preset = ["Rock", "Paper", "Scissors"];
  const randIndx = Math.floor(Math.random() * 3);
  return choices_preset[randIndx];
};

const drawGame = () => {
  console.log("Game was drawn");
  msg.innerText = "Game Draw. Play Again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,  userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `User wins! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    msg.innerText = `You Loss! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "Red";
    compScore++;
    compScorePara.innerText = compScore;
  }
  console.log("User Score:", userScore);
  console.log("Computer Score:", compScore);
};

const playGame = (userChoice) => {
  //Genrate computer Choices -> modular
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
