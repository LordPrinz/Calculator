import { clear } from "console";
import { appendNumber, calculate, deleteNumber, processOperation, updateDisplay, } from "../calc/calculator-core";
import { equals } from "../calc/calculator-options";
import { setLocalStorageItem } from "../util/local-storage";
import { isNumber } from "../util/validation-bundle";
function numberOperationHandler(number) {
    if (!isNumber(number)) {
        return;
    }
    appendNumber(number);
}
function processAction(action) {
    switch (action) {
        case "procent":
            setLocalStorageItem("isProcentage", true);
            equals();
            break;
        case "ce":
            setLocalStorageItem("currentState", 0);
            break;
        case "c":
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
export default processAction;
