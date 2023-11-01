
var buttonColours =["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function() {

    
    var userChosenColour = $(this).attr("id");
  
    
    userClickedPattern.push(userChosenColour);
  
    //console.log(userClickedPattern);
  
  });

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*3)+1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(50).fadeOut(100).fadeIn(50);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}