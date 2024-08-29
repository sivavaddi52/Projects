let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let input = "";//Store the current input
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const value = button.textContent;
        if(value==='AC'){
            input = ''; //clear input
            inputBox.value =0;
        }
        else if(value === 'DEL'){
            input=input.slice(0,-1);//remove the last character
            inputBox.value = input || "0";
        }
        else if(value === '='){
            try{
                input=eval(input).toString();//evaluate expression
                inputBox.value = input;
            }
            catch{
                inputBox.value = 'Error';
            
            }
        
        }
        else{
            if(inputBox.value === '0'&& ! isNaN(value)){
                input=value;//Replace 0 with 1st digit
            }
            else{
                input+=value;//Apend input value
            }
            inputBox.value=input;
        }
    })
})