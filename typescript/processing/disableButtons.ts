import loadButtonsFromPage from "../init/loadButtonsFromPage.js";

function disableButtons() {
	const buttons = loadButtonsFromPage();

	buttons.map((button) => {
		const buttonClassName = button.className;
		if (!buttonClassName.includes("clear")) {
			button.disabled = true;
			button.classList.add("button--disabled");
		}
	});
}

export default disableButtons;
