import { setError } from "./error-handling.js";
export function isNumber(number) {
    const intNumber = +number;
    return typeof intNumber === "number" && !isNaN(intNumber);
}
export function checkNumbersValidity(validateNumber, ...numbers) {
    return numbers.every((number) => validateNumber(+number));
}
export function isBiggerThanZero(number) {
    return number >= 0;
}
export function validateNumbers(isValid) {
    if (!isValid) {
        setError("Invalid Number!");
    }
}
