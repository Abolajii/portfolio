import React from 'react';
import {
	Box,
	CardBox,
	Container,
	Icon,
	IconDiv,
	Image,
	ImageDiv,
	Inner,
	OuterBox,
	SubTitle,
	Text,
	Title,
	UpperDiv,
} from './styles';

const Services = ({ isDark, children, ...restProps }) => {
	return (
		<Container isDark={isDark} {...restProps}>
			{children}
		</Container>
	);
};

Services.Inner = function ServicesInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Services.UpperDiv = function ServicesUpperDiv({ children, ...restProps }) {
	return <UpperDiv {...restProps}>{children}</UpperDiv>;
};

Services.IconDiv = function ServicesIconDiv({
	isDark,
	children,
	...restProps
}) {
	return (
		<IconDiv isDark={isDark} {...restProps}>
			{children}
		</IconDiv>
	);
};

Services.Icon = function ServicesIcon({ ...restProps }) {
	return <Icon {...restProps} />;
};

Services.Text = function ServicesText({ isDark, children, ...restProps }) {
	return (
		<Text isDark={isDark} {...restProps}>
			{children}
		</Text>
	);
};

Services.CardBox = function ServicesCardBox({ children, ...restProps }) {
	return <CardBox {...restProps}>{children}</CardBox>;
};

Services.OuterBox = function ServicesOuterBox({
	isDark,
	children,
	...restProps
}) {
	return (
		<OuterBox isDark={isDark} {...restProps}>
			{children}
		</OuterBox>
	);
};

Services.Box = function ServicesBox({ isDark, children, ...restProps }) {
	return (
		<Box isDark={isDark} {...restProps}>
			{children}
		</Box>
	);
};

Services.ImageDiv = function ServicesImageDiv({ children, ...restProps }) {
	return <ImageDiv {...restProps}>{children}</ImageDiv>;
};

Services.Image = function ServicesImage({ children, ...restProps }) {
	return <Image {...restProps} />;
};

Services.Title = function ServicesTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Services.SubTitle = function ServicesSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
export default Services;
