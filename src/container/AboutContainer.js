import React, { useContext } from 'react';
import { About } from '../components';
import { ThemeContext } from '../context/ThemeContext';

const AboutContainer = () => {
	const { isDark } = useContext(ThemeContext);

	return (
		<About id='about' isDark={isDark}>
			<About.Inner isDark={isDark}>
				<About.TextContainer>
					<About.Text>
						Hello 👋! I’m AdeAjayi Abolaj
						<span>i</span>, Full Stack Developer with 1+ years of experience in
						all stages of the development cycle for dynamic web projects in
						Point of Sale, E-Commerce and Financial Services. Have in-depth
						knowledge in advanced NodeJS, ReactJS, ExpressJS, MongoDB, HTML5,
						CSS3, JavaScript, ES6, jQuery, Bootstrap, Material UI, Restful API
						and Services.
					</About.Text>
				</About.TextContainer>
				<About.TextContainer>
					<About.Text>
						I am a motivated individual who likes to learn new things and is a
						quick learner. I am very passionate and enthusiastic about creating
						constructive and efficient solutions. I believe that having an open
						mind can help you remain creative and grasp ideas from any subject
						to implement it in your field!
					</About.Text>
				</About.TextContainer>

				<About.BtnContainer>
					<About.Button>CONTACT</About.Button>
				</About.BtnContainer>
			</About.Inner>
		</About>
	);
};

export default AboutContainer;
