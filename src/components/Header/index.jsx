import React from 'react';
import {
	Container,
	DropDown,
	DropDownIcon,
	Hamburger,
	Inner,
	Logo,
	LogoContainer,
	NavContainer,
	NavLink,
	NavLinkItem,
	Switch,
	SwitchBall,
	SwitchButton,
	SwitchContainer,
	UnderLine,
} from './styles';

const Header = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Header.Inner = function HeaderInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Header.LogoContainer = function HeaderLogoContainer({
	children,
	...restProps
}) {
	return <LogoContainer {...restProps}>{children}</LogoContainer>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
	return <Logo {...restProps}>{children}</Logo>;
};

Header.NavContainer = function HeaderNavContainer({ children, ...restProps }) {
	return <NavContainer {...restProps}>{children}</NavContainer>;
};

Header.NavLink = function HeaderNavLink({ children, ...restProps }) {
	return <NavLink {...restProps}>{children}</NavLink>;
};

Header.NavLinkItem = function HeaderNavLinkItem({ children, ...restProps }) {
	return <NavLinkItem {...restProps}>{children}</NavLinkItem>;
};

Header.UnderLine = function HeaderUnderLine({ children, ...restProps }) {
	return <UnderLine {...restProps}>{children}</UnderLine>;
};

Header.Hamburger = function HeaderHamburger({ ...restProps }) {
	return <Hamburger {...restProps} />;
};

Header.Switch = function HeaderSwitch({ children, ...restProps }) {
	return <Switch {...restProps}>{children}</Switch>;
};

Header.SwitchButton = function HeaderSwitch({ children, ...restProps }) {
	return <SwitchButton {...restProps}>{children}</SwitchButton>;
};

Header.DropDownIcon = function HeaderDropDownIcon({ dropdown, ...restProps }) {
	return <DropDownIcon dropdown={dropdown} {...restProps} />;
};

Header.DropDown = function HeaderDropDown({ children, ...restProps }) {
	return <DropDown {...restProps}>{children}</DropDown>;
};

Header.SwitchContainer = function HeaderSwitchContainer({
	children,
	...restProps
}) {
	return <SwitchContainer {...restProps}>{children}</SwitchContainer>;
};

Header.SwitchBall = function HeaderSwitchBall({ isDark, ...restProps }) {
	return <SwitchBall isDark={isDark} {...restProps} />;
};

export default Header;
