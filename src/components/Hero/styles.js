import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	top: 70px;
	padding: 70px 30px;

	background: ${({ isDark }) => (isDark ? '#28b5b5' : '#00ffff')};

	position: relative;
	transition: background 0.4s ease;

	@media (max-width: 704px) {
		padding-top: 130px;
		padding-bottom: 130px;
		/* background: red; */
	}
`;

export const Inner = styled.div`
	/* background: red; */
	max-width: 900px;
	position: relative;
	margin: auto;
	display: flex;
	/* padding: 50px 20px; */
	border-radius: 20px;
	justify-content: space-between;
	margin-bottom: 50px;
	box-shadow: 1px 0px 9px 8px rgba(0, 0, 0, 0.18),
		0px 0px 9px 8px rgba(0, 0, 0, 0.12);

	@media (max-width: 900px) {
		max-width: 850px;
	}

	@media (max-width: 704px) {
		padding-bottom: 0px;
		max-width: 600px;
		margin: auto;
	}
`;

export const ImageContainer = styled.div`
	/* height: 320px; */
	/* background: blue; */
	border-radius: 20px;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 837px) {
		font-size: 40px;
		/* width: 0%; */
		/* width: 45%; */
	}

	@media (max-width: 704px) {
		height: 250px;
		width: 250px;
		/* background: hotpink; */
		position: absolute;
		top: 0;
		left: 50%;
		right: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}
`;

export const Image = styled.div`
	height: 300px;
	width: 300px;
	background: cyan;
	border-radius: 50%;

	@media (max-width: 704px) {
		height: 220px;
		width: 220px;
	}

	@media (max-width: 400px) {
		height: 200px;
		width: 200px;
	}
`;

export const TextContainer = styled.div`
	width: 50%;
	/* margin-right: 10px; */
	/* background: salmon; */
	/* padding: 20px; */
	@media (max-width: 960px) {
	}

	@media (max-width: 704px) {
		margin-top: 100px;
		text-align: center;
		width: 100%;
	}
`;

export const Title = styled.h2`
	/* background: chartreuse; */
	font-size: 40px;
	line-height: 1.4;
	padding: 0px 20px;
	margin-top: 20px;
	letter-spacing: 1px;
	/* padding-right: 20px; */

	@media (max-width: 960px) {
		font-size: 35px;
		/* background: hotpink; */
		padding-right: 0;
	}

	@media (max-width: 816px) {
		font-size: 35px;
		padding-right: 0;
	}

	@media (max-width: 704px) {
		/* width: ; */
		/* background: hotpink; */
	}

	@media (max-width: 400px) {
		/* width: ; */
		/* background: hotpink; */
		padding: 0;
		font-size: 34px;
	}
`;

export const Text = styled.p`
	line-height: 1.9;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.7px;
	display: flex;
	align-items: center;

	/* padding: 0 20px; */
	.icon {
		padding-right: 5px;
		font-size: 27px;
	}

	@media (max-width: 704px) {
		display: flex;
		justify-content: flex-start;
		/* padding-left: 59px; */
	}
`;

export const SmallText = styled.p`
	line-height: 1.5;
	/* background: silver; */
	/* padding-left: 7px; */
	font-size: 30px;
	font-weight: 550;

	padding: 0 20px;

	@media (max-width: 816px) {
		font-size: 27px;
		padding-left: 20px;
		/* background: hotpink; */
		/* padding-right: 0; */
	}

	@media (max-width: 400px) {
		/* width: ; */
		/* background: hotpink; */
		padding: 0;
		font-size: 25px;
	}
`;

export const LogoContainer = styled.div`
	/* background: honeydew; */
	margin-bottom: 20px;

	padding: 0 20px;
	display: flex;
	flex-direction: column;
	text-align: center;

	&:last-of-type {
		flex-direction: row;
		display: flex;
		align-items: center;
		height: 160px;

		padding: 0 20px;
		@media (max-width: 704px) {
			display: flex;
			justify-content: center;
			height: 90px;
		}
	}

	@media (max-width: 704px) {
		display: flex;
		justify-content: center;
		/* background: cornsilk; */
		/* margin-top: 100px; */
		/* text-align: center; */
		max-width: 350px;
		margin: auto;
		padding-left: 40px;
	}
`;

export const Logo = styled.div`
	margin-right: 20px;
	/* background: brown; */
`;

export const MiddleContainer = styled.div``;

export const MiddleLogo = styled.div``;
