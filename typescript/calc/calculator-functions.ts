import {
	isBiggerThanZero,
	isNumber,
	validateNumbers,
} from "./../util/validation-bundle.js";

type operationFunctionType = number | void;

function percent(number1: number, percentage: number, operation: string) {
	const percentedValue = (number1 / 100) * percentage;

	switch (operation) {
		case "+":
			return number1 + percentedValue;
		case "-":
			return number1 - percentedValue;
		case "*":
			return number1 * percentedValue;
		case "÷":
			return number1 / percentedValue;
	}
}

function add(number1: number, number2: number) {
	return number1 + number2;
}

function multiply(number1: number, number2: number) {
	return number1 * number2;
}
function divide(number1: number, number2: number) {
	return number1 / number2;
}
function subtract(number1: number, number2: number) {
	return number1 - number2;
}

function sqrt(number1: number) {
	return Math.sqrt(number1);
}

function power(number1: number) {
	return number1 * number1;
}

function reverse(number1: number) {
	return 1 / number1;
}

function flip(number1: number) {
	return number1 * -1;
}

export function percentageNumberHandler(
	number1: number,
	percentage: number,
	operation: string
) {
	const result = percent(number1, percentage, operation);
	return result;
}

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

export function sqrtNumbersHandler(number1: number) {
	if (!isNumber(number1) && !isBiggerThanZero(number1)) {
		const error = new Error("Invalid number");
		throw error;
	}
	const result = sqrt(number1);
	return result;
}

export function powerNumberHandler(number1: number) {
	if (!isNumber(number1)) {
		const error = new Error("Invalid number");
		throw error;
	}
	const result = power(number1);
	return result;
}

export function reverseNumberHandler(number1: number) {
	if (!isNumber(number1)) {
		const error = new Error("Invalid number");
		throw error;
	}
	const result = reverse(number1);
	return result;
}

export function flipNumberHandler(number1: number) {
	if (!isNumber(number1)) {
		const error = new Error("Invalid number");
		throw error;
	}
	const result = flip(number1);
	return result;
}
