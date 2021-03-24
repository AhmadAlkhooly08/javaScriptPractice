console.log("welcome back to JS Ahmad!!!!!!");
// let year = 2008;
// age = age +10;
// year = year +8;
// let age = 13;
// age = false;
// age = 345;
// let name = 'ahmad';
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
// ad.reverse()
// ad.slice(1)
// ad.includes('dwg')
// ad.splice(1, 0, 'Feb');
// ad.sort();
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
// let person = {
//     name:'AHMAD',
//     lastName:'ALKHOOLY',
//     age:13,
//     home : 'istanbul-turkey'

// };
// document.getElementById("demo").innerHTML = person.name  +  person.lastName + " is " + person.age + " years old. " + 'lives in ' + person.home ;
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
// for(let i=0; i<=40; i+=2){
//     console.log(i);
// }

// for(let i=0; i<=100; i+=10){
//     console.log(i);
// }

// for (let i=100; i>=0; i-=10){
//     console.log(i)
// }

// let secretNum= 123;
// let q = prompt('what is the secret number');
// while (q != secretNum){
//     q=prompt('wrooooong what is the secret number');
// }
// if(q == secretNum){
//     alert('you got it');
// }

// let as =['wolf','hayena','dear','bear','snaik','crocadail','cheta','elefent','lion','tiger']
// for(let a of as){
//     console.log(a)
// }

//  for(let per in  person){
//      console.log(`${per}:${person[per]}`);
//  }

//  function ahmet(){
//      console.log('my name is ahmet');
//      console.log('i am in turkey');
//      console.log('i am 13 years old')
//  }
//  ahmet();
//  function ahh(){
//      console.log('jygrsxkmy rsxkmyj');
//  }
//  ahh()
//  ahh()
//  ahh()
//  ahh()
//  ahh()
//  ahh()
// function alk(ahmad){
//     console.log(`Hey there boss AHMAD ${ahmad}`);
// }
// alk('yaser')
function name(firstName,LastName){
    console.log(`hey there MR. ${firstName} ${LastName} you are the boss`);
}
name('AHMAD','ALKHOOLY')
function reapeat(str,num){
    let result = '';
    for(let i=0; i < num; i++){
        result += str;
    }
    console.log(result);
}
reapeat('hi',23);
let animal = "wolf";
function animales(){
    let animal = "tiger";
    console.log(animal);
}
animales();
console.log(animal);
for(let i = 0; i <= 10; i++){
    var age = 12;
}
console.log(age);
function help(){
    let heroes =['colt','batman','spiderman'];
    function helpMe(){
       for(let hero of heroes) {
           console.log(`you are stuped ${hero}`);
       }
    }
    helpMe();
}
help();
const add = function (h){
    let b ='lj,hv';
    for(let i=0; i < b.length; i++){
        console.log(b[i]);
    }
}
add();
function mhg(func){
    func();
}
function math(random){
    let roll = Math.floor(Math.random()*50)+1;
    console.log(roll);
}
mhg(math);
function f (kh){
    kh();
    kh();  
}
function g(r){
    console.log('haaaaahaaaahaaaahaaaa');
}
f(g);
function hn(min,max){
    return function(num){
        return num >= min && num <= max;
    }
}
let total = hn(50,100);
