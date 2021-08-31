import initializeButtons from "./init/initializeButtons.js";
import transformData from "./processing/transformData.js";
import { isNumber } from "./util/validation-bundle.js";
import { addNumbersHandler, divideNumbersHandler, multiplyNumbersHandler, subtractNumbersHandler, } from "./calc/calculator-functions.js";
let mainOutput = document.querySelector(".output__main");
let subOutput = document.querySelector(".output__sub");
let currentState = mainOutput === null || mainOutput === void 0 ? void 0 : mainOutput.textContent;
let prevState = subOutput === null || subOutput === void 0 ? void 0 : subOutput.textContent;
let currentOperation = "";
function clear() {
    currentState = "";
    prevState = "";
    currentOperation = null;
}
function deleteNumber() {
    currentState = currentState.toString().slice(0, -1);
}
function appendNumber(number) {
    if (number === "." && currentState.includes(".")) {
        return;
    }
    currentState += number;
}
function chooseOperation(operation) {
    if (currentState === "") {
        return;
    }
    if (prevState !== "") {
        calculate();
        clearAfterCalculationHandler();
        updateDisplay();
    }
    currentOperation = operation;
    prevState = currentState;
    currentState = "";
}
function calculate() {
    switch (currentOperation) {
        case "+":
            currentState = addNumbersHandler(prevState, currentState);
            break;
        case "-":
            currentState = subtractNumbersHandler(prevState, currentState);
            break;
        case "*":
            currentState = multiplyNumbersHandler(prevState, currentState);
            break;
        case "÷":
            currentState = divideNumbersHandler(prevState, currentState);
            break;
        default:
            return;
    }
}
function clearAfterCalculationHandler() {
    currentOperation = null;
    prevState = "";
}
function getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
        integerDisplay = "";
    }
    else {
        integerDisplay = integerDigits.toLocaleString("pl-PL");
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    }
    return integerDisplay;
}
function updateDisplay() {
    mainOutput.textContent = getDisplayNumber(currentState);
    if (currentOperation !== null) {
        subOutput.textContent = `${prevState} ${currentOperation}`;
    }
    else {
        subOutput.textContent = "";
    }
}
const buttons = initializeButtons();
buttons.map((element) => {
    element.addEventListener("click", () => {
        const transformedData = transformData(element);
        processAction(transformedData);
    });
});
function processAction(action) {
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
            chooseOperation("÷");
            break;
        case "times":
            console.log("Process times");
            chooseOperation("*");
            break;
        case "minus":
            console.log("Process Minus");
            chooseOperation("-");
            break;
        case "plus":
            console.log("Process Plus");
            chooseOperation("+");
            break;
        case "sub":
            console.log("Process Sub");
            break;
        case "dot":
            console.log("Process dot");
            break;
        case "equals":
            calculate();
            clearAfterCalculationHandler();
            updateDisplay();
            break;
        default:
            numberOperationHandler(action);
    }
    updateDisplay();
}
function numberOperationHandler(number) {
    if (!isNumber(number)) {
        return;
    }
    appendNumber(number);
}
