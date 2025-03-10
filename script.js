function appendChar(character) {
    let display = document.getElementById("display");
    display.value += character;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function delLastChar(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); 
}

function calculateResult() {
    let display = document.getElementById("display");
    let expression = display.value;

    try {
        if(expression.includes("+")){
            let nums = expression.split("+").map(Number);
            display.value = nums.reduce((a,b) => a + b, 0);
        }else if(expression.includes("-")){
            let nums= expression.split("-").map(Number);
            display.value = nums.reduce((a, b) => a - b);
        }else if(expression.includes("*")) {
            let nums = expression.split("*").map(Number);
            display.value = nums.reduce((a, b) => a * b);
        }else if(expression.includes("/")){
            let nums = expression.split("/").map(Number);
            if(nums.includes(0)) {
                display.value = "Error";
            }else {
                display.value = nums.reduce((a,b) => a/b);
            }
        } else if(expression.includes("%")) {
            let nums = expression.split("%").map(Number);
            display.value = nums.reduce((a, b) => a % b);
        }else{
            display.value = eval(expression);
        }
    }catch {
        display.value = "Error";
    }
}