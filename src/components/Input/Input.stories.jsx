import React from "react";
import Input from "./Input";
import Center from "../Center/Center";

//This is an object that is mandatory for Storybook to export and show up in the SB panel on the left. So name your components here!
export default {
	title: "form/control/Input",
	//Optional here
	component: Input,
	//can do this globally as well check .storybook/preview.js file for notes
	decorators: [(story) => <Center>{story()}</Center>],
};

export const Small = () => <Input variant='small' />;
export const Medium = () => <Input variant='medium' />;
export const Large = () => <Input variant='large' />;
export const XLarge = () => <Input variant='xlarge' />;
