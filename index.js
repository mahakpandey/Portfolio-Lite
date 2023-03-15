let clicked=0;
const handleClick=()=>{ 
    clicked+=1;  
    (clicked%2===0)?document.querySelector("body").style.backgroundColor="#F0E3CA":document.querySelector("body").style.backgroundColor="#1B1A17";
    (clicked%2===0)?document.querySelector("h3").style.color="#1B1A17":document.querySelector("h3").style.color="#F0E3CA";
    (clicked%2===0)?document.querySelector("p").style.color="#1B1A17":document.querySelector("p").style.color="#F0E3CA";
 }