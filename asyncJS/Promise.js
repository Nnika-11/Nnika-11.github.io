let changeColor = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  })
};

changeColor()
  .then(() => {
    document.body.style.backgroundColor = "RosyBrown";
    return changeColor()
  })
  .then(() => {
    document.body.style.backgroundColor = "BlueViolet";
    return changeColor()
  })
  .then(() =>
    document.body.style.backgroundColor = "DarkCyan"
  );


const changeColors = (color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, 1000);
  })
};

changeColors("RosyBrown")
.then(()=>changeColors("BlueViolet"))
.then(()=>changeColors("DarkCyan"))
.then(()=>changeColors("Lavender"));
