export function setErrorOutputClass() {
	const mainOutput: any = document.querySelector(".output__main");
	mainOutput.classList.add("invalid");
}

export function removeErrorOutputClass() {
	const mainOutput: any = document.querySelector(".output__main");
	mainOutput.classList.remove("invalid");
}
