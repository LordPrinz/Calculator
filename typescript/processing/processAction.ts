function isNumber(variable: any) {
	return typeof +variable === "number";
}

function numberOperationHandler(number: string | number) {
	if (!isNumber(number)) {
		return;
	}

	console.log(number);
}

function processAction(action: string) {
	switch (action) {
		case "procent":
			console.log("Process %");
			break;
		case "ce":
			console.log("Process CE");
			break;
		case "c":
			console.log("Process C");
			break;
		case "del":
			console.log("Process del");
			break;
		case "reverse":
			console.log("Process 1/X");
			break;
		case "power":
			console.log("Process Power");
			break;
		case "sqrt":
			console.log("Process sqrt");
			break;
		case "divide":
			console.log("Process divide");
			break;
		case "times":
			console.log("Process times");
			break;

		case "minus":
			console.log("Process Minus");
			break;

		case "plus":
			console.log("Process Plus");
			break;
		case "sub":
			console.log("Process Sub");
			break;

		case "dot":
			console.log("Process dot");
			break;
		case "equals":
			console.log("Process equals");
			break;
		default:
			numberOperationHandler(action);
	}
}

export default processAction;
