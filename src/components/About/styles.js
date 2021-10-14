import styled, { css } from 'styled-components';

export const Container = styled.div`
	position: relative;
	top: 0px;
	padding-top: 100px;
	padding-bottom: 30px;
	background: ${({ isDark }) => (isDark ? '#16161d' : '#fff')};
	transition: background 0.4s ease;

	@media (max-width: 600px) {
		padding-top: 20px;
	}
`;

export const Inner = styled.div`
	/* background: red; */
	/* max-width: 1100px;
	margin: auto;
	padding: 10px;

	box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.7); */

	margin: 30px auto;
	margin-top: 20px;
	max-width: 1090px;
	padding: 10px 20px;
	/* height: 100%; */
	line-height: 1.8;
	color: #000;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
	${({ isDark }) =>
		isDark &&
		css`
			color: #999;
			box-shadow: -1px 1px 8px 3px rgba(255, 255, 255, 0.2);
		`}
	@media (max-width: 1090px) {
		margin-left: 20px;
		margin-right: 20px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px 0;
`;

export const Btn = styled.button`
	padding: 10px 12px;
	text-transform: uppercase;
	font-size: 19px;
	color: black;
	color: #fefefe;
	background: #e94560;

	transition: border 0.3s ease, background 0.5s ease;
	border: 1px solid transparent;
	cursor: pointer;
	outline: none;
	&:hover {
		background: #16161d;
		background-color: white;
		border: 1px solid #e94560;
		color: #e94560;
	}
`;

export const TextContainer = styled.div`
	height: 30%;
	padding: 15px 0;
	margin-top: 20px;

	span {
		color: #e94560;
		font-size: 1.275rem;
	}

	&:not(:last-of-type) {
		margin-bottom: 10px;
	}
`;

export const Text = styled.p`
	font-size: 1.275rem;
`;
