let count=document.querySelector('.count'),
plus=document.getElementById('plus'),
minus=document.getElementById('minus'),
reset=document.getElementById('reset');

reset.addEventListener('click',()=>{
   count.innerText=0;
   colorchange();
});

plus.addEventListener('click',()=>{
count.innerHTML++;
colorchange();
});

minus.addEventListener('click',()=>{
count.innerHTML--;
colorchange();
});

function colorchange(){
    if(count.innerHTML<0){
        count.style.color="crimson";
    }
else if(count.innerHTML>0){
    count.style.color="green";
}
else{
count.style.color="black";
}

}



