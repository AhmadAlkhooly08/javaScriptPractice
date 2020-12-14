// var userName = prompt ("What is your name")
// alert("nice to meet you " + userName )
// console.log("hi there " +userName )

// var firstName = prompt ("what is your first name");
// var lastName = prompt ("what is your last name");
// var Age = prompt ("how old are you");
// console.log ("your full name is " + firstName + " " + lastName);
// console.log ("your age is " + Age + " years")

var age = prompt("who old are you");
console.log(typeof age)
// var days = age * 365;
// alert(age + " years is roughly " + days + " days");
// console.log (age + " years is roughly " + days + " days");
// if (age < 18) {
//     alert ("soory, you are not old enough to enter the page")
// }
//  prompt ("how old are you")

// if (age < 18) {
//     alert ("soory, you are not old enough to enter the page")
// }
// here i will do tge if / else exercise:
if (age < 0) {
    alert("error you can not enter")
}
else if (age == 21) {
    alert("happy 21st birthday")
}
else if (age  % 2 == 1) {
    alert("your age is odd")
}
