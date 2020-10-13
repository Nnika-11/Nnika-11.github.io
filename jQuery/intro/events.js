// Events//
//click keypress on

//click
//apply to all collecton
$("button").click(function(){
  $("body").css( "background-color", "red");
});
//apply for clicked element (this)
$("button").click(function(){
  $(this).css( "background-color", "yellow");
  var btnText = $(this).text();
  console.log("You clicked "+btnText);
});
//user typing
//keydown - pressed
//keyup - when release the key
//keypress - between - more common
//keydown keyup - a code indicating which key is pressed
//keypress - indicates which character was entered (end result)
//"a" - 65 by keyup/keydown, but 97 by keypress
$("#text").keypress(function(event){ //obj event contain all info about keypress event
  console.log(event); // look charcode / keyCode / which (that refered by jQuerry) - code of key
  //enter key is 13
  if(event.which===13){
    console.log("Enter pressed");
  }
});
//on() - the most used - vanillaJS eventlistener
//$(obj).on(event, function)
$("h1").on("click", function(){
  $(this).css( "color", "blue");
});
$("input").on("keypress", function(){
  console.log("Key pressed");
});
$("button").on("mouseenter", function(){
  $(this).css( "background-color", "orange");
});
$("button").on("mouseleave", function(){
  $(this).css( "background-color", "");
});
//click - adds listeners for existing elements
//on - can be used for potential future elements
