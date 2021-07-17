import React from "react";
import Input from "./Input";

//This is an object that is mandatory for Storybook to export and show up in the SB panel on the left. So name your components here!
export default {
	title: "Input",
	//Optional here
	component: Input,
};

export const Small = () => <Input variant='small' />;
export const Medium = () => <Input variant='medium' />;
export const Large = () => <Input variant='large' />;
export const XLarge = () => <Input variant='xlarge' />;
