const val1=document.getElementById('val');
const btn=document.querySelectorAll('button');
const result=document.getElementById('result');
for (item of btn){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.textContent;
        if(buttontext == '='){
            
            val1.value=eval(val1.value);
        }
        else if(buttontext == 'C'){
            val1.value="";
        }
        else if(buttontext== '%'){
            buttontext= '/';
            val1.value+=buttontext;
        }
        else{
            val1.value+=buttontext;
        }
    })
}
console.log()
