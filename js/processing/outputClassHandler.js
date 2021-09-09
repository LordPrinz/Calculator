export function setErrorOutputClass() {
    const mainOutput = document.querySelector(".output__main");
    mainOutput.classList.add("invalid");
}
export function removeErrorOutputClass() {
    const mainOutput = document.querySelector(".output__main");
    mainOutput.classList.remove("invalid");
}
