import {
	isBiggerThanZero,
	isNumber,
	checkNumbersValidity,
	validateNumbers,
} from "./../util/validation-bundle.js";
import {
	calculate,
	clearAfterCalculationHandler,
	updateDisplay,
} from "./calculator-core.js";

type operationFunctionType = number | never;

function percent(number1: number, percentage: number, operation: string) {
	const percentedValue = (number1 / 100) * percentage;
	switch (operation) {
		case "+":
			return +number1 + percentedValue;
		case "-":
			return +number1 - percentedValue;
		case "*":
			return +number1 * percentedValue;
		case "÷":
			return +number1 / percentedValue;
	}
}

function add(number1: number, number2: number) {
	return +number1 + +number2;
}

function multiply(number1: number, number2: number) {
	return +number1 * +number2;
}
function divide(number1: number, number2: number) {
	return +number1 / +number2;
}
function subtract(number1: number, number2: number) {
	return +number1 - +number2;
}

function sqrt(number1: number) {
	return Math.sqrt(+number1);
}

function power(number1: number) {
	return +number1 * +number1;
}

function reverse(number1: number) {
	return 1 / +number1;
}

function flip(number1: number) {
	return +number1 * -1;
}

export function percentageNumberHandler(
	number: number,
	percentageValue: number,
	operation: string
) {
	const areNumbersValid = checkNumbersValidity(
		(number: number) => isNumber(number),
		number,
		percentageValue
	);

	validateNumbers(areNumbersValid);

	return percent(number, percentageValue, operation);
}

export function addNumbersHandler(
	number1: number,
	number2: number
): operationFunctionType {
	const areNumbersValid = checkNumbersValidity(
		(number: number) => isNumber(number),
		number1,
		number2
	);

	validateNumbers(areNumbersValid);
	return add(number1, number2);
}

export function multiplyNumbersHandler(
	number1: number,
	number2: number
): operationFunctionType {
	const areNumbersValid = checkNumbersValidity(
		(number: number) => isNumber(number),
		number1,
		number2
	);

	validateNumbers(areNumbersValid);
	return multiply(number1, number2);
}

export function divideNumbersHandler(
	number1: number,
	number2: number
): operationFunctionType {
	const areNumbersValid = checkNumbersValidity(
		(number: number) => isNumber(number),
		number1,
		number2
	);

	validateNumbers(areNumbersValid);
	return divide(number1, number2);
}

export function subtractNumbersHandler(
	number1: number,
	number2: number
): operationFunctionType {
	const areNumbersValid = checkNumbersValidity(
		(number: number) => isNumber(number),
		number1,
		number2
	);

	validateNumbers(areNumbersValid);
	return subtract(number1, +number2);
}

export function sqrtNumberHandler(number: number) {
	const isNumberValid = checkNumbersValidity(
		(number: number) => isNumber(number) && isBiggerThanZero(number),
		number
	);

	validateNumbers(isNumberValid);
	return sqrt(number);
}

export function powerNumberHandler(number: number) {
	const isNumberValid = checkNumbersValidity(
		(number: number) => isNumber(number),
		number
	);

	validateNumbers(isNumberValid);
	return power(number);
}

export function reverseNumberHandler(number: number) {
	const isNumberValid = checkNumbersValidity(
		(number: number) => isNumber(number),
		number
	);

	validateNumbers(isNumberValid);
	return reverse(number);
}

export function flipNumberHandler(number: number) {
	const isNumberValid = checkNumbersValidity(
		(number: number) => isNumber(number),
		number
	);

	validateNumbers(isNumberValid);
	return flip(number);
}

export function equals() {
	calculate();
	clearAfterCalculationHandler();
	updateDisplay();
}
