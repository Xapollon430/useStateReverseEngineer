import React from "react";

const Form = props => {
	let redBar = null;

	if (props.redBar) {
		redBar = <h1>This is red</h1>;
	}

	return (
		<form>
			<label>
				Name: {props.name}
				<input type="text" name="name" onChange={props.change} />
			</label>
			<input type="submit" value="Submit" />
			{redBar}
		</form>
	);
};

export default Form;
