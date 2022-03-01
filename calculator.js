/*let caculate={
    a:0,b:0,operation:function(operator){
        if(operator=='+'){
            return this.a+this.b;
        }
        else if(operator=='-'){
            return this.a-this.b;
        }
        else if(operator=='*'){
            return this.a*this.b;
        }
        else if(operator=='/'){
            return this.a/this.b;
        }
        else {
            return this.a%this.b;
        }
    }
}
function setDetails(operator){
    maths.a=number(document.getElementById("a").value);
    maths.b=number(document.getElementById("b").value);
    let result=document.getElementById("result");
    result.innerHTML=maths.operation(operator);
}*/
const displayEl=document.querySelector('.display');

const acEl=document.querySelector('.ac');
const pmEl=document.querySelector('.pm');
const percentEl=document.querySelector('.percent');

const additionEl=document.querySelector('.addition');
const subtractionEl=document.querySelector('.subtraction');
const multiplicationEl=document.querySelector('.multiplication');
const divisionEl=document.querySelector('.division');
const equalEl=document.querySelector('.equal');

const decimalEl=document.querySelector('.decimal');
const number0El=document.querySelector('.number-0');
const number1El=document.querySelector('.number-1');
const number2El=document.querySelector('.number-2');
const number3El=document.querySelector('.number-3');
const number4El=document.querySelector('.number-4');
const number5El=document.querySelector('.number-5');
const number6El=document.querySelector('.number-6');
const number7El=document.querySelector('.number-7');
const number8El=document.querySelector('.number-8');
const number9El=document.querySelector('.number-9');
const numberElArray=[
    number0E1,number1El,number2El,number3El,number4El,
    number5El,number6El,number7El,number8El,number9El
];

const handleNumberClick = (numStr) => {
    const currentDisplayStr = displayEl.textContent;
    displayEl.textContent = currentDisplayStr+numStr;
}


for(let i=0;i<numberElArray.length;i++){
    const numberEl=numberElArray[i];
    number1El.addEventListener
}