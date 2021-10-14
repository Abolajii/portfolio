import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	height: 70vh;
	position: fixed;
	z-index: 10000;
	left: 0;
	top: 70px;
	width: 100%;
	transform: ${({ isOpen }) =>
		isOpen ? 'translateY(0%)' : 'translateY(-120%)'};
	background: rgba(0, 0, 0, 0.9);

	color: white;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
`;

export const Inner = styled.div`
	/* background: darkblue; */
	height: inherit;
	max-width: 320px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const LinkItem = styled.div`
	/* margin-bottom: 30px; */
	text-align: center;
	/* padding: 10px 0; */
	line-height: 3.5;
	font-size: 23px;
	text-transform: uppercase;
	cursor: pointer;
`;

export const DropDownlink = styled(Link)``;
