import React from "react";
import Button from "./Button";

//This is an object that is mandatory for Storybook to export and show up in the SB panel on the left. So name your components here!
export default {
	title: "Button",
	//Optional here
	component: Button,
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;
