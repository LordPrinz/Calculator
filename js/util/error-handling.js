export function showErrorMessage(errorMessage) {
    console.error(errorMessage);
}
export function setError(errorMessage) {
    const error = new Error(errorMessage);
    throw error;
}
export function displayErrorMessage(errorMessage) {
    const mainOutput = document.querySelector(".output__main");
    mainOutput.textContent = errorMessage;
}
