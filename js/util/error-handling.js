export function showErrorMessage(errorMessage) {
    console.error(errorMessage);
}
export function setError(errorMessage) {
    const error = new Error(errorMessage);
    throw error;
}
