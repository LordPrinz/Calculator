export function setLocalStorageItem(key, value) {
    localStorage.setItem(key, value);
}
export function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data;
}
