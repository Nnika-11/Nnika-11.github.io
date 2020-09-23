// alert("connected");
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
for(var i = 0; i<squares.length; i++){
  //add initial colors to squates
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
      //grab clicked color
      var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
      if(clickedColor === pickedColor){
        // (clickedColor===pickedColor) alert("correct");
        messageDisplay.textContent = "Correct!"
        changeColors();
    }
      else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try again!"
        }
  });
}

function changeColors(){
  //loop throug all squares
  for(var i=0; i<squares.length; i++){
    //change color to match picked one
    squares[i].style.backgroundColor = pickedColor;
  }
  // h1.style.backgroundColor = pickedColor;
}
