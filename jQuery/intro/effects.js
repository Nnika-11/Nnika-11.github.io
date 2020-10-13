// Effects //
//fading
$("#button1").click(function(){
   //  $("div").fadeOut(); //hide div display - none
  //   $("div").fadeOut(1000);
//  $("div").fadeOut("slow",function(){
//  $("div").fadeIn("slow",function(){
 $("div").fadeToggle("slow",function(){
      console.log("fade completed"); // will do after
      //delete them off the Document
      //$(this).remove(); - will remove after fading
});
  //$("div").remove(); - will remove without fading
  console.log("fade completed"); //possible to start with fading - not after!
});

//sliding
//animate height
$("#button2").click(function(){
   // $("div").slideDown();
   $("div").slideToggle(2000);
   });
