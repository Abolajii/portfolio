import styled from 'styled-components';

export const Container = styled.div`
	/* margin-bottom: 10px; */
	/* padding-bottom: 30px; */
`;

export const Inner = styled.div`
	background: ${({ isDark }) =>
		isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};

	width: 180px;
	height: 50px;
	transition: background 0.4s ease;
	border-radius: 30px;
	display: flex;
	align-items: center;
	padding: 0 5px;

	/* justify-content: flex-start; */
`;

export const BallSwitch = styled.div`
	height: 40px;
	width: 40px;
	transform: ${({ isDark }) =>
		isDark ? 'translateX(320%)' : 'translateX(0%)'};
	transition: transform 0.5s ease, background 0.4s ease;
	border-radius: 50%;
	/* background: #f0f1f6; */
	display: flex;
	background: ${({ isDark }) =>
		isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
`;
