import loadButtonsFromPage from "../init/loadButtonsFromPage.js";
function enableButtons() {
    const buttons = loadButtonsFromPage();
    buttons.map((button) => {
        button.disabled = false;
        button.classList.remove("button--disabled");
    });
}
export default enableButtons;
