const btn=document.getElementById('btn');
const container=document.getElementById('container')
let no=0;
btn.addEventListener('click',()=>{

    const notify=document.createElement('div');
    notify.classList.add('toast');
    no++;
    notify.innerHTML=` Toast Nofication ${no}`;
    container.appendChild(notify);
    setTimeout(()=>{notify.remove()},3000)
});
