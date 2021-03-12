function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  document.body.style.backgroundColor = "azure";
  changeColor("yellow",
    () => changeColor("black",
      () => changeColor("white", () => {}))
  );
  let sum = num1 + num2;
  myCallback(sum);

}

const changeColor = (color, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    doNext();
  }, 1000);

}

myCalculator(5, 5, myDisplayer);
