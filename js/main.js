var _a, _b;
import initializeButtons from "./init/initializeButtons.js";
import transformData from "./processing/transformData.js";
let mainOutput = (_a = document.querySelector(".output__main")) === null || _a === void 0 ? void 0 : _a.textContent;
let subOutput = (_b = document.querySelector(".output__sub")) === null || _b === void 0 ? void 0 : _b.textContent;
let currentState = 0;
let prevState = 0;
const buttons = initializeButtons();
buttons.map((element) => {
    element.addEventListener("click", () => {
        const transformedData = transformData(element);
        processAction(transformedData);
    });
});
function clear() {
    mainOutput = "";
    subOutput = "";
    currentState = 0;
    prevState = 0;
}
function deleteNumber() {
    mainOutput = mainOutput.toString().slice(0, -1);
}
function appendNumber(number) {
    if (number === "." && mainOutput.includes(".")) {
        return;
    }
    mainOutput = +mainOutput + number;
}
function add(number1, number2) {
    if (isNaN(+number1) && isNaN(+number2)) {
        return;
    }
    return +number1 + +number2;
}
function devide(number1, number2) {
    if (isNaN(+number1) && isNaN(+number2)) {
        return;
    }
    return +number1 / +number2;
}
function subtract(number1, number2) {
    if (isNaN(+number1) && isNaN(+number2)) {
        return;
    }
    return +number1 - +number2;
}
function multiply(number1, number2) {
    if (isNaN(+number1) && isNaN(+number2)) {
        return;
    }
    return +number1 * +number2;
}
function isNumber(variable) {
    return typeof +variable === "number";
}
function numberOperationHandler(number) {
    if (!isNumber(number)) {
        return;
    }
}
function processAction(action) {
    switch (action) {
        case "procent":
            console.log("Process %");
            break;
        case "ce":
            console.log("Process CE");
            break;
        case "c":
            console.log("Process C");
            break;
        case "del":
            console.log("Process del");
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
            devide(mainOutput, subOutput);
            break;
        case "times":
            console.log("Process times");
            multiply(mainOutput, subOutput);
            break;
        case "minus":
            console.log("Process Minus");
            subtract(mainOutput, subOutput);
            break;
        case "plus":
            console.log("Process Plus");
            add(mainOutput, subOutput);
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
}
