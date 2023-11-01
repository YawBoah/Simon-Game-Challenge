
var buttonColours =["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*3)+1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(50).fadeOut(100).fadeIn(50);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}