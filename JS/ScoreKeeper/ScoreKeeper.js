ps1 = document.querySelectorAll(".player1");
ps2 = document.querySelectorAll(".player2");
p1 = document.querySelector("#p1");
p2 = document.querySelector("#p2");
p1Score = document.querySelector("#p1Score");
p2Score = document.querySelector("#p2Score");
maxValue = document.querySelector("#maxValue");

  setScore(ps1, p1Score, p1);
  setScore(ps2, p2Score, p2);



function setScore(players, playerScore, player) {


  players.forEach((item) => {
    item.removeEventListener("click");
    score = parseInt(playerScore.innerText);
    item.addEventListener("click", () => {
      score ++;
      if (score == parseInt(maxValue.value)) {
        player.classList.add("winner");
      }
      if (score > parseInt(maxValue.value));
      else
        playerScore.innerText = score;
    })
  });
}

reset = document.querySelector(".btn");
reset.addEventListener("click", () =>{
  p1.classList.remove("winner");
  p2.classList.remove("winner");
  p1Score.innerText = 0;
  p2Score.innerText = 0;
  maxValue.value = 10;
  setScore(ps1, p1Score, p1);
  setScore(ps2, p2Score, p2);
});

//exception handling
maxValue.addEventListener("click", () => {
  maxValue.value = "";
});
maxValue.addEventListener("mouseout", () => {
  if (maxValue.value <= 0 || !parseInt(maxValue.value))
    maxValue.value = "10"
});
