export function isNumber(number) {
    const intNumber = +number;
    return typeof intNumber === "number" && !isNaN(intNumber);
}
export function validateNumbers(numbers, validateValue) {
    let isValid = true;
    numbers.map((number) => {
        if (!validateValue(number)) {
            isValid = false;
        }
    });
    return isValid;
}
export function isBiggerThanZero(number) {
    return number >= 0;
}
