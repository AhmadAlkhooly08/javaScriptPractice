// document.all[79].innerText='about this website'
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
let className = document.getElementsByClassName('container2');
console.log(className);
console.log(document.querySelector('p'));
console.log(document.querySelector('#p'));
console.log(document.querySelector('.card'));
console.log(document.querySelector('p:nth-of-type(2)'));