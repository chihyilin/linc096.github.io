$("h1").css("backgroud-color", "blue")

$("h1").click(function() {
    console.log("you clicked it...");
});


$("image").mouseleave(function() {
    console.log("backgroud-color", "blue");
});


$("h1").click(function() {
    console.log("you clicked it...");
    $("h1").addClass("active")
});