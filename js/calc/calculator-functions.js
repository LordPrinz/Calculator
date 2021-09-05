import { isBiggerThanZero, isNumber, checkNumbersValidity, validateNumbers, } from "./../util/validation-bundle.js";
function percent(number1, percentage, operation) {
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
function add(number1, number2) {
    return +number1 + +number2;
}
function multiply(number1, number2) {
    return +number1 * +number2;
}
function divide(number1, number2) {
    return +number1 / +number2;
}
function subtract(number1, number2) {
    return +number1 - +number2;
}
function sqrt(number1) {
    return Math.sqrt(+number1);
}
function power(number1) {
    return +number1 * +number1;
}
function reverse(number1) {
    return 1 / +number1;
}
function flip(number1) {
    return +number1 * -1;
}
export function percentageNumberHandler(number, percentageValue, operation) {
    const areNumbersValid = checkNumbersValidity((number) => isNumber(number), number, percentageValue);
    validateNumbers(areNumbersValid);
    return percent(number, percentageValue, operation);
}
export function addNumbersHandler(number1, number2) {
    const areNumbersValid = checkNumbersValidity((number) => isNumber(number), number1, number2);
    validateNumbers(areNumbersValid);
    return add(number1, number2);
}
export function multiplyNumbersHandler(number1, number2) {
    const areNumbersValid = checkNumbersValidity((number) => isNumber(number), number1, number2);
    validateNumbers(areNumbersValid);
    return multiply(number1, number2);
}
export function divideNumbersHandler(number1, number2) {
    const areNumbersValid = checkNumbersValidity((number) => isNumber(number), number1, number2);
    validateNumbers(areNumbersValid);
    return divide(number1, number2);
}
export function subtractNumbersHandler(number1, number2) {
    const areNumbersValid = checkNumbersValidity((number) => isNumber(number), number1, number2);
    validateNumbers(areNumbersValid);
    return subtract(number1, +number2);
}
export function sqrtNumbersHandler(number) {
    const isNumberValid = checkNumbersValidity((number) => isNumber(number) && isBiggerThanZero(number), number);
    validateNumbers(isNumberValid);
    return sqrt(number);
}
export function powerNumberHandler(number) {
    const isNumberValid = checkNumbersValidity((number) => isNumber(number), number);
    validateNumbers(isNumberValid);
    return power(number);
}
export function reverseNumberHandler(number) {
    const isNumberValid = checkNumbersValidity((number) => isNumber(number), number);
    validateNumbers(isNumberValid);
    return reverse(number);
}
export function flipNumberHandler(number) {
    const isNumberValid = checkNumbersValidity((number) => isNumber(number), number);
    validateNumbers(isNumberValid);
    return flip(number);
}
