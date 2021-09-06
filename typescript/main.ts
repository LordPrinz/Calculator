import loadButtonsFromPage from "./init/loadButtonsFromPage.js";
import transformData from "./processing/transformData.js";
import { showErrorMessage } from "./util/error-handling.js";
import processButtonClickAction from "./processing/processButtonClickAction.js";
import { updateDisplay } from "./calc/calculator-core.js";
import processKeyClickedAction from "./processing/processKeyClickedAction.js";

const buttons = loadButtonsFromPage();

buttons.map((element: Element) => {
	element.addEventListener("click", () => {
		const transformedData = transformData(element);
		try {
			processButtonClickAction(transformedData);
		} catch (error: any) {
			showErrorMessage(error.message);
		}
	});
});

document.addEventListener("keydown", (event) => {
	try {
		processKeyClickedAction(event);
	} catch (error: any) {
		showErrorMessage(error.message);
	}

	updateDisplay();
});
