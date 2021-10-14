import React from 'react';

import { Container, DropDownlink, Inner, LinkItem } from './styles';

const DropDown = ({ children, isOpen, ...restProps }) => {
	// const nav = true;

	return (
		<Container isOpen={isOpen} {...restProps}>
			{children}
		</Container>
	);
};

DropDown.Inner = function DropDownInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

DropDown.Link = function DropDownLink({ children, ...restProps }) {
	return <DropDownlink {...restProps}>{children}</DropDownlink>;
};

DropDown.LinkItem = function DropDownLinkItem({ children, ...restProps }) {
	return <LinkItem {...restProps}>{children}</LinkItem>;
};

export default DropDown;
