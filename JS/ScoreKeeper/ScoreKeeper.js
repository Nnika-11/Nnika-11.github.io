ps1 = document.querySelectorAll(".player1");
ps2 = document.querySelectorAll(".player2");
p1 = document.querySelector("#p1");
p2 = document.querySelector("#p2");
p1Score = document.querySelector("#p1Score");
p2Score = document.querySelector("#p2Score");
maxValue = document.querySelector("#maxValue");

p1Points = 0;
p2Points = 0;
gameOver = false;

ps1.forEach((item) => {
      item.addEventListener("click", () => {
        if (!gameOver) {
          p1Points++;
          p1Score.innerText = p1Points;
          if (p1Points == parseInt(maxValue.value)) {
            p1.classList.add("winner");
            gameOver = true;
          }
        }
      });
    });

    reset = document.querySelector(".btn"); reset.addEventListener("click", () => {
      p1.classList.remove("winner");
      p2.classList.remove("winner");
      p1Score.innerText = 0;
      p2Score.innerText = 0;
      // maxValue.value = 10;
      p1Points = 0;
      p2Points = 0;
      gameOver = false;
    });

    //exception handling
    maxValue.addEventListener("click", () => {
      maxValue.value = "";
    }); maxValue.addEventListener("mouseout", () => {
      if (maxValue.value <= 0 || !parseInt(maxValue.value))
        maxValue.value = "10"
    });
