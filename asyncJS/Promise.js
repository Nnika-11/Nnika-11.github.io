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
  .then(() => changeColors("BlueViolet"))  // return changeColors("BlueViolet")
  .then(() => changeColors("DarkCyan"))
  .then(() => changeColors("Lavender"));


const makeFakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    timer = Math.floor(Math.random() * 4);
    if (timer > 1) resolve(`Data from ${url}`);
    else reject("Connection timout");
  });
};

//return promise within then to do a ladder request!!!
makeFakeRequest("mySite/home")
  .then(data => {
    console.log(data);
    return makeFakeRequest("mySite/page2");
  })
  .then(() => {
    console.log("page 2 proceed");
    return makeFakeRequest("mySite/page3");
  })
  .then(data =>
    console.log(data))
  .catch(data =>
    console.log(data));
