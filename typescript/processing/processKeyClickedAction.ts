import { appendNumber, clear, processOperation } from "../calc/calculator-core";
import { equals } from "../calc/calculator-options";

function processKeyClickedAction(event: any) {
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
  if (
    pressedKey === "NumpadEnter" ||
    pressedKey === "Equal" ||
    pressedKey === "Enter"
  ) {
    equals();
  }
  if (pressedKey === "Slash" || pressedKey === "NumpadDivide") {
    processOperation("÷");
  }
  if (pressedKey === "NumpadMultiply") {
    processOperation("*");
  }
  if (
    pressedKey === "Comma" ||
    pressedKey === "Period" ||
    pressedKey === "NumpadDecimal"
  ) {
    appendNumber(".");
  }
  if (pressedKey === "Escape") {
    clear();
  }
}

export default processKeyClickedAction;
