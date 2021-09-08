import loadButtonsFromPage from "./init/loadButtonsFromPage.js";
import transformData from "./processing/transformData.js";
import { displayErrorMessage, showErrorMessage, } from "./util/error-handling.js";
import processButtonClickAction from "./processing/processButtonClickAction.js";
import { updateDisplay } from "./calc/calculator-core.js";
import processKeyClickedAction from "./processing/processKeyClickedAction.js";
import disableButtons from "./processing/disableButtons.js";
const buttons = loadButtonsFromPage();
buttons.map((element) => {
    element.addEventListener("click", () => {
        const transformedData = transformData(element);
        try {
            processButtonClickAction(transformedData);
        }
        catch (error) {
            showErrorMessage(error.message);
            displayErrorMessage(error.message);
            disableButtons();
        }
    });
});
document.addEventListener("keydown", (event) => {
    try {
        processKeyClickedAction(event);
    }
    catch (error) {
        showErrorMessage(error.message);
        displayErrorMessage(error.message);
    }
    updateDisplay();
});
