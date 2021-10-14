import React from 'react';

import { Container, Inner } from './styles';

const Copyrights = ({ isDark, children, ...restProps }) => {
	return (
		<Container isDark={isDark} {...restProps}>
			{children}
		</Container>
	);
};

Copyrights.Inner = function CopyrightsInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

export default Copyrights;
