$("body").css("background-color","blue");

var clicks = 0;


$("button").click(function() {
        console.log("hello");
    clicks++;
    $("body").css("background-color","yellow");
    console.log(clicks);
});

var counter = 0;

for (var i = 0; i < 10; i++) {
    counter++;
    console.log(counter);
    $("body").append("<div class='dot'></div>");
}


$("dot").each(function(){
     console.log("found a dot");
     $(this).html(counter);
});

$(".dot").click(function(){
    $(this).toggleClass("whatever");
});