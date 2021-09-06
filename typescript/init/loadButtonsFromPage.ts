function loadButtonsFromPage() {
	const buttons = Array.prototype.slice.call(
		document.querySelectorAll(".button")
	);
	return buttons;
}

export default loadButtonsFromPage;
