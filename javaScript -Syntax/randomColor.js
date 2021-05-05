let h1 = document.querySelector('h1');
h1.style.textAlign='center';
let btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    let r =Math.floor(Math.random() * 256);
    let g =Math.floor(Math.random() * 256);
    let b =Math.floor(Math.random() * 256);
    var rgb =`rgb(${r},${g},${b})`;
    document.body.style.backgroundColor= rgb;
    h1.innerText= rgb;
})
let bt = document.querySelectorAll('.button');
for(let btn of bt){
        btn.addEventListener('click', function (){
            // console.log('hgc')
            let r =Math.floor(Math.random() * 255);
            let g =Math.floor(Math.random() * 255);
            let b =Math.floor(Math.random() * 255);
            let rgh =`rgb(${r},${g},${b})`;        
            btn.style.backgroundColor= rgh;
        }) 
}
