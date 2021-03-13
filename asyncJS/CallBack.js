function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  document.body.style.backgroundColor = "azure";
  changeColor("yellow",
    () => changeColor("BlueViolet",
      () => changeColor("DarkCyan",
        () => changeColor("Lavender", () => {})
      )
    )
  );
  let sum = num1 + num2;
  myCallback(sum);
}
// function changeColor(color, doNext){
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     doNext();
//   }, 1000);
// }
const changeColor = (color, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    doNext();
  }, 1000);
}

myCalculator(5, 5, myDisplayer);


// fake request with CallBack

const fakeRequest = (url, success, failure) => {
  const timer = Math.floor(Math.random() * 4);
  setTimeout(() => {
    if (timer > 1) success();
    else failure();
  }), timer;
}


//lets run 3 fake requests one after another

fakeRequest("mywebsite/page1",
  () => {
    console.log("success page1");
    fakeRequest("mywebsite/page2",
      () => {
        console.log("success page2");
        fakeRequest("mywebsite/page3",
          () => console.log("success page3"),
          () => console.log("failure page3"))
      },
      () => console.log("failure page2"))

  },
  () => console.log("failure page1"));
