$("body").css("background-color","white");

var clicks = 0;


$("button").click(function() {
        console.log("hello");
    clicks++;
    $("body").css("background-color","#D8BFD8");
    console.log(clicks);
});

var counter = 0;

for (var i = 0; i < 30; i++) {
    counter++;
    console.log(counter);
    $("body").append("<div class='dot'></div>");
}

var leftPosition = 0;
var topPosition = 0;
$(".dot").each(function(){
     console.log("found a dot");
     $(this).css("left",Math.floor(Math.random()*1500));
     leftPosition = leftPosition + 100;
     $(this).css("top",Math.floor(Math.random()*1000));
     topPosition = topPosition + 50;

     
});

var topmost = 100;

$(".dot").click(function(){
    $(this).toggleClass("whatever");
    $(this).css("z-index",topmost);
    topmost++;
});