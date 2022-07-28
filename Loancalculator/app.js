const payment=document.querySelector('#payment');
const interste=document.querySelector('#interste');
const year=document.querySelector('#Year');
const output_payment=document.querySelector('#output_payment');
const output_interste=document.querySelector('#output_interste');
const output_year=document.querySelector('#output_Year');
const form=document.querySelector('form').addEventListener('submit',function(e){
//    hide result
document.getElementById('output_form').style.display='none';
    // show loader
    document.getElementById('loader').style.display='block';
    setTimeout(load,1000);
    
    e.preventDefault();
});
function load(){
    const principel=parseInt(payment.value);
    const interste_percent=parseInt(interste.value)/100/12;
    const totle_year=parseInt(year.value)*12;
    // console.log(totle_year);

    // console.log(interste_percent);
    const x=Math.pow(1+interste_percent,totle_year);
    const monthly_payment=(principel*x*interste_percent)/(x-1);
    // alert(monthly_payment.toFixed(2));
    if(isFinite(monthly_payment)){
        // hide loader
        document.getElementById('loader').style.display='none';
        // show result
        document.getElementById('output_form').style.display='block';
        output_payment.value=monthly_payment.toFixed(2);
        output_year.value=(monthly_payment*totle_year).toFixed(2);
        output_interste.value=((monthly_payment*totle_year)-principel).toFixed(2);

    }
    else{
        document.getElementById('loader').style.display='none';
        // document.getElementById('output_form').style.display='block';
        // document.getElementById('output_form').innerHTML='<p class="alert alert-danger"> Please enter values</p>';
       showerror("Please enter values");
    }
    //  output_payment.value=parseFloat(payment.value)+2;
    function showerror(error){
       const card= document.querySelector('.card');
        const heading=document.querySelector('h1');
        const div=document.createElement('div');
        div.className='alert alert-danger';
        div.append(document.createTextNode(error));
        console.log(div);
        card.insertBefore(div,heading);
        setTimeout(clearerror,2000);
    // document.querySelector('.alert').style.display='block';
    }
    function clearerror(){
        document.querySelector('.alert').remove();
        // document.querySelector('.alert').style.display='none';
    }

   
}