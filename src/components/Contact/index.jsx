import React from 'react';
import {
	TextArea,
	Container,
	Form,
	Input,
	Animation,
	Button,
	InputLabel,
	InputDiv,
	Inner,
	Grid,
	UpperDiv,
	IconDiv,
	Icon,
	Text,
	MapContainer,
} from './styles';

const Contact = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Contact.Inner = function ContactInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Contact.UpperDiv = function ContactUpperDiv({ children, ...restProps }) {
	return <UpperDiv {...restProps}>{children}</UpperDiv>;
};

Contact.IconDiv = function ContactIconDiv({ isDark, children, ...restProps }) {
	return (
		<IconDiv isDark={isDark} {...restProps}>
			{children}
		</IconDiv>
	);
};

Contact.Icon = function ContactIcon({ ...restProps }) {
	return <Icon {...restProps} />;
};

Contact.Text = function ContactText({ isDark, children, ...restProps }) {
	return (
		<Text isDark={isDark} {...restProps}>
			{children}
		</Text>
	);
};

Contact.Button = function ContactButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Contact.Grid = function ContactGrid({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};

Contact.InputLabel = function ContactInputLabel({
	isDark,
	ta,
	children,
	...restProps
}) {
	return (
		<InputLabel isDark={isDark} ta={ta} {...restProps}>
			{children}
		</InputLabel>
	);
};

Contact.InputDiv = function ContactInputDiv({ ta, children, ...restProps }) {
	return (
		<InputDiv ta={ta} {...restProps}>
			{children}
		</InputDiv>
	);
};

Contact.Form = function ContactForm({ children, ...restProps }) {
	return <Form {...restProps}>{children}</Form>;
};

Contact.TextArea = function ContactTextArea({ isDark, ...restProps }) {
	return <TextArea isDark={isDark} {...restProps} />;
};

Contact.Animation = function ContactAnimation({ ...restProps }) {
	return <Animation {...restProps} />;
};

Contact.Input = function ContactInput({ isDark, ...restProps }) {
	return <Input isDark={isDark} {...restProps} />;
};

Contact.Map = function ContactMap({ children, ...restProps }) {
	return <MapContainer {...restProps}>{children}</MapContainer>;
};

export default Contact;
