import loadButtonsFromPage from "./init/loadButtonsFromPage.js";
import transformData from "./processing/transformData.js";
import { isNumber } from "./util/validation-bundle.js";

import { setError, showErrorMessage } from "./util/error-handling.js";
import processAction from "./processing/processAction.js";
import {
	appendNumber,
	clear,
	processOperation,
	updateDisplay,
} from "./calc/calculator-core.js";
import { equals } from "./calc/calculator-options.js";

const buttons = loadButtonsFromPage();

buttons.map((element) => {
	element.addEventListener("click", () => {
		const transformedData = transformData(element);
		processAction(transformedData);
	});
});

document.addEventListener("keydown", (event) => {
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
	updateDisplay();
});
