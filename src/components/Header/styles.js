import { Sling } from 'hamburger-react';
import { Link } from 'react-scroll';

import { MdArrowDropDown } from 'react-icons/md';

import styled, { keyframes } from 'styled-components/macro';
import { motion } from 'framer-motion';

const bounce = keyframes`
0%,100% {
	transform: translateY(-13px);
	
}
70%{
	transform: translateY(0px);
}
`;

export const Container = styled.div`
	position: fixed;
	padding: 0 20px;
	height: 70px;

	background: #000;
	color: #00ffff;
	width: 100%;

	z-index: 99;
	border-bottom: 1px solid black;
`;

export const Inner = styled.div`
	/* background: red; */
	max-width: 1150px;
	height: inherit;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LogoContainer = styled.div`
	/* background: blue; */
	height: inherit;
	display: flex;
	align-items: center;
	flex: 0.4;
`;

export const Logo = styled.div`
	display: flex;
	font-size: 19px;
	font-weight: 550;
`;

export const NavContainer = styled.div`
	height: inherit;
	display: flex;
	/* background: RED; */
	justify-content: flex-end;
	flex: 0.55;
	text-transform: uppercase;
	align-items: center;

	@media (max-width: 707px) {
		display: none;
	}
`;

export const UnderLine = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background: crimson;
	height: 6px;
	transition: transform 0.4s ease;
	transform: scale(0);

	&.active {
		transform: scale(1);
	}
`;

export const NavLink = styled(Link)`
	cursor: pointer;
	text-decoration: none;
`;

export const NavLinkItem = styled.div`
	cursor: pointer;
	font-size: 18px;
	padding: 0 15px;
	display: flex;
	height: inherit;
	align-items: center;
	position: relative;
`;

export const Hamburger = styled(Sling)`
	display: none;
`;

export const Switch = styled.div`
	height: inherit;
	flex: 0.15;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: auto;
`;

export const SwitchButton = styled.button`
	height: 40px;
	width: 40px;
	/* flex: 0.15; */
	background: none;
	cursor: pointer;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* background: blue; */
	border: 2px solid #00ffee;
`;

export const DropDownIcon = styled(MdArrowDropDown)`
	color: #00ffee;
	font-size: 32px;
	transition: transform 0.5s ease;
	transform: ${({ dropdown }) =>
		dropdown ? 'rotate(-180deg)' : 'rotate(0deg)'};
`;

export const DropDown = styled(motion.div)`
	position: absolute;
	top: 60px;
	box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4);
	width: 100px;
	background: #333;
	border-radius: 3px;
	padding: 10px 0;
	margin-right: 20px;
`;

export const SwitchContainer = styled.div`
	width: 80px;
	margin: auto;
	height: 20px;
	border-radius: 100px;
	background: #fff;
	display: flex;
	align-items: center;
	padding-left: 2px;
`;

export const SwitchBall = styled.div`
	height: 18px;
	background: #444;
	width: 18px;
	cursor: pointer;
	border-radius: 50%;
	transform: ${({ isDark }) =>
		isDark ? 'translateX(57px)' : 'translateX(0px)'};
	transition: transform 0.3s ease;
`;

export const Title = styled.div`
	text-align: center;
	display: flex;
`;

export const Letter = styled.h5`
	font-size: 1.5625rem;
	color: #28b5b5;
	&:nth-child(3) {
		color: #e94560;
	}
	&:last-child {
		position: relative;
	}
	&:last-child::after {
		position: absolute;
		top: 0;
		content: '';
		left: 0;
		background: red;
		width: 100%;
		height: 0.4375rem;
		border-radius: 50%;

		animation: ${bounce} 2s linear infinite;
	}
`;
