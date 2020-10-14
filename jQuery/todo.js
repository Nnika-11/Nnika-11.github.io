//check of spesific todos

//$("li").on("click", function(){ - will not work with appended li obj
//second ardument - when li clicked inside ul
//because ul already loaded, while potential li are not but listeners working once only
$("ul").on("click","li", function(){ //will work with all potential and current li
  $(this).toggleClass("completed");
});
//delete icon
$("ul").on("click","span", function(event){
  //prevent event bubbling with event
  $(this).parent().fadeOut(800,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
  if(event.which===13){
    var newTask = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span>X</span> "+newTask+"</li>");
  }

});
