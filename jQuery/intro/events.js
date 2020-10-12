// Events//
//click keypress on
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
