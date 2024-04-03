function display(num) {
    root.value+=num ;
}


function clearscreen() {
    
    root.value="";
}



function evaluateNums() {
    let current=root.value;
    result=eval(current);
    root.value=result;
}

function backspace() {
let result=root.value.slice(0,-1)
    root.value=result 
}
