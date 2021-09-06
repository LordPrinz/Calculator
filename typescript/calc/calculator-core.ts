import {
	getDataFromLocalStorage,
	setLocalStorageItem,
} from "../util/local-storage.js";
import {
	addNumbersHandler,
	divideNumbersHandler,
	flipNumberHandler,
	multiplyNumbersHandler,
	percentageNumberHandler,
	powerNumberHandler,
	reverseNumberHandler,
	sqrtNumberHandler,
	subtractNumbersHandler,
} from "./calculator-options.js";

const mainOutput: any = document.querySelector(".output__main");
const subOutput: any = document.querySelector(".output__sub");

let currentOperation: string | null = null;

setLocalStorageItem("currentState", mainOutput?.textContent);
setLocalStorageItem("prevState", subOutput?.textContent);
setLocalStorageItem("isProcentage", false);

export function clear() {
	setLocalStorageItem("currentState", 0);
	setLocalStorageItem("prevState", "");
	currentOperation = null;
}

export function deleteNumber() {
	const currentState: any = getDataFromLocalStorage("currentState");
	console.log(currentState.length);
	if (currentState.length > 1) {
		setLocalStorageItem("currentState", currentState.toString().slice(0, -1));
	}
}

export function appendNumber(number: string) {
	const currentState: any = getDataFromLocalStorage("currentState");

	if (number === "." && currentState.includes(".")) {
		return;
	}
	setLocalStorageItem("currentState", currentState + number);
}

export function processOperation(operation: string) {
	const currentState: any = getDataFromLocalStorage("currentState");
	const prevState: any = getDataFromLocalStorage("prevState");

	if (currentState === "") {
		return;
	}
	if (prevState !== "") {
		calculate();
		clearAfterCalculationHandler();
		updateDisplay();
	}
	currentOperation = operation;
	setLocalStorageItem("prevState", currentState);
	setLocalStorageItem("currentState", "");
}

export function calculate() {
	const isProcentage = getDataFromLocalStorage("isProcentage") === "true";
	const currentState: any = getDataFromLocalStorage("currentState");
	const prevState: any = getDataFromLocalStorage("prevState");

	let dataToSave;

	switch (currentOperation) {
		case "+":
			if (isProcentage) {
				dataToSave = percentageNumberHandler(+prevState, +currentState, "+");
				break;
			}
			dataToSave = addNumbersHandler(prevState, currentState);
			break;
		case "-":
			if (isProcentage) {
				dataToSave = percentageNumberHandler(+prevState, currentState, "-");
				break;
			}
			dataToSave = subtractNumbersHandler(prevState, currentState);
			break;
		case "*":
			if (isProcentage) {
				dataToSave = percentageNumberHandler(+prevState, currentState, "*");
				break;
			}
			dataToSave = multiplyNumbersHandler(prevState, currentState);
			break;
		case "÷":
			if (isProcentage) {
				dataToSave = percentageNumberHandler(+prevState, currentState, "÷");
				break;
			}
			dataToSave = divideNumbersHandler(prevState, currentState);
			break;
		case "sqrt":
			dataToSave = sqrtNumberHandler(prevState);
			break;
		case "power":
			dataToSave = powerNumberHandler(prevState);
			break;
		case "reverse":
			dataToSave = reverseNumberHandler(prevState);
			break;
		case "flip":
			dataToSave = flipNumberHandler(prevState);
			break;
		default:
			return;
	}
	setLocalStorageItem("currentState", `0${dataToSave}`);
}

export function clearAfterCalculationHandler() {
	currentOperation = null;
	setLocalStorageItem("prevState", "");
	setLocalStorageItem("isProcentage", false);
}

export function getDisplayNumber(number: number) {
	const stringNumber = number.toString();
	const integerDigits = parseFloat(stringNumber.split(".")[0]);
	const decimalDigits = stringNumber.split(".")[1];
	let integerDisplay;
	if (isNaN(integerDigits)) {
		integerDisplay = "";
	} else {
		integerDisplay = integerDigits.toLocaleString("pl-PL");
	}
	if (decimalDigits != null) {
		return `${integerDisplay}.${decimalDigits}`;
	}
	return integerDisplay;
}

export function updateDisplay() {
	const currentState: any = getDataFromLocalStorage("currentState");
	const prevState: any = getDataFromLocalStorage("prevState");
	mainOutput.textContent = getDisplayNumber(currentState);
	if (currentOperation !== null) {
		subOutput.textContent = `${prevState} ${currentOperation}`;
		if (prevState[0] === "0" && prevState[1] !== ".") {
			subOutput.textContent = `${prevState.slice(1)} ${currentOperation}`;
		}
	} else {
		subOutput.textContent = "";
	}
}
