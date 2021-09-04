import { setError } from "./error-handling.js";

export function isNumber(number: number): boolean {
	const intNumber = +number;
	return typeof intNumber === "number" && !isNaN(intNumber);
}

// export function validateNumbers(number1: number, number2: number): void {
// 	if (!isNumber(+number1) || !isNumber(+number2)) {
// 		setError("Invalid Number!");
// 	}
// }

export function validateNumbers(numbers: any, validateValue: any) {
	let isValid = true;
	numbers.map((number: number) => {
		if (!validateValue(number)) {
			isValid = false;
		}
	});

	return isValid;
}

export function isBiggerThanZero(number: number): boolean {
	return number >= 0;
}
