import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import { Copyrights, Hero } from '../components';
import { ThemeContext } from '../context/ThemeContext';

const Text = styled.p`
	text-align: center;
`;

const CopyrightsContainer = () => {
	const date = new Date();

	const year = date.getFullYear();

	const { isDark } = useContext(ThemeContext);

	return (
		<Copyrights isDark={isDark}>
			<Copyrights.Inner>
				<Hero.Logo>
					<SocialIcon url='https://twitter.com/al_ameeen_' />
				</Hero.Logo>
				<Hero.Logo>
					<SocialIcon url='https://linkedin.com' />
				</Hero.Logo>
				<Hero.Logo>
					<SocialIcon url='https://github.com/Abolajii' />
				</Hero.Logo>
			</Copyrights.Inner>
			<Text> &copy; Copyrights {year} created by ABOLAJI</Text>
		</Copyrights>
	);
};

export default CopyrightsContainer;
