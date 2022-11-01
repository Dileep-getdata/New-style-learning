const text='Develop success from failures. Discouragement and failure are two of the surest stepping stones to SUCCESS.'
let index=0;
function writeText(){
    document.body.innerHTML=text.slice(0,index);
    index++;
    if(index>text.length-1){
        setTimeout(()=>{index=0},1000);
        
    }
}
setInterval(writeText,80);