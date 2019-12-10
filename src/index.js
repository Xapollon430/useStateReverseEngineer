import React from "react";
import ReactDOM from "react-dom";

let states = [];

let calls = -1;

const useState = initialValue => {
	let callId = ++calls;
	let value = initialValue;

	if (states[callId]) {
		return states[callId];
	}

	const setValue = newValue => {
		states[callId][0] = newValue;
		myRender();
	};

	console.dir(setValue);

	let arrayToReturn = [value, setValue];

	states[callId] = arrayToReturn;

	return arrayToReturn;
};

const Test = () => {
	let [count, setCount] = useState(0);
	return (
		<div>
			<h1>{count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increment
			</button>
		</div>
	);
};

function myRender() {
	calls = -1;
	ReactDOM.render(<Test />, document.getElementById("root"));
}
ReactDOM.render(<Test />, document.getElementById("root"));
