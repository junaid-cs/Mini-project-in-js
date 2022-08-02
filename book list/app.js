class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
class UI{
    addboook(book){
        const tbody=document.querySelector('tbody');
        const tr=document.createElement('tr');
        tr.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        tbody.appendChild(tr);

    }
    deletebook(target){
        if(target.className==='delete'){
          
            target.parentElement.parentElement.remove();
            console.log( target.parentElement.parentElement);
        }

    }
    clearinputs(){
        const title=document.querySelector('.title').value='';
    const author=document.querySelector('.author').value='';
    const isbn=document.querySelector('.isbn').value='';

    }
    showalert(message,Class){
        const div=document.createElement('div');
        div.className=`alert ${Class}`;
        div.appendChild(document.createTextNode(`${message}`));
        const parent=document.querySelector('.col-8');
        const form=document.querySelector('form');
        parent.insertBefore(div,form);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000);
        // console.log(div);
    }
}
class Store{
 static  getitems(){
        let books;
        if(localStorage.getItem('books') === null){
            books=[];
        }
        else{
        books= JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
  static  displayitems(){
        let books= Store.getitems();
        books.forEach(book => {
            const ui =new UI;
            ui.addboook(book);
        });

    }
   static setitems(book){
      const books= Store.getitems();
        books.push(book);
        console.log(books);
        localStorage.setItem('books',JSON.stringify(books));
        
        
    }
    static deleteitems(isbn){
    const books=Store.getitems();
    console.log(isbn);
   books.forEach(function(book,index){
    if(book.isbn===isbn){
        console.log('deleted');
        books.splice(index,1);
    }
});
localStorage.setItem('books',JSON.stringify(books));
    // }
    // books.forEach((book)=>{

    //     if(book.className ==='delete'){
              
    //         book.parentElement.parentElement.remove();
    //         console.log( book.parentElement.parentElement);
           
    //     }
   
    //     // if (book.className==='delete'){
    //     //      console.log(234);
    //     //     }
    // });

    }

}
document.addEventListener('DOMContentLoaded',Store.displayitems);
const ui=new UI();
// console.log(ui.addboook(book));

document.querySelector('form').addEventListener('submit',(e)=>{
    const title=document.querySelector('.title').value;
    const author=document.querySelector('.author').value;
    const isbn=document.querySelector('.isbn').value;
    const book=new Book(title,author,isbn);
    const ui=new UI();
    if(title=='' && author==''&& isbn==''){
       ui.showalert('Please enter values','error');
    }
    else{
        ui.showalert('Your Book is Inserted','success');
    ui.addboook(book);
    Store.setitems(book);
    }
    
    ui.clearinputs();
    console.log(book);
    // Store.getitems();
    e.preventDefault();
})

document.querySelector('tbody').addEventListener('click',(e)=>{
 
    const ui=new UI();
    ui.deletebook(e.target);
    Store.deleteitems(e.target.parentElement.previousElementSibling.textContent);
    ui.showalert('Book is Deleted','error');
  
    e.preventDefault();
})
