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
let text = document.querySelector('#paragraph h3').innerText='about this website'
console.log(document.querySelector('#paragraph p').textContent)
console.log(document.querySelector('#paragraph p').innerHTML)
console.log(document.querySelector('#paragraph h3').innerHTML='<h4>about this website</h4>')
// console.log(document.querySelector('h1').innerHTML+='<h4>about this website</h4>')
console.log(document.querySelector('#paragraph').id='#paragraph')
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
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let a = document.querySelectorAll('span');
a.forEach((spa, h) => {
    spa.style.color = colors[h];
 });

 let b = document.querySelector('h1');
 b.classList.add('rainbow')
 b.classList.add('rain')
 b.classList.remove('rain')
 console.log(b.classList.contains('rainbow'))
 console.log(b.classList.contains('rain'))
//  b.classList.toggle('rainbo')
let m = document.querySelector('table');
console.log(m.parentElement)
console.log(m.parentElement.parentElement)
console.log(m.parentElement.parentElement.parentElement)
console.log(m.children[0])
console.log(m.nextElementSibling)
console.log(m.previousElementSibling)

let add = document.createElement('img')
console.log(add.src="https://www.w3schools.com/images/w3lynx_200.png");
console.log(document.querySelector('.container').appendChild(add))
console.log(add.classList.add('img'))
let h2 = document.createElement('h2')
console.log(h2.innerText='I am a game');
console.log(document.querySelector('.container').appendChild(h2))
h2.style.color='black'
let p=document.querySelector('p');
p.append('I love dogs')
p.prepend('The German Shepherd Dog')
let new2 = document.createElement('h2');
new2.innerText='klike mi to play'
console.log(h2.insertAdjacentElement('afterend',new2))
new2.style.color='black'
let another = document.createElement('h2');
another.innerText='i am sow good'
console.log(new2.after(another))
another.style.color='black'

let createButton = () => {
    for(let i = 0; i < 100; i++){
        var btn = document.createElement("BUTTON") ;
        btn.innerText="stupid!";
        var element = document.querySelector(".container"); 
        element.appendChild(btn);
    }
}

createButton();
let firstBtn=document.querySelector('button')
console.log(firstBtn)
let parent = firstBtn.parentElement;
parent.removeChild(firstBtn)
let j = document.querySelector('input');
console.log(j)
j.remove()
for(let i=1; i<=70; i++){
    let newImg = document.createElement('img');
    let url='https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/'
    newImg.src=`${url}${i}.png`
    document.querySelector('.container').appendChild(newImg)
    let pokemon = document.createElement('div');
    let span = document.createElement('span');
    span.innerText=`${i}`
    pokemon.appendChild(newImg)
    pokemon.appendChild(span)
    document.querySelector('.container').appendChild(pokemon)
    pokemon.style.display='inline-block';
    newImg.style.display='block';
    pokemon.style.textAlign='center';
}

let click = document.querySelector('#btn');
click.onclick = function(){
    alert('do not click me again you are stupid now give me 100 dolores');
}
click.onclick = function(){
    alert('you clicked me you wend 100 dolores');
}
let bt2 = document.querySelector('#btn2');
bt2.onmouseenter = function(){
    console.log('hgjk')
}
let bt3 = document.querySelector('#btn3');
bt3.addEventListener('dblclick',() => {
    alert('😀😃😄😁🤣😂😅😎😡😨😱👊');
})
bt3.addEventListener('mouseup',() => {
    alert('😀😃😄😁🤣😂😅😎😡😨😱👊');
},{once:true})