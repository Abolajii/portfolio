import React from 'react';

import { BallSwitch, Container, Inner } from './styles';

const DropdownSwitch = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

DropdownSwitch.Inner = function DropdownSwitchInner({
	children,
	isDark,
	...restProps
}) {
	return (
		<Inner isDark={isDark} {...restProps}>
			{children}
		</Inner>
	);
};

DropdownSwitch.BallSwitch = function DropdownSwitchBallSwitch({
	children,
	isDark,
	...restProps
}) {
	return (
		<BallSwitch isDark={isDark} {...restProps}>
			{children}
		</BallSwitch>
	);
};

export default DropdownSwitch;
