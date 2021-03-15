// async before a function makes the function return a promise:

//note - I tried to rewrite it with async but turns out setTimeout doesnt work with async

// const changeColors = (color) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, 1000);
//   })
// };
const changeColor = async(color, time)=>{
  await new Promise(resolve => setTimeout(resolve, time));
  document.body.style.backgroundColor = color;
}


// await before a function makes the function wait for a promise:

(async function deleayColors(){
  await changeColor("BlueViolet",1000)
  await changeColor("Lavender",1000);
  changeColor("RosyBrown",1000);
})();
