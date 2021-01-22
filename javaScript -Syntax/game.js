// alert("do you want to play a game")
// //creat a secretnumber
// var secretnumber = 6;
// //ask user for guess
// var guess = prompt ("guess a number")

// //check if guess is right
// if (guess == secretnumber) {
//     alert("now your guess is right!");
// }
// else if (guess > secretnumber) {
//     alert ("too high,  guess again")
// }
// else if (guess < secretnumber) {
//     alert ("too low,  guess again")
// }
let maxNumber = parseInt(prompt("enter your max naumber"));
while(!maxNumber){
    maxNumber = parseInt(prompt("enter a valid number"));
}
const target = Math.floor(Math.random() * maxNumber) +1;
console.log(target);
let guess = parseInt(prompt("enter yor guess number"));
let counter= 1;
while(parseInt(guess) !== target){
    if(guess==="q")break;
    counter++;
    if(guess > target){
        guess= prompt("too heigh guess another number");
    }
    else{
        guess= prompt("too low guess another number");
    }
}
if(guess === 'q'){
    alert('you qut the game');
} else{
    alert(`you got it! it took you ${counter} guesses`)
}    
// for(let i=0; i<=20; i++){
//     console.log(i);
// }