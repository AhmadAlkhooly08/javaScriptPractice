let h1 = document.querySelector('h1');
h1.style.textAlign='center';

let btn = document.querySelector('#btn');
btn.style.display='inlineBlock';
// btn.style.alignContent='center';
btn.addEventListener('click',()=>{
    let r =Math.floor(Math.random() * 256);
    let g =Math.floor(Math.random() * 256);
    let b =Math.floor(Math.random() * 256);
    let rgb =`rgb(${r},${g},${b})`;
    document.body.style.backgroundColor= rgb;
    h1.innerText= rgb;
    if(rgb = `rgb(${28},${3},${56})`){
        rgb.style.color='white'
    }
})