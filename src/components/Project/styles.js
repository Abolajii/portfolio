import styled, { css } from 'styled-components';

import { SiReactos } from 'react-icons/si';
import { motion } from 'framer-motion';

export const Container = styled.div`
	position: relative;
	top: 0px;
	padding: 20px;
	transition: background 0.5s ease;
	background: ${({ isDark }) => (isDark ? '#232427' : '#F4F3F3')};
`;

export const Inner = styled.div`
	max-width: 1100px;
	margin: auto;
`;

export const UpperDiv = styled.div`
	display: flex;
	padding: 20px;
	align-items: center;
	justify-content: center;
`;

export const IconDiv = styled.div`
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40px;
	padding: 10px;
	transition: box-shadow 0.5s ease;
	box-shadow: ${({ isDark }) =>
		isDark
			? '0px 3px 6px 0 rgba(255, 255, 255, 0.4)'
			: '0px 3px 6px 0 rgba(0, 0, 0, 0.4)'};
	margin-right: 20px;
`;

export const Icon = styled(SiReactos)`
	color: #519ca6;
	font-size: 25px;
`;

export const Text = styled.h1`
	font-size: 40px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: ${({ isDark }) => (isDark ? '#00ffee' : '#519ca6')};
`;

export const TabContainer = styled.div`
	display: flex;
	/* background: khaki; */
	padding: 20px;
	justify-content: center;
`;

export const TabItem = styled.button`
	padding: 4px 15px;
	font-size: 18px;
	cursor: pointer;
	margin: 0 8px;
	background: none;
	border: none;
	border: 1px solid #519ca6;
	color: #519ca6;
	border-radius: 30px;

	${({ isDark }) => {
		return (
			isDark &&
			css`
				border: 1px solid #00ffee;
				color: #00ffee;
			`
		);
	}}
`;

export const ProjectsContainer = styled.div`
	display: grid;
	max-width: 880px;
	margin: auto;
	grid-template-columns: repeat(3, 1fr);
	padding: 20px;

	@media (max-width: 901px) {
		grid-template-columns: repeat(2, 0.5fr);
		max-width: 600px;
	}
	@media (max-width: 620px) {
		grid-template-columns: repeat(1, 1fr);
		max-width: 300px;
	}
`;

export const ProjectItem = styled(motion.div)`
	place-self: center;
	height: 250px;
	width: 250px;
	overflow: hidden;
	border-radius: 10px;
	margin-bottom: 50px;
	background: #00ffee;
`;

export const ProjectItemImageContainer = styled.div`
	height: 170px;
	background: palegreen;
	width: 100%;
	cursor: pointer;
`;

export const ProjectItemImageHoverDiv = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	height: 170px;
	background: rgba(0, 0, 0, 0.4);
	transform: scale(0);
	transition: transform 0.5s ease;
`;

export const ProjectItemImage = styled.div`
	height: 170px;
	position: relative;
	/* background: yellow; */

	&:hover ${ProjectItemImageHoverDiv} {
		/* transform: ${({ isHover }) => (isHover ? 'scale(0.5)' : 'scale(0)')}; */
		transform: scale(1);
	}
`;

export const ProjectItemTextContainer = styled.div`
	padding: 10px;
	background: white;
	height: 80px;
`;

export const ProjectItemText = styled.p`
	font-size: 19px;
	font-weight: 500;
`;

export const ProjectItemSubText = styled.p`
	font-size: 14px;
	color: #808090;
`;
