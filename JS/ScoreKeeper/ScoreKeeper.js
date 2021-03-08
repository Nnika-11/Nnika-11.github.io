p1 = document.querySelectorAll(".player1");
p2 = document.querySelectorAll(".player2");
p1Score = document.querySelector("#p1Score");
p2Score = document.querySelector("#p2Score");
maxValue = document.querySelector("#maxValue");

setScore(p1,p1Score);
setScore(p2,p2Score);



function setScore(player, score){
player.forEach((item) => {
  item.addEventListener("click", ()=>{
    score.innerText = parseInt(score.innerText)+1;
    
  })
});
}

//exception handling
maxValue.addEventListener("click",()=>{
  maxValue.value = "";
});
maxValue.addEventListener("mouseout",()=>{
  if(maxValue.value<=0||!parseInt(maxValue.value))
    maxValue.value = "10"
});
