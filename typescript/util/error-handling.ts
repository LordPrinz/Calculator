export function showErrorMessage(errorMessage: string): void {
	console.error(errorMessage);
}

export function setError(errorMessage: string): never {
	const error = new Error(errorMessage);
	throw error;
}

export function displayErrorMessage(errorMessage: string): void {
	const mainOutput: any = document.querySelector(".output__main");
	mainOutput.textContent = errorMessage;
}
