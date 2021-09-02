export function showErrorMessage(errorMessage: string): void {
	console.error(errorMessage);
}

export function setError(errorMessage: string): void {
	const error = new Error(errorMessage);
	throw error;
}
