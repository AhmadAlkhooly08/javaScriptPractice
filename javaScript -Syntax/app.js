let secret=7;
let rating = prompt('what is the secret nomber');
if (rating == secret){
     alert("well done 😀");
}
while(rating < secret) {
     rating=prompt("😌😌😞😔 wrong low");
}
while (rating > secret) {
     rating=prompt("😌😌😞😔 wrong heigh");
}
// else{
//      prompt("hou have to write a number");
// }      

//login 
// const password = prompt("pleas enter a new password");
// if(password.length === 6){
//     alert("now you can get inside")
// }
// else if (password.length > 6){ 
//     alert("long password")
// }
// else{
//     alert("short password must be 6 characters")
// }

//truthy & falsy
//  const user = prompt("pleas enter uer password");
//  if (user){
//      console.log("truthy")
//  }
//  else{
//     console.log("falsy")
//  }
//  const age = 65;
//  if(age && age < 5 || age >= 65){
//      console.log("ujygfdx")
//  }
// const name = prompt("enter your first name please");
// if(!name){
//      prompt("enter your first name please");  
// }
