class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }
    clear() {
        this.currentOperandText = "";
        this.previousOperandText = "";
        this.operation = undefined;
    }
    delete() { }
    appendNumber(number) { }
    chooseOperation(operation) { }
    compute() { }
    updateDisplay() { }
}
export default Calculator;
