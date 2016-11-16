$("body").css("background-colot", "blue")

for (var i=0; i< 100; i++) {
    $("body").append("<div class='dot'></div>")

}

var visibility = 0;
var myCounter = 1;

$(".dot").each(function() {
    console.log(visibility);
   $(this) .css("opacity",visibility/100); 
   $(this) .html(myCounter);
   $(this) .css("height",myCounter+50);
   $(this) .css("width",myCounter+50);
   $(this) .css("top",Math.floor(Math.random()*1500));
   $(this) .css("left",Math.floor(Math.random()*1500));
   myCounter++;
   visibility++;
});



$(".dot").mouseenter(function() {
   console.log("Bubbles");
    $("#flag").show();

});

$("#status").mouseleave(function() {
    $("#flag").show();
    
});