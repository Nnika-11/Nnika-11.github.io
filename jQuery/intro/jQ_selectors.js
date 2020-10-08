//dollar sign (selector).css(property, value);
//dont require loop through to change style
$("h1").css("background-color", "yellow");
//get 1-st el of h1 and add comment befor it while changing the parent
$("h1").eq(1).before( "<h1> //added before the specific h1(1)</h1>").css("margin-top", "-20px");
$("#c").append( "<span>. //added with id selector</span>" );
$("li a").css("color", "red"); //all a inside li
$("li:first-child").css("background-color", "white"); //first-of-type/first(slower)
var styles = {
  backgroundColor:"gray",
  border: "2px solid black"
}
//selectAll by class name using obj styles
$(".list").css(styles)
