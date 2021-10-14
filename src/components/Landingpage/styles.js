import styled from 'styled-components';

import { css, keyframes } from 'styled-components';

const dropDown = keyframes`
    0% {
transform: translate(calc(100% - 21px), calc(-7000% - 21px));
}
    100% {
transform: translate(calc(100% - 21px),calc(0% - 21px));

 }`;

const bounce = keyframes`
   0%, 100% {
transform: translate(calc(100% - 21px), calc(0% - 21px));
}
    70% {
transform: translate(calc(100% - 21px),calc(-510% - 21px));

 }
 `;

const dropDown1 = keyframes`
    0% {
transform: translate(calc(100% - 17px), calc(-7000% - 17px));
}
    100% {
transform: translate(calc(100% - 17px),calc(0% - 17px));

 }`;

const bounce1 = keyframes`
   0%, 100% {
transform: translate(calc(100% - 17px), calc(0% - 17px));
}
    70% {
transform: translate(calc(100% - 17px),calc(-510% - 17px));

 }
 `;

const dropDown2 = keyframes`
    0% {
transform: translate(calc(100% - 13px), calc(-7000% - 13px));
}
    100% {
transform: translate(calc(100% - 13px),calc(0% - 13px));

 }`;

const bounce2 = keyframes`
   0%, 100% {
transform: translate(calc(100% - 13px), calc(0% - 13px));
}
    70% {
transform: translate(calc(100% - 13px),calc(-510% - 13px));

 }
 `;

const dropDown3 = keyframes`
    0% {
transform: translate(calc(100% - 5px), calc(-12000% - 5px));
}
    100% {
transform: translate(calc(100% - 5px),calc(0% - 5px));

 }`;

const bounce3 = keyframes`
   0%, 100% {
transform: translate(calc(100% - 5px), calc(0% - 5px));
}
    70% {
transform: translate(calc(100% - 5px),calc(-510% - 5px));

 }
 `;

const generalStyles = css`
	max-width: 800px;
	height: 100vh;
	margin: auto;
`;

export const Box = styled.div`
	position: fixed;
	pointer-events: none;
	background: white;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: all 0.6s;
	z-index: 1000;
	overflow: hidden;
	transform: translateY(100%);

	&.show {
		transform: translateY(0%);
	}

	&.hide {
		transition-delay: 1s;
		transform: translateY(-100%);
	}
`;

export const Container = styled.div`
	${generalStyles}

	display: flex;
	align-items: center;
	justify-content: center;
	/* background: red; */
	letter-spacing: 3px;
	font-family: Arial, Helvetica, sans-serif;
	span {
		padding: 10px;
		font-size: 100px;
	}

	span:nth-child(3) {
		color: crimson;
	}

	span:nth-child(7) {
		position: relative;
	}
	span:nth-child(7):after {
		content: '';
		position: absolute;
		top: 0px;
		left: 0;
		border-radius: 50%;
		background: red;
		height: 30px;
		transition: all 0.9s ease;
		width: 30px;
		box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
		-webkit-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
		transform: translate(calc(100% - 21px), 0%);
		animation: ${dropDown} 3.3s ease 0s, ${bounce} 1.2s linear 3.1s infinite;
	}

	@media (max-width: 768px) {
		span {
			font-size: 80px;
			padding: 10px;
		}

		span:nth-child(7):after {
			content: '';
			position: absolute;
			top: 0px;
			left: 0;
			border-radius: 50%;
			background: red;
			height: 25px;
			transition: all 0.9s ease;
			width: 25px;
			box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			-moz-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			transform: translate(calc(100% - 17px), 0%);
			animation: ${dropDown1} 3.3s ease 0s, ${bounce1} 1.2s linear 3.1s infinite;
		}
	}

	@media (max-width: 519px) {
		span {
			font-size: 50px;
			padding: 10px;
		}

		span:nth-child(7):after {
			content: '';
			position: absolute;
			top: 0px;
			left: 0;
			border-radius: 50%;
			background: red;
			height: 20px;
			transition: all 0.9s ease;
			width: 20px;
			box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			-moz-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			transform: translate(calc(100% - 13px), -40%);
			animation: ${dropDown2} 3.3s ease 0s, ${bounce2} 1.2s linear 3.1s infinite;
		}
	}

	@media (max-width: 393px) {
		span {
			font-size: 30px;
			padding: 10px;
		}

		span:nth-child(7):after {
			content: '';
			position: absolute;
			top: 0px;
			left: 0;
			border-radius: 50%;
			background: red;
			height: 13px;
			transition: all 0.9s ease;
			width: 13px;
			box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			-moz-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
			transform: translate(calc(100% - 5px), -20%);
			animation: ${dropDown3} 3.3s ease 0s, ${bounce3} 1.2s linear 3.1s infinite;
		}
	}
`;
