import React, { useState } from "react";

//create your first component
const TrafictLight = () => {
	const [light, setLight] = useState(false);
	const [color, setColor] = useState("");
	return (
		<div>
			<div className="traffictTop"></div>
			<div className="container semaforo">
				<div
					onClick={() => {
						setLight(light && color == "red" ? false : true);
						setColor("red");
					}}
					className={`red light ${
						light && color == "red" ? "selected" : ""
					} `}></div>
				<div
					onClick={() => {
						setLight(light && color == "yellow" ? false : true);
						setColor("yellow");
					}}
					className={`yellow light ${
						light && color == "yellow" ? "selected" : ""
					} `}></div>
				<div
					onClick={() => {
						setLight(light && color == "green" ? false : true);
						setColor("green");
					}}
					className={`green light ${
						light && color == "green" ? "selected" : ""
					} `}></div>
			</div>
		</div>
	);
};

export default TrafictLight;
