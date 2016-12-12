console.log("Hello world");


$("body").css("background-color","white");



$(".mybutton, .mybutton2, .mybutton3, .mybutton4, .mybutton5, .mybutton6").mouseenter(function() {
    $("body").css("background-color","#ee82ee");
    
    $(".mybutton, .mybutton2, .mybutton3, .mybutton4, .mybutton5, .mybutton6").mouseleave(function() {
$("body").css("background-color","white");

});

});

$('#date, #date2, #date3, #date4, #date5, #date6').hide();
// 
$(".mybutton").hover(function(){
    $("#date").show();
});

$(".mybutton").mouseout(function(){
    $("#date").hide();
});

$(".mybutton2").hover(function(){
    $("#date2").show();
});

$(".mybutton2").mouseout(function(){
    $("#date2").hide();
});

$(".mybutton3").hover(function(){
    $("#date3").show();
}, function(){
    $("#date3").hide();
    
});

$(".mybutton4").hover(function(){
    $("#date4").show();
}, function(){
    $("#date4").hide();
});

$(".mybutton5").hover(function(){
    $("#date5").show();
}, function(){
    $("#date5").hide();
    
});

$(".mybutton6").hover(function(){
    $("#date6").show();
}, function(){
    $("#date6").hide();
    
});