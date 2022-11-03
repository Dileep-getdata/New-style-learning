const btn=document.getElementById('btn');
const activate=document.querySelector('.activate');
console.log(activate)
const nav=document.getElementById('nav');
btn.addEventListener('click',()=>{
    nav.classList.toggle('activate');
    btn.classList.toggle('activate');
    

    
})

const text=document.getElementById('text');
const line="Click on more option '☰' to find more intresting features."
let idx=0;
function autoText(){
    idx++;
    text.innerText=line.slice(0,idx);
    if(idx>line.length-1){
        setTimeout(()=>{idx=0;},1000)
        
    }
}
setInterval(autoText,80);