//get text of elements as one string
$("li").text();
//rewrite text of element
$("h1").text("new way to change text with Methods");
//get inner html as a one string
$("li").html();
//change inner html
$("ul").html("<li>change 1</li><li>change 2</li>");
//some css
$("img").css( "width","200px");
//get arrtibute val with attr() method and change src
$("img:first-of-type").attr("src","https://image.cnbcfm.com/api/v1/image/105828578-1554223245858gettyimages-149052633.jpeg?v=1554223281");
$("img:last").attr("src","https://www.kaytee.com/-/media/images/kaytee-na/us/learn-care/ask-the-pet-bird-experts/ways-to-show-parrot-love/parrot%20png.png");
//change input type to color
$("input").attr("type","color");
//extract value from input with val()
$("input").val("#666477");
//get val from select
$("select").val(); //but cant write new one
//working with classes
//add classes to html
$("h1").addClass("correct underlined");
//remove class
$("h1").removeClass("correct");
//change state (add/remove)
$("h1").toggleClass("correct");
