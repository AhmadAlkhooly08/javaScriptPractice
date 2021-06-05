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
const mathe ={
    pI : 4.4023444,
    Square : function (num){
        return num * num;
    },  
    cube : function(num){
         return num ** 3;
     }  
};
const mathh ={
    add (x,num){
        return x + num;
    },  
    mutiplay (x,num){
         return x * num;
     }  
};

let aboutMe  ={
    namee:'AHMAD ALKHOOLY',
    age:13,
    home:'in turkey',
    ed(){
        console.log(`my name is ${this.namee} i am ${this.age} years old I live ${this.home}`)
    }
}

try{
    he.toUperca  
}
catch{
    console.log("helloooo you are stupid");
}

let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,];
function print(item){
    console.log(item)
}
num.forEach(print)
num.forEach(
    function (print){
        console.log(print);
    }
    
)

let text=['red','wolf','cat','blue','sad','yellow'];
let texts= text.map(
    function (t){
        return t.toUpperCase();
    }
)
let numm=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let mume= numm.map(
    function (nume){
        if (nume % 2 == 1){
          return 0;  
        }
        else{
            return nume;
        }
    }
)

let bla = (x,y) =>{
    return x * y;
};

let blaa = (x,y) =>(
    x * y
)
let b = (t) => t ** 3;
const marke=[
    {
        name:'Ahmad',
        score:100
    },
    {
        name:'colt',
        score:1
    },
    {
        name:'omar',
        score:90
    }
];

let m = marke.map(
    f =>{
        return `${f.name} - ${f.score}/100`;
    }
)
console.log('Hey there hoo are you') 

setTimeout(
    () =>{
        console.log('ok!!! Hey there AHMAD ALKHOOLY how are you');
    },
3000)

// setInterval(   
//     () =>{
//         console.log(Math.floor(Math.random() *6));
//     },2000)

let number =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,];

let nume = number.filter(n =>{
    return n %2===1;
})

let numbr = num.filter(n =>{
    return n %2===0;
})

const markee=[
    {
        name:'Ahmad',
        score:100
    },
    {
        name:'colt',
        score:70
    },
    {
        name:'omar',
        score:95
    },
    {
        name:'adam',
        score:80
    },
    {
        name:'Ahmad',
        score:100
    },
    {
        name:'ibrahim',
        score:60
    },
    {
        name:'gef',
        score:20
    },

];

let mark = markee.filter(n =>{
    return n.score >= 75;
})
let badMark = markee.filter(
    n =>(
        n.score < 75
))

let exzam = [100,79,89,99,98,96,97];
let pass = exzam.every(some => some >=  78)
const mar=[
    {
        name:'Ahmad',
        score:100
    },
    {
        name:'colt',
        score:70
    },
    {
        name:'omar',
        score:95
    },
    {
        name:'adam',
        score:80
    },
    {
        name:'Ahmad',
        score:100
    },
    {
        name:'ibrahim',
        score:60
    },
    {
        name:'gef',
        score:20
    },

];
let w = mar.some(g => g.score = 20)

let totall = [1,3,9,11,22,5,8,10];
 totall.reduce((e,r) =>{
        return e + r;
});
totall.reduce((min,price) =>{
       if(price < min){
            return price;
       }
       return min;
   } 
)

let k ={
    firstName:'Ahmad',    
    lastName:"alkhooly",
    m:() =>{
        return `${this.firstName} ${this.lastName}`;
    }
}
let a ={
    firstName:'Ahmad',    
    lastName:"alkhooly",
    h: function (){
        return `${this.firstName} ${this.lastName}`;
    }
}

function hgh(num =15){
    return Math.floor(Math.random() * num) +1;
}

function name(l,f ='hey there'){
    return `${f} ${l}`; 
 }
 name('ahmad')
 Math.max(1,4,100,60,700);
 Math.min(1,4,100,60,700);
Math.max(...exzam)
console.log(exzam);
console.log(...exzam);

let dogs=['petbul','huskey','jerman cheperd'];
let perets=['sanigal','african grey'];
let all =[...dogs,...perets]

let animals ={
     one:{
        number:1, 
        name:'Nile Crocodile',
        bite:5000
    },  
    tow:{
        number:2, 
        name:'Saltwater Crocodile',
        bite:3690
    },    
    three:{
        number:3, 
        name:'American Alligator',
        bite:2125
    },    
    foor:{
        number:4, 
        name:' Hippopotamus',
        bite:1825
    },    

}
let al={...animals,...markee};
console.log({...[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]})

function r(...num){
    return num;
}
function sum(...num){
    for(let n of num){
        console.log(n += num);
    } 
}

let winners=['AHMAD','OMER','ALI','jj','h','k','f'];
const [ps5,DJI,bike,...every] = winners;

let winnerss=['AHMAD','OMER','ALI',['jj','h','k','f']];
const [car,dog,cat,...evry] = winnerss;

let winner=['AHMAD','OMER'];
const [wolf,perret,bik] = winner;

let user ={
    namee:'Ahmad',
    lastName:'alkhooly',
    agee:13,
    country:'eygept',
    home:'turkey'
}
const {namee,lastName,agee,home}=user;

let person ={
    important:{
        nam:'Ahmad',
        lastname:'alkhooly',
        ag:13,
        hme:'turkey',
    },    
    country:'eygept'
}
const {important,email='ahmadalkhooly8@gmail.com'}=person;
const {ag:ageee}=person;
console.log(important)
console.log(person)

function i(person){
    console.log(`${person.important} `)
}

const ma=[
    {
        name:'Ahmad',
        na:'math',
        score:100
    },
    {
        name:'colt',
        na:'science',
        score:70
    },
    {
        name:'omar',
        na:'ingilish',
        score:95
    },
    {
        name:'adam',
        na:'arabic',
        score:80
    },
    {
        name:'Ahmad',
        na:'math',
        score:100
    },
    {
        name:'ibrahim',
        na:'math',
        score:60
    },
    {
        name:'gef',
        na:'math',
        score:20
    },

];
let d = ma.map(({name,na,score})=>{
    console.log(`${name}'s mark in the ${na} is ${score}`)
})

let v = Math.floor(Math.random()* 6)  
if(v===5 || v===6){
    console.log('bravooooooooo');

}
if(v % 2 !==0){
    console.log('ood number')
}
else if(v === 4 && v === 3){
    console.log('you are smart'); 
}
else{
    console.log('you are stupid');
}
let day = Math.floor(Math.random() * 8);
switch(day){
    case 1:
        console.log('MONDAY')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('wednesday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
    
    default:
        console.log('there is no more days')
}
let promp = Math.floor(Math.random() * 8);
switch(promp){
    case 1:
        prompt('how much countries are in the world');
        break;
    case 2:
        prompt('how old are you');
        break;
    case 3:
        prompt('where do you live');
        break;
    case 4:
        prompt('how much people live in your country');
    default:
        alert('there is no more questions')

}

let array = ['ghf','AHMAD','AMMAR','IBRAHIM'];
console.log(array.length)
console.log(array.push('mohammad','basel','colt'))
console.log(array.pop())
console.log(array.shift())
console.log(array.unshift('colt'))
let a1 =['wolf','line','dog','tiger'] 
let a2 = ['cat','rabbet','bird']
let concat = a1.concat(a2);
console.log(concat.includes('sheep'))
console.log(concat.includes('tiger'))
console.log(concat.indexOf('tiger'))
console.log(concat.reverse())
for(let i=0; i<=concat.length; i++){
    console.log(i,concat[i]);
}
for(let i=0; i<=10; i++){
    console.log(i);
}
for(let i=0; i<=0; i++){
    // console.log(i);
}
