import React, { useState } from "react";
import ReactDOM from "react-dom";
import Test from "./App";

function Anan() {
	const [state, setState] = useState(0);

	return (
		<div>
			<button onClick={() => setState(state + 1)}>
				{state}
				<Test />
			</button>
		</div>
	);
}

ReactDOM.render(<Anan></Anan>, document.getElementById("root"));
