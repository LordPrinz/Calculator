import initializeButtons from "./init/initializeButtons.js";
//import processAction from "./processing/processAction.js";
import transformData from "./processing/transformData.js";
import { addNumbersHandler } from "./calc/calculator-functions.js";
import { hasDot, isEqualDot, isNumber } from "./util/validation-bundle.js";

console.log(addNumbersHandler(2, 2));

let mainOutput: any = document.querySelector(".output__main");
let subOutput: any = document.querySelector(".output__sub");

let currentState: number | string = mainOutput.textContent;
let prevState: number | string = subOutput.textContent;

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

function appendNumber(number: string) {
	currentState += number;
}

function updateDisplay(operation: string | null = null) {
	mainOutput.textContent = currentState;
	if (operation !== null) {
		prevState = currentState;
		subOutput.textContent = `${prevState} ${operation}`;
	} else {
		prevState = "";
	}
}

// ////////////////////////////////////////////////////////////////

// function clear() {
// 	mainOutput = "";
// 	subOutput = "";
// 	currentState = 0;
// 	prevState = 0;
// }

// function deleteNumber() {
// 	mainOutput = mainOutput.toString().slice(0, -1);
// }

// function appendNumber(number: number | string) {
// 	if (number === "." && mainOutput.includes(".")) {
// 		return;
// 	}
// 	mainOutput = +mainOutput + number;
// }

// ////////////////////////////////////////////////////////////////

// function add(number1: any, number2: any) {
// 	if (isNaN(+number1) && isNaN(+number2)) {
// 		return;
// 	}
// 	return +number1 + +number2;
// }

// function devide(number1: any, number2: any) {
// 	if (isNaN(+number1) && isNaN(+number2)) {
// 		return;
// 	}
// 	return +number1 / +number2;
// }

// function subtract(number1: any, number2: any) {
// 	if (isNaN(+number1) && isNaN(+number2)) {
// 		return;
// 	}
// 	return +number1 - +number2;
// }

// function multiply(number1: any, number2: any) {
// 	if (isNaN(+number1) && isNaN(+number2)) {
// 		return;
// 	}

// 	return +number1 * +number2;
// }

// function isNumber(variable: any) {
// 	return typeof +variable === "number";
// }

// function getDisplayNumber(number: number) {
// 	const stringNumber = number.toString();
// 	const integerDigits = +stringNumber.split(".")[0];
// 	const decimalDigits = stringNumber.split(".")[1];
// 	let integerDisplay;
// 	if (isNaN(integerDigits)) {
// 		integerDisplay = "";
// 	} else {
// 		integerDisplay = integerDigits.toLocaleString("en", {
// 			maximumFractionDigits: 0,
// 		});
// 	}
// 	if (decimalDigits != null) {
// 		return `${integerDisplay}.${decimalDigits}`;
// 	} else {
// 		return integerDisplay;
// 	}
// }

// function updateDisplay(operation) {
// 	mainOutput = getDisplayNumber(mainOutput);
// 	console.log("updateDisplay");
// 	if (operation != null) {
// 		subOutput = `${getDisplayNumber(subOutput)} ${operation}}`;
// 	} else {
// 		subOutput = "";
// 	}
// }

function numberOperationHandler(number: any) {
	if (!isNumber(number)) {
		return;
	}
	appendNumber(number);
}

function processAction(action: string) {
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
			//devide(mainOutput, subOutput);
			break;
		case "times":
			console.log("Process times");
			//multiply(mainOutput, subOutput);
			break;

		case "minus":
			console.log("Process Minus");
			//subtract(mainOutput, subOutput);
			break;

		case "plus":
			console.log("Process Plus");
			//add(mainOutput, subOutput);
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
	console.log(
		`STATE: 
		prevState: ${prevState}
		currentState ${currentState}
	`
	);
}, 3000);
