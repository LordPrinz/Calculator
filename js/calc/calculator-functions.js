import { setError } from "../util/error-handling.js";
import { isBiggerThanZero, isNumber, validateNumbers, } from "./../util/validation-bundle.js";
function percent(number1, percentage, operation) {
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
function add(number1, number2) {
    return number1 + number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function sqrt(number1) {
    return Math.sqrt(number1);
}
function power(number1) {
    return number1 * number1;
}
function reverse(number1) {
    return 1 / number1;
}
function flip(number1) {
    return number1 * -1;
}
export function percentageNumberHandler(number1, percentage, operation) {
    const result = percent(number1, percentage, operation);
    return result;
}
export function addNumbersHandler(number1, number2) {
    console.log(validateNumbers([+number1, +number2], (number) => isNumber(number)));
    const result = add(+number1, +number2);
    return result;
}
export function multiplyNumbersHandler(number1, number2) {
    validateNumbers(number1, number2);
    const result = multiply(+number1, +number2);
    return result;
}
export function divideNumbersHandler(number1, number2) {
    validateNumbers(number1, number2);
    const result = divide(+number1, +number2);
    return result;
}
export function subtractNumbersHandler(number1, number2) {
    validateNumbers(number1, number2);
    const result = subtract(+number1, +number2);
    return result;
}
export function sqrtNumbersHandler(number1) {
    if (!isNumber(number1) || !isBiggerThanZero(number1)) {
        setError("Invalid Number!");
    }
    const result = sqrt(number1);
    return result;
}
export function powerNumberHandler(number1) {
    if (!isNumber(number1)) {
        setError("Invalid Number!");
    }
    const result = power(number1);
    return result;
}
export function reverseNumberHandler(number1) {
    if (!isNumber(number1)) {
        setError("Invalid Number!");
    }
    const result = reverse(number1);
    return result;
}
export function flipNumberHandler(number1) {
    if (!isNumber(number1)) {
        setError("Invalid Number!");
    }
    const result = flip(number1);
    return result;
}
