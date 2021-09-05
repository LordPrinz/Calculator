import { setError } from "./error-handling.js";

export function isNumber(number: number): boolean {
	const intNumber = +number;
	return typeof intNumber === "number" && !isNaN(intNumber);
}

export function checkNumbersValidity(
	validateNumber: (number: number) => boolean,
	...numbers: number[]
) {
	return numbers.every((number) => validateNumber(+number));
}

export function isBiggerThanZero(number: number): boolean {
	return number >= 0;
}

export function validateNumbers(isValid: boolean) {
	if (!isValid) {
		setError("Invalid Number!");
	}
}
