import initializeButtons from "./init/initializeButtons.js";
//import processAction from "./processing/processAction.js";
import transformData from "./processing/transformData.js";

let mainOutput: any = document.querySelector(".output__main")?.textContent;
let subOutput: any = document.querySelector(".output__sub")?.textContent;
let currentState: number = 0;
let prevState: number = 0;

const buttons = initializeButtons();

buttons.map((element) => {
	element.addEventListener("click", () => {
		const transformedData = transformData(element);
		processAction(transformedData);
	});
});
////////////////////////////////////////////////////////////////

function clear() {
	mainOutput = "";
	subOutput = "";
	currentState = 0;
	prevState = 0;
}

function deleteNumber() {
	mainOutput = mainOutput.toString().slice(0, -1);
}

function appendNumber(number: number | string) {
	if (number === "." && mainOutput.includes(".")) {
		return;
	}
	mainOutput = +mainOutput + number;
}

////////////////////////////////////////////////////////////////

function add(number1: any, number2: any) {
	if (isNaN(+number1) && isNaN(+number2)) {
		return;
	}
	return +number1 + +number2;
}

function devide(number1: any, number2: any) {
	if (isNaN(+number1) && isNaN(+number2)) {
		return;
	}
	return +number1 / +number2;
}

function subtract(number1: any, number2: any) {
	if (isNaN(+number1) && isNaN(+number2)) {
		return;
	}
	return +number1 - +number2;
}

function multiply(number1: any, number2: any) {
	if (isNaN(+number1) && isNaN(+number2)) {
		return;
	}

	return +number1 * +number2;
}

function isNumber(variable: any) {
	return typeof +variable === "number";
}

function numberOperationHandler(number: string | number) {
	if (!isNumber(number)) {
		return;
	}
	//appendNumber(number);
	//updateDisplay();
}

function processAction(action: string) {
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
