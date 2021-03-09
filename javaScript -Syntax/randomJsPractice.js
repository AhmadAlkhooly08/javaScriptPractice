// console.log("welcome back to JS Ahmad!!!!!!");
let year = 2008;
// age = age +10;
// year = year +8;
let age = 13;
// age = false;
// age = 345;
let name = 'ahmad';
// name[3]
// name.length
// name.trim()
// name.toUpperCase()
// name.indexOf('h')
// console.log(name.slice(2)) 
// name.length
// console.log(name.replace('a','gf'))
// console.log(alert(name))
// let all =[name,year,age];
// console.log(all.push('rate','mhf')) 
// console.log(all.pop()) 
// all.unshift("dbafebg")
// all.shift()
// let ad =['dwg','edf','reds'];
// ad[1]='dweg';
// ad.indexOf('edf')
//ad.reverse()
//ad.slice(1)
//ad.includes('dwg')
//ad.splice(1, 0, 'Feb');
//ad.sort();
// let a1 = ['a','b','c']
// let a2 = ['d','e','f','g']
// let a3 = a1.concat(a2);

// let rate = prompt('put a rate');
// if(rate <= 1 && rate <= 2){
//     alert('baaaad!!!!!')
// }
// else if(rate === 3 || rate === 4 ){
//     alert('not bad')
// }
// else if(rate === 5){
//     alert('gooood')
// }

// 1000>100 && 10<20
// 10<9 || 100 > 10
// !10>9 
let person = {
    name:'AHMAD',
    lastName:'ALKHOOLY',
    age:13,
    home : 'istanbul-turkey'

};
document.getElementById("demo").innerHTML = person.name  +  person.lastName + " is " + person.age + " years old. " + 'lives in ' + person.home ;
// person.name
// person['age']
// person.age = 13
// person.home = 'istanbul-turkey'
// for(let i=1; i<=10; i++){
//     console.log(i);
// }
// for(let i=0; i< person.length; i++){
//     console.log(i,person[i]);
// }
for(let i=0; i<=40; i+=2){
    console.log(i);
}
for(let i=0; i<=100; i+=10){
    console.log(i);
}
for (let i=100; i>=0; i-=10){
    console.log(i)
}
let secretNum= 123;
let q = prompt('what is the secret number');
while (q != secretNum){
    q=prompt('wrooooong what is the secret number');
}
if(q == secretNum){
    alert('you got it');
}
let as =['wolf','hayena','dear','bear','snaik','crocadail','cheta','elefent','lion','tiger']
for(let a of as){
    console.log(a)
}
for(let per in  person){
    console.log(`${per}:${person[per]}`);
}
