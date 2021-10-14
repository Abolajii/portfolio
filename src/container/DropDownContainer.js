import React, { useContext } from 'react';
import { DropDown, DropdownSwitch } from '../components';

import { ThemeContext } from '../context/ThemeContext';

const data = [
	{ id: 1, title: 'Home', link: 'home', offset: -80 },
	{ id: 2, title: 'About', link: 'about', offset: -40 },
	{ id: 3, title: 'Services', link: 'services', offset: -90 },
	{ id: 4, title: 'Projects', link: 'project', offset: -70 },
	{ id: 5, title: 'Contact', link: 'contact', offset: -60 },
];

const DropDownContainer = ({ isOpen, setIsOpen }) => {
	const { isDark, setIsDark } = useContext(ThemeContext);
	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: {
				type: 'spring',
				duration: 0.5,
			},
			display: 'block',
		},
		exit: {
			opacity: 0,
			rotateX: 15,
			transition: {
				duration: 0.5,
				delay: 0,
			},
			transitionEnd: {
				display: 'none',
			},
		},
	};

	return (
		<DropDown
			initial='exit'
			animate={isOpen ? 'enter' : 'exit'}
			variants={subMenuAnimate}
			isOpen={isOpen}>
			<DropDown.Inner>
				{data.map((item) => {
					return (
						<DropDown.LinkItem key={item.id}>
							<DropDown.Link
								onClick={() => setIsOpen(!isOpen)}
								smooth={true}
								offset={item.offset}
								to={item.link}>
								{item.title}
							</DropDown.Link>
						</DropDown.LinkItem>
					);
				})}
				<DropdownSwitch>
					<DropdownSwitch.Inner isDark={isDark}>
						<DropdownSwitch.BallSwitch
							isDark={isDark}
							onClick={() => setIsDark(!isDark)}
						/>
					</DropdownSwitch.Inner>
				</DropdownSwitch>
			</DropDown.Inner>
		</DropDown>
	);
};

export default DropDownContainer;
