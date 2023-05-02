const btn=document.getElementById('btn');

btn.addEventListener("click",(e)=>{
 e.preventDefault();
 const randomNumber=Math.floor(Math.random()*16777215),
       HexCode="#"+randomNumber.toString(16),
       body=document.querySelector('body'),
       heading=document.getElementById("color-code");

       body.style.background=HexCode;
       heading.innerText=HexCode;
});