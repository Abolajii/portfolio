import React from 'react';

import {
	Container,
	Inner,
	Title,
	ImageContainer,
	Image,
	Text,
	SmallText,
	TextContainer,
	LogoContainer,
	Logo,
} from './styles';

const Hero = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Hero.Inner = function HeroInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Hero.SmallText = function HeroSmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

Hero.Text = function HeroText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Hero.TextContainer = function HeroTextContainer({ children, ...restProps }) {
	return <TextContainer {...restProps}>{children}</TextContainer>;
};

Hero.LogoContainer = function HeroLogoContainer({ children, ...restProps }) {
	return <LogoContainer {...restProps}>{children}</LogoContainer>;
};

Hero.Image = function HeroImage({ children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>;
};

Hero.ImageContainer = function HeroImageContainer({ children, ...restProps }) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Hero.Logo = function HeroLogo({ children, ...restProps }) {
	return <Logo {...restProps}>{children}</Logo>;
};

export default Hero;
