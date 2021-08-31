import initializeButtons from "./init/initializeButtons.js";
import transformData from "./processing/transformData.js";
import { isNumber } from "./util/validation-bundle.js";
import {
	addNumbersHandler,
	divideNumbersHandler,
	flipNumberHandler,
	multiplyNumbersHandler,
	powerNumberHandler,
	reverseNumberHandler,
	sqrtNumbersHandler,
	subtractNumbersHandler,
} from "./calc/calculator-functions.js";

let mainOutput: any = document.querySelector(".output__main");
let subOutput: any = document.querySelector(".output__sub");

let currentState: any = mainOutput?.textContent;
let prevState: any = subOutput?.textContent;
let currentOperation: any = "";

function clear() {
	currentState = 0;
	prevState = "";
	currentOperation = null;
}

function deleteNumber() {
	currentState = currentState.toString().slice(0, -1);
}

function appendNumber(number: string) {
	if (number === "." && currentState.includes(".")) {
		return;
	}
	currentState += number;
}

function processOperation(operation: string) {
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
		case "sqrt":
			currentState = sqrtNumbersHandler(prevState);
			break;
		case "power":
			currentState = powerNumberHandler(prevState);
			break;
		case "reverse":
			currentState = reverseNumberHandler(prevState);
			break;
		case "flip":
			currentState = flipNumberHandler(prevState);
			break;
		default:
			return;
	}
}

function clearAfterCalculationHandler() {
	currentOperation = null;
	prevState = "";
}

function getDisplayNumber(number: number) {
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

function updateDisplay() {
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

const buttons = initializeButtons();

buttons.map((element) => {
	element.addEventListener("click", () => {
		const transformedData = transformData(element);
		processAction(transformedData);
	});
});

function processAction(action: string) {
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
			console.log("Process dot");
			break;
		case "equals":
			equals();
			break;
		default:
			numberOperationHandler(action);
	}
	updateDisplay();
}

function numberOperationHandler(number: any) {
	if (!isNumber(number)) {
		return;
	}
	appendNumber(number);
}

function equals() {
	calculate();
	clearAfterCalculationHandler();
	updateDisplay();
}
