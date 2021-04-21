document.getElementById('lh')
document.getElementById('p')
let all= document.getElementsByTagName('p');
console.log(all, "hjgiuyficbij;")
for(let peragraph of all){
    console.log(all)
    console.log(peragraph.innerText);
}
const elements = document.getElementsByTagName('p','img','a');
console.log(elements)
console.log( all[0])
console.log(document.getElementsByTagName('div'))
let className = document.getElementsByClassName('card');
console.log(className);
console.log(document.querySelector('p'));
console.log(document.querySelector('#p'));
console.log(document.querySelector('.card'));
console.log(document.querySelector('p:nth-of-type(2)'));
let query = document.querySelectorAll('img');
for(let select of query){
    // console.log(select.src='https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg')
}
console.log(document.querySelectorAll('div a'))
console.log(document.querySelectorAll('p i'))
for(let all of query){
    console.log(query,'kug')
    console.log(all.href)
    console.log(all)
}
let text = document.querySelector('#peragraph h3').innerText='about this website'
console.log(document.querySelector('#peragraph p').textContent)
console.log(document.querySelector('#peragraph p').innerHTML)
console.log(document.querySelector('#peragraph h3').innerHTML='<h4>about this website</h4>')
// console.log(document.querySelector('h1').innerHTML+='<h4>about this website</h4>')
console.log(document.querySelector('#peragraph').id='#peragraph')
console.log(document.querySelector('a').href)
console.log(document.querySelector('img').src)
let attrebute=document.querySelector('img');
console.log(attrebute.getAttribute('src'))
// console.log(attrebute.setAttribute('src','https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg'))
let inputt = document.querySelector('input');
inputt.type='password'
inputt.type='color'
let h1= document.querySelector('h1');
h1.style
console.log(h1.style.color)
// h1.style.fontSize = '20px'
// h1.style.border = '2px solid red'
console.log(window.getComputedStyle(h1).color)
console.log(window.getComputedStyle(h1).padding)
console.log(window.getComputedStyle(h1).fontFamily)
console.log(window.getComputedStyle(h1).fontSize)