import React, { useContext } from 'react';
import { Services } from '../components';
import { servicesData } from '../components/Services/data';

import be from '../components/Services/img/be.svg';
import fe from '../components/Services/img/fe.svg';
import db from '../components/Services/img/db.svg';
import { ThemeContext } from '../context/ThemeContext';

const ServicesContainer = () => {
	const { isDark } = useContext(ThemeContext);

	const renderCards = () => {
		return servicesData.map((item) => {
			return (
				<Services.OuterBox isDark={isDark} key={item.id}>
					<Services.Box isDark={isDark}>
						<Services.ImageDiv>
							<Services.Image
								src={item.id === 1 ? fe : item.id === 2 ? be : db}
								alt={item.alt}
							/>
						</Services.ImageDiv>

						<Services.Title>{item.title}</Services.Title>
						<Services.SubTitle>{item.subTitle1}</Services.SubTitle>
						<Services.SubTitle>{item.subTitle2}</Services.SubTitle>
					</Services.Box>
				</Services.OuterBox>
			);
		});
	};
	return (
		<Services id='services' isDark={isDark}>
			<Services.Inner>
				<Services.UpperDiv>
					<Services.IconDiv isDark={isDark}>
						<Services.Icon />
					</Services.IconDiv>
					<Services.Text isDark={isDark}>Services</Services.Text>
				</Services.UpperDiv>

				<Services.CardBox>{renderCards()}</Services.CardBox>
			</Services.Inner>
		</Services>
	);
};

export default ServicesContainer;
