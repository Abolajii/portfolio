import styled, { css } from 'styled-components';
import { SiReactos } from 'react-icons/si';

export const Container = styled.div`
	/* height: 100vh; */

	background: ${({ isDark }) => (isDark ? '#111110' : '#E3E3E3')};
	transition: background 0.4s ease;
	position: relative;
	top: 0px;
	padding: 20px;
	padding-bottom: 150px;
`;

export const Inner = styled.div`
	max-width: 1150px;
	margin: auto;
	height: 100%;
	/* background: red; */
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

export const Grid = styled.div`
	display: grid;
	gap: 50px;
	grid-template-columns: repeat(2, 1fr);
	/* grid-template-rows: auto; */
	margin-top: 40px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 0.9fr);
		justify-content: center;
	}
`;

export const Form = styled.form`
	box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
	height: 500px;
`;

export const Input = styled.input`
	height: 50px;
	width: 100%;
	border: none;
	outline: none;
	background: none;
	font-size: 16px;
	/* color: #777; */
	color: ${({ isDark }) => (isDark ? '#777' : '#000')};
`;

export const TextArea = styled.textarea`
	height: 83px;
	width: 100%;
	outline: none;
	border: none;
	background: none;
	color: ${({ isDark }) => (isDark ? '#777' : '#000')};
	font-size: 16px;
	padding-top: 20px;
`;

export const InputLabel = styled.label`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	transform: translateY(25px);

	pointer-events: none;
	height: 100%;
	transition: all 0.6s ease;
	font-size: 13px;
	font-weight: 450;
	color: ${({ isDark }) => (isDark ? '#777' : '#000')};
	${({ ta }) =>
		ta &&
		css`
			transform: translateY(57px);
		`}
	${Input}:focus ~& {
		transform: translateY(0px);

		color: #e94661;
		font-size: 12px;
	}
	${Input}:valid ~ & {
		transform: translateY(0px);
		color: #e94661;
		font-size: 12px;
	}

	${TextArea}:focus ~ & {
		transform: translateY(0px);

		color: #e94661;
		font-size: 12px;
	}
	${TextArea}:valid ~ & {
		transform: translateY(0px);
		color: brown;
		font-size: 12px;
	}
`;

export const Animation = styled.div`
	position: absolute;
	background: grey;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3.5px;

	&:after {
		content: '';
		position: absolute;
		background: #e94661;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3.5px;
		transition: all 0.6s;
		transform: scale(0);
	}
	${Input}:focus ~ &:after, ${Input}:valid ~ &:after {
		transform: scale(1);
	}
	${TextArea}:focus ~ &:after, ${TextArea}:valid ~ &:after {
		transform: scale(1);
	}
`;

export const InputDiv = styled.div`
	height: 50px;

	position: relative;
	margin: 20px;
	/* margin-bottom: 20px;
	margin-left: 10px; */

	${({ ta }) =>
		ta &&
		css`
			height: 85px;
			margin-bottom: 40px;
		`}
`;

export const Button = styled.button`
	padding: 17px 12px;
	outline: none;
	border: none;
	width: 93%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 19px;
	background-color: #e94661;
	color: white;
	cursor: pointer;
	margin: auto;
`;

export const MapContainer = styled.div`
	height: 500px;
`;
