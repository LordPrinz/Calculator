import initializeButtons from "./init/initializeButtons.js";
import transformData from "./processing/transformData.js";
import { addNumbersHandler } from "./calc/calculator-functions.js";
import { isNumber } from "./util/validation-bundle.js";
console.log(addNumbersHandler(2, 2));
let mainOutput = document.querySelector(".output__main");
let subOutput = document.querySelector(".output__sub");
let currentState = mainOutput.textContent;
let prevState = subOutput.textContent;
const buttons = initializeButtons();
buttons.map((element) => {
    element.addEventListener("click", () => {
        const transformedData = transformData(element);
        processAction(transformedData);
    });
});
function clear() {
    currentState = "";
    prevState = " ";
    subOutput.textContent = "";
}
function deleteNumber() {
    currentState = currentState.toString().slice(0, -1);
}
function appendNumber(number) {
    currentState += number;
}
function updateDisplay(operation = null) {
    mainOutput.textContent = currentState;
    if (operation !== null) {
        prevState = currentState;
        subOutput.textContent = `${prevState} ${operation}`;
    }
    else {
        prevState = "";
    }
}
function numberOperationHandler(number) {
    if (!isNumber(number)) {
        return;
    }
    appendNumber(number);
}
function processAction(action) {
    let operation;
    switch (action) {
        case "procent":
            console.log("Process %");
            break;
        case "ce":
            console.log("Process CE");
            break;
        case "c":
            clear();
            break;
        case "del":
            deleteNumber();
            break;
        case "reverse":
            console.log("Process 1/X");
            break;
        case "power":
            console.log("Process Power");
            break;
        case "sqrt":
            console.log("Process sqrt");
            break;
        case "divide":
            console.log("Process divide");
            break;
        case "times":
            console.log("Process times");
            break;
        case "minus":
            console.log("Process Minus");
            break;
        case "plus":
            console.log("Process Plus");
            operation = "plus";
            break;
        case "sub":
            console.log("Process Sub");
            break;
        case "dot":
            console.log("Process dot");
            break;
        case "equals":
            console.log("Process equals");
            break;
        default:
            numberOperationHandler(action);
    }
    updateDisplay(operation);
}
setInterval(() => {
    console.log(`STATE: 
		prevState: ${prevState}
		currentState ${currentState}
	`);
}, 3000);
