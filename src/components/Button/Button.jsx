import React from "react";
//importing is better this way to deal with variants
import "./Button.css";

export default function Button(props) {
	const { variant = "primary", children, ...rest } = props;
	//Destructuring the variants that are currently governed by style, the children that need to go on through to the child, and the rest of the props in case anything else hangs out there.
	//Breaking out children so we can pass the info through as a child

	//Implements two styles and then the rest of the props are spread and passed through to the children

	return (
		<button className={`button ${variant}`} {...rest}>
			{/*can be manipulated as well if needed or not children is a place holder for our text that will change...*/}
			{children}
		</button>
	);
}
