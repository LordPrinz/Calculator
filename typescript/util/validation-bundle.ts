export function isNumber(number: number): boolean {
	const intNumber = +number;
	return typeof intNumber === "number" && !isNaN(intNumber);
}

export function validateNumbers(number1: number, number2: number): void {
	if (!isNumber(+number1) || !isNumber(+number2)) {
		const error = new Error(`Invalid number!`);
		throw error;
	}
}

export function hasDot(variable: string): boolean {
	return variable.includes(".");
}

export function isEqualDot(variable: string): boolean {
	return variable === ".";
}
