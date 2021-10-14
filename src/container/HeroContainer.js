import React, { useContext } from 'react';
import { Hero } from '../components';
import { SocialIcon } from 'react-social-icons';
import { MdLocationOn, MdMessage } from 'react-icons/md';
import { ThemeContext } from '../context/ThemeContext';

const HeroContainer = () => {
	const { isDark } = useContext(ThemeContext);
	return (
		<Hero id='home' isDark={isDark}>
			<Hero.Inner>
				<Hero.TextContainer>
					<Hero.Title>Ade-Ajayi Abolaji</Hero.Title>
					<Hero.SmallText>FullStack Developer</Hero.SmallText>
					<Hero.LogoContainer>
						<Hero.Text>
							<MdMessage className='icon' />
							Abolajiadejayi@gmail.com
						</Hero.Text>
						<Hero.Text>
							<MdMessage className='icon' />
							Github
						</Hero.Text>
						<Hero.Text>
							<MdLocationOn className='icon' />
							Lagos, Nigeria
						</Hero.Text>
					</Hero.LogoContainer>

					<Hero.LogoContainer>
						<Hero.Logo>
							<SocialIcon url='https://twitter.com/al_ameeen_' />
						</Hero.Logo>
						<Hero.Logo>
							<SocialIcon url='https://linkedin.com' />
						</Hero.Logo>
						<Hero.Logo>
							<SocialIcon url='https://github.com/Abolajii' />
						</Hero.Logo>
					</Hero.LogoContainer>
				</Hero.TextContainer>
				<Hero.ImageContainer>
					<Hero.Image />
				</Hero.ImageContainer>
			</Hero.Inner>
		</Hero>
	);
};

export default HeroContainer;
