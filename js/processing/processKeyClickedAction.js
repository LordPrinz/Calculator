import { appendNumber, clear, deleteNumber, processOperation, } from "../calc/calculator-core.js";
import { equals } from "../calc/calculator-options.js";
function processKeyClickedAction(event) {
    const pressedKey = event.code;
    if (pressedKey.includes("Digit")) {
        appendNumber(pressedKey.slice(5));
    }
    if (pressedKey === "NumpadAdd") {
        processOperation("+");
    }
    if (pressedKey === "NumpadSubtract" || pressedKey === "Minus") {
        processOperation("-");
    }
    if (pressedKey === "NumpadEnter" ||
        pressedKey === "Equal" ||
        pressedKey === "Enter") {
        equals();
    }
    if (pressedKey === "Slash" || pressedKey === "NumpadDivide") {
        processOperation("÷");
    }
    if (pressedKey === "NumpadMultiply") {
        processOperation("*");
    }
    if (pressedKey === "Comma" ||
        pressedKey === "Period" ||
        pressedKey === "NumpadDecimal") {
        appendNumber(".");
    }
    if (pressedKey === "Escape") {
        clear();
    }
    if (pressedKey === "Backspace") {
        deleteNumber();
    }
}
export default processKeyClickedAction;
