import { validateNumbers } from "./../util/validation-bundle.js";

type operationFunctionType = number | void;

function add(number1: number, number2: number) {
	return number1 + number2;
}

function multiply(number1: number, number2: number) {
	return number1 * number2;
}
function divide(number1: number, number2: number) {
	return number1 / number2;
}
function subtract(number1: number, number2: number) {}

export function addNumbersHandler(
	number1: number,
	number2: number
): operationFunctionType {
	validateNumbers(number1, number2);
	const result = add(+number1, +number2);
	return result;
}

export function multiplyNumbersHandler(
	number1: number,
	number2: number
): operationFunctionType {
	validateNumbers(number1, number2);
	const result = multiply(+number1, +number2);
	return result;
}

export function divideNumbersHandler(
	number1: number,
	number2: number
): operationFunctionType {
	validateNumbers(number1, number2);
	const result = divide(+number1, +number2);
	return result;
}

export function subtractNumbersHandler(
	number1: number,
	number2: number
): operationFunctionType {
	validateNumbers(number1, number2);
	const result = subtract(+number1, +number2);
	return result;
}
