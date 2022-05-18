const btnOne = document.querySelector('.one');
const btntwo = document.querySelector('.two');
const btnthree = document.querySelector('.three');
const btnfour = document.querySelector('.four');
const btnfive = document.querySelector('.five');
const inputSix = document.querySelector('.six')
const btnArray = [btnOne, btntwo, btnthree, btnfour, btnfive];

const billInput = document.querySelector('.bill-input');
const peopleInput = document.querySelector('.people-input');
const tipSpan =document.querySelector('.tip-amount');
const totalSpan =document.querySelector('.total');
const resetBtn = document.querySelector('.reset');

billInput.value = '0.0';
peopleInput.value = '1';
tipSpan.textContent = "$" + (0.0).toFixed(2);
totalSpan.textContent = "$" + (0.0).toFixed(2);




let billValue = 0.0;
let peopleValue = 1;
let activeBtn = 0


//clean the buttons from special class
const resetActive = () =>{
    btnArray.forEach(element =>{
        element.classList.remove('tip-active');
    })
}


//looking for a click on the buttons and adding special class
btnArray.forEach(element =>{
    element.addEventListener('click', ()=>{
        resetActive()
        element.classList.add('tip-active');
        activeBtn = parseFloat(element.value);
        
        calculate()
    })
})




//function calulate all
const calculate = () =>{
    if(peopleValue >= 1){
        let tipAmount = (billValue * activeBtn) / peopleValue;
        let total = (billValue +(billValue * activeBtn)) / peopleValue;
        tipSpan.textContent = "$" + tipAmount.toFixed(2);
        totalSpan.textContent = "$" + total.toFixed(2);
    }
}
//inputs liesteners
billInput.addEventListener('input',() =>{
    billValue = parseFloat(billInput.value);
    calculate()
    });
peopleInput.addEventListener('input', () =>{
    peopleValue = parseFloat(peopleInput.value)
    calculate();
})
inputSix.addEventListener('input', ()=>{
    tippValue = parseFloat(inputSix.value / 100);
    resetActive();

   if(peopleValue >= 1){
       let inputPercent = inputSix.value/100
        let tipAmount = (billValue * inputPercent) / peopleValue;
        let total = (billValue +(billValue * inputPercent)) / peopleValue;
        tipSpan.textContent = "$" + tipAmount.toFixed(2);
        totalSpan.textContent = "$" + total.toFixed(2);
    }
    
})
//function reset all
resetBtn.addEventListener('click', () =>{
    billInput.value =  '0.0';
    peopleInput.value = '1';
    totalSpan.textContent  = "$" + (0.0).toFixed(2);
    tipSpan.textContent = "$" + (0.0).toFixed(2);
    inputSix.value = '';
    resetActive();
})



