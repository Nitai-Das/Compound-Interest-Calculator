const btn = document.getElementById('btn');
const result = document.getElementById('result');
const clear = document.getElementById('clear');

 btn.addEventListener('click',function(event){
    event.preventDefault();

    const principle = document.getElementById('principle').value;
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;

    if(principle == "" || rate == "" || years == ""){
        
        result.innerText = "Fill up all the fields!"
        return;
    }else{
      const compint = (principle * (1 + (rate/100))**years);
      
      result.innerText = `Total amount is $${compint.toFixed(2)}`;
    }
 
 });

 clear.addEventListener('click', function(){
    result.innerText = "";
 });