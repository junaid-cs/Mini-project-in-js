// const form=document.querySelector('#task-form');
const form=document.querySelector('form');
const tasklist=document.querySelector('#taskinput');
const additems=document.querySelector('input');
const list=document.querySelector('ul');
const listitems=document.querySelector('li');

load();
function load()
{
    document.addEventListener('DOMContentLoaded', gettask);
    form.addEventListener('submit',additem);
    list.addEventListener('click',removeelement);



}
function additem(e){
    if(tasklist.value === '')
    {
        alert('please enter value');

    }
    else{
        const li=document.createElement('li');
        li.className='flex-between';
        li.appendChild(document.createTextNode(tasklist.value));
        const a=document.createElement('a');
        a.className='delete-items';
        a.setAttribute('href','#');
        a.innerHTML='<i class="fas fa-close" ></i>';
        li.appendChild(a);
        document.querySelector('ul').appendChild(li);
        // alert(`Hi  i  am  ${tasklist.value}`);
        taskstorge(tasklist.value);
        tasklist.value='';
    }
    e.preventDefault();
}
function taskstorge(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}
function gettask(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
   tasks.forEach(function(task) {
    const li=document.createElement('li');
    li.className='flex-between';
    li.appendChild(document.createTextNode(task));
    const a=document.createElement('a');
    a.className='delete-items';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-close" ></i>';
    li.appendChild(a);
    document.querySelector('ul').appendChild(li);
   });
}

function removeelement(e){
    if(e.target.parentElement.classList.contains('delete-items')){
            if(confirm('Are you sure to delete item')){
            e.target.parentElement.parentElement.remove();
            removetaskfromlocalstorage( e.target.parentElement.parentElement);
        }}
}
function removetaskfromlocalstorage(listitems){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
      
        // console.log(listitems.textContent);
        if(listitems.textContent === task){
            tasks.splice(index,1);
            
        }

    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}


