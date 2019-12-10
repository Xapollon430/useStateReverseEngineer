import React, { useState, useEffect } from "react";

const useList = () => {
	const [data, setData] = React.useState(0);
	return [data, setData];
};

var divStyle = {
	width: "20px"
};

const Test = () => {
	const [count, setCount] = useList();
	console.log("Reruns cus of parent compjent");
	return <h1>sa</h1>;
};

export default Test;
