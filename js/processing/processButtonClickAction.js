import { clear } from "./../calc/calculator-core.js";
import { appendNumber, calculate, deleteNumber, processOperation, updateDisplay, } from "../calc/calculator-core.js";
import { equals } from "../calc/calculator-options.js";
import { setLocalStorageItem } from "../util/local-storage.js";
import { isNumber } from "../util/validation-bundle.js";
function numberOperationHandler(number) {
    if (!isNumber(number)) {
        return;
    }
    appendNumber(number);
}
function processButtonClickAction(action) {
    switch (action) {
        case "procent":
            setLocalStorageItem("isProcentage", true);
            equals();
            break;
        case "ce":
            setLocalStorageItem("currentState", 0);
            break;
        case "clear":
            clear();
            break;
        case "del":
            deleteNumber();
            break;
        case "reverse":
            processOperation("reverse");
            calculate();
            break;
        case "power":
            processOperation("power");
            calculate();
            break;
        case "sqrt":
            processOperation("sqrt");
            calculate();
            break;
        case "divide":
            processOperation("÷");
            break;
        case "times":
            processOperation("*");
            break;
        case "minus":
            processOperation("-");
            break;
        case "plus":
            processOperation("+");
            break;
        case "flip":
            processOperation("flip");
            calculate();
            break;
        case "dot":
            appendNumber(".");
            break;
        case "equals":
            equals();
            break;
        default:
            numberOperationHandler(action);
    }
    updateDisplay();
}
export default processButtonClickAction;
