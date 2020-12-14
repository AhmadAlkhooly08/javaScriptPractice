alert("do you want to play a game")
//creat a secretnumber
var secretnumber = 6;
//ask user for guess
var guess = prompt ("guess a number")

//check if guess is right
if (guess == secretnumber) {
    alert("now your guess is right!");
}
else if (guess > secretnumber) {
    alert ("too high,  guess again")
}
else if (guess < secretnumber) {
    alert ("too low,  guess again")
}