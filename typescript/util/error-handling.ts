export function showErrorMessage(errorMessage: string): void {
	console.error(errorMessage);
}

export function setError(errorMessage: string): never {
	const error = new Error(errorMessage);
	throw error;
}
