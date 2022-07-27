const game=document.querySelector('#game');
const minnum=document.querySelector('#min');
const maxnum=document.querySelector('#max');
const input=document.querySelector('#game-input');
const btn=document.querySelector('#game-btn');
const msg=document.querySelector('#msg');


let min=1,max=10,totalgusse=3;
let winningnum=Math.floor(Math.random()*(max-min+1)+min);
console.log(winningnum);
// console.log(msg);
minnum.textContent=min;
maxnum.textContent=max;
btn.addEventListener('click',function(e){
    parseInt(input.value);
    if(isNaN(input.value) || input.value < min || input.value > max){
        setMessage(`Plese enter number between ${min} and ${max}`,'red');
    }
    else{
    if(input.value==winningnum){
        gameover(true,`Hurry Your guess is conrrect! ${winningnum}`);
        
      
    }
    else{
    totalgusse-=1;
    if(totalgusse===0){
        gameover(false,`Opps you lost ${winningnum} is corect answer`)
     
    }
    else{
        setMessage(`${input.value} is incorrect answer ${totalgusse} guess is left`,'red');
        input.value='';

    }
}}
    e.preventDefault();
})
function setMessage(message,color)
{
    msg.textContent=message;
    msg.style.color=color;
    input.style.borderColor=color;
}
function gameover(won,msg1){
    let color;
    won === true ? color='green':color='red';
    input.disabled=true;
    msg.textContent=msg1;
    msg.style.color=color;
    input.style.borderColor=color;
    btn.value='Play-again';
    btn.className +='play-again';
}
game.addEventListener('mousedown',function(e){
    if(e.target.classList.contains('play-again')){
        window.location.reload();
    }
})
