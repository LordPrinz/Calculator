import loadButtonsFromPage from "./init/loadButtonsFromPage.js";
import transformData from "./processing/transformData.js";
import { showErrorMessage } from "./util/error-handling.js";
import processButtonClickAction from "./processing/processButtonClickAction.js";
import { updateDisplay } from "./calc/calculator-core.js";
import processKeyClickedAction from "./processing/processKeyClickedAction.js";

//TODO: Create tests
//TODO: Fix empty main output bug
// TODO: Unformit calculator action names
const buttons = loadButtonsFromPage();

buttons.map((element: Element) => {
	element.addEventListener("click", () => {
		const transformedData = transformData(element);
		try {
			processButtonClickAction(transformedData);
		} catch (error: any) {
			showErrorMessage(error.message);
			//TODO: Create and show here an error message in main output
			//TODO: Disable all buttons except clear one
		}
	});
});

document.addEventListener("keydown", (event) => {
	try {
		processKeyClickedAction(event);
	} catch (error: any) {
		showErrorMessage(error.message);
		//TODO: Create and show here an error message in main output
		//TODO: Disable all buttons except clear one
	}

	updateDisplay();
});
