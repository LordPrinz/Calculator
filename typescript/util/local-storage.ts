export function setLocalStorageItem(key: string, value: any): void {
	//* It works to create and update a local storage item
	localStorage.setItem(key, value);
}

export function getDataFromLocalStorage(key: string): string | null {
	const data = localStorage.getItem(key);
	return data;
}
