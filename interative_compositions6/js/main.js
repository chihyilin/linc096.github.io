$("body").css("background-color","white");

var clicks = 0;


$("button").click(function() {
        console.log("hello");
    clicks++;
    $("body").css("background-color","#00FFFF");
    console.log(clicks);
});

var counter = 0;

for (var i = 0; i < 65; i++) {
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