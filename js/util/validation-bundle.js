export function isNumber(number) {
    const intNumber = +number;
    return typeof intNumber === "number" && !isNaN(intNumber);
}
export function validateNumbers(number1, number2) {
    if (!isNumber(+number1) || !isNumber(+number2)) {
        const error = new Error(`Invalid number!`);
        throw error;
    }
}
export function hasDot(variable) {
    return variable.includes(".");
}
export function isEqualDot(variable) {
    return variable === ".";
}
