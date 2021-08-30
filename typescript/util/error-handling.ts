function showErrorMessage(errorMessage: string): void {
	throw { message: errorMessage };
}

export default showErrorMessage;
