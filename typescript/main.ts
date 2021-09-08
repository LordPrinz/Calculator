import loadButtonsFromPage from "./init/loadButtonsFromPage.js";
import transformData from "./processing/transformData.js";
import {
	displayErrorMessage,
	showErrorMessage,
} from "./util/error-handling.js";
import processButtonClickAction from "./processing/processButtonClickAction.js";
import { updateDisplay } from "./calc/calculator-core.js";
import processKeyClickedAction from "./processing/processKeyClickedAction.js";

//TODO: Create tests
// TODO: FIX FLIP BUG

const buttons = loadButtonsFromPage();

buttons.map((element: Element) => {
	element.addEventListener("click", () => {
		const transformedData = transformData(element);
		try {
			processButtonClickAction(transformedData);
		} catch (error: any) {
			showErrorMessage(error.message);
			displayErrorMessage(error.message);

			//TODO: Disable all buttons except clear one
		}
	});
});

document.addEventListener("keydown", (event) => {
	try {
		processKeyClickedAction(event);
	} catch (error: any) {
		showErrorMessage(error.message);
		displayErrorMessage(error.message);

		//TODO: Disable all buttons except clear one
	}

	updateDisplay();
});
