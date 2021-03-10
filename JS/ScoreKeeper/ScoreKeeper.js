maxValue = document.querySelector("#maxValue");
p1Btns = document.querySelectorAll(".player1");
p2Btns = document.querySelectorAll(".player2");

gameOver = false;
player1 = {
  display: document.querySelector("#p1"),
  score: document.querySelector("#p1Score"),
  points: 0
}

player2 = {
  display: document.querySelector("#p2"),
  score: document.querySelector("#p2Score"),
  points: 0
}

p1Btns.forEach((item) => {
  item.addEventListener("click", () => {
    scoreChange(player1);
  });
});

p2Btns.forEach((item) => {
  item.addEventListener("click", () => {
    scoreChange(player2);
  });
});

function scoreChange(player) {
  if (!gameOver) {
    player.points++;
    player.score.innerText = player.points;
    if (player.points == parseInt(maxValue.value)) {
      player.display.classList.add("winner");
      gameOver = true;
    }
  }
}

resetBtn = document.querySelector(".btn");
resetBtn.addEventListener("click", () => reset());

function reset() {
  for (let p of [player1, player2]) {
    p.display.classList.remove("winner");
    p.score.innerText = 0;
    p.points = 0;
    gameOver = false;
  }
}
//exception handling
maxValue.addEventListener("click", () => {
  maxValue.value = "";
  reset();
});
maxValue.addEventListener("mouseout", () => {
  if (maxValue.value <= 0 || !parseInt(maxValue.value))
    maxValue.value = "10"
});
