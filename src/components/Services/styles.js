import styled, { css } from 'styled-components';

import { SiReactos } from 'react-icons/si';

export const Container = styled.div`
	top: 0px;
	background: #16161d;
	transition: background 0.4s ease;
	background: ${({ isDark }) => (isDark ? '#16161d' : '#fff')};
	padding-bottom: 50px;
	position: relative;
	padding-left: 20px;
	/* background: darkblue; */
`;

export const Inner = styled.div`
	display: flex;
	padding: 10px;
	max-width: 1100px;
	margin: auto;
	flex-direction: column;
`;

export const CardBox = styled.div`
	padding-top: 80px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 854px) {
		padding-top: 20px;
		display: grid;

		grid-template-columns: repeat(2, 2fr);
	}

	@media (max-width: 590px) {
		grid-template-columns: repeat(1, 0.6fr);
		display: grid;
		justify-content: center;
	}
	@media (max-width: 400px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const OuterBox = styled.div`
	height: 370px;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	position: relative;
	z-index: 1;
	line-height: 1.5;

	margin-right: 20px;

	color: #00b8bb;

	box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
		inset -5px -5px 15px rgba(255, 255, 255, 0.1),
		5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);

	@media (max-width: 854px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		justify-content: center;
		:not(:last-of-type) {
			margin-top: 70px;
		}

		&:last-of-type {
			margin-top: 70px;
			transform: translate(50%);

			@media (max-width: 593px) {
				transform: translate(0%);
			}
		}
	}
`;

export const Box = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	border-radius: 10px;
	bottom: 15px;
	left: 15px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	z-index: -1;
	border: 1px solid #999;

	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	transition: box-shadow 1s, transform 0.5s;

	${({ isDark }) => {
		return (
			isDark &&
			css`
				border: 1px solid #333;
			`
		);
	}}
	&:hover {
		transform: translateY(-50px);
	}
`;

export const ImageDiv = styled.div`
	height: 100px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

export const Title = styled.h1`
	font-size: 20px;
	font-weight: 500;
	/* color: #519ca6; */
`;

export const SubTitle = styled.p`
	font-size: 16px;
`;

export const Image = styled.img`
	width: inherit;
`;

export const UpperDiv = styled.div`
	display: flex;
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
