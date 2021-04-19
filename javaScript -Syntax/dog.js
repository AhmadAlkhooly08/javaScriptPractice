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
let text = document.querySelector('#p h3').innerText='about this website'
console.log(document.querySelector('#p p').textContent)
console.log(document.querySelector('#p p').innerHTML)
console.log(document.querySelector('#p h3').innerHTML='<h4>about this website</h4>')