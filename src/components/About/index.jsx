import React from 'react';

import {
	Container,
	Inner,
	Btn,
	TextContainer,
	Text,
	ButtonContainer,
} from './styles';

const About = ({ isDark, children, ...restProps }) => {
	return (
		<Container isDark={isDark} {...restProps}>
			{children}
		</Container>
	);
};

About.Inner = function AboutInner({ isDark, children, ...restProps }) {
	return (
		<Inner isDark={isDark} {...restProps}>
			{children}
		</Inner>
	);
};

About.Button = function AboutButton({ children, ...restProps }) {
	return <Btn {...restProps}>{children}</Btn>;
};

About.TextContainer = function AboutTextContainer({ children, ...restProps }) {
	return <TextContainer {...restProps}>{children}</TextContainer>;
};

About.Text = function AboutText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

About.BtnContainer = function AboutBtnContainer({ children, ...restProps }) {
	return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

export default About;
