function append(value){
    display.value += value
}
function calculate(){
    display.value = eval(display.value)
    
}

function all_clear() {
    display.value = ""
}

function del() {
    display.value = display.value.slice(0, -1)
}

function calculatePercentage() 
{ display.value = eval(display.value) / 100;
}
