import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
	//handles formatting inside the storybook menu
	title: "form/control/Button",
	//Optional naming here that will show up in the left SB sidebar menu
	component: Button,
	//Can set children here as well to make a global child that doesn't change...the args below will over-write these though
	args: {
		children: "Button",
	},
	//Styling components that will allow you to wrap a component with another component. This will affect all stories
	decorators: [(story) => <Center>{story()}</Center>],

	//Where we show actions that we intend on happening

	argTypes: {
		onClick: {
			action: "onClick",
		},
	},
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
//The props we wanna send through go here...
PrimaryA.args = {
	//this will be a prop to manipulate this component
	variant: "primary",
	//this is what is going to get passed through to child components or even becomes a child
	children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
//Args are reusable! Here I'm spreading the PrimaryA object to get in and change just the children prop
//This is going to make another "primary button" but with one small change in the children prop
LongPrimaryA.args = {
	...PrimaryA.args,
	children: "Long Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
	//this will be a prop to manipulate this component
	variant: "secondary",
	//this is what is going to get passed through to child components or even becomes a child
	children: "Secondary A Args",
};

export const SuccessA = Template.bind({});
SuccessA.args = {
	//this will be a prop to manipulate this component
	variant: "success",
	//this is what is going to get passed through to child components or even becomes a child
	children: "Success Args",
};

export const DangerA = Template.bind({});
DangerA.args = {
	//this will be a prop to manipulate this component
	variant: "danger",
	//this is what is going to get passed through to child components or even becomes a child
	children: "Danger Args",
};
