import styled from 'styled-components';

export const Container = styled.div`
	height: 150px;
	background: ${({ isDark }) => (isDark ? '#444' : '#ccc')};

	transition: background 0.5s ease;
	position: relative;
`;

export const Inner = styled.div`
	display: flex;
	padding: 20px;
	align-items: center;
	justify-content: center;
`;
