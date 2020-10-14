//check of spesific todos
$("li").on("click", function(){
  $(this).toggleClass("completed");
});
//delete icon
$("span").on("click", function(event){
  //prevent event bubbling with event
  $(this).parent().fadeOut(1000,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
