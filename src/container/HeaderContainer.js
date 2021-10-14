import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';

import { Header } from '../components';
import { data } from '../components/Header/data';
import { Letter, Title } from '../components/Header/styles';
import { ThemeContext } from '../context/ThemeContext';

const HeaderContainer = ({ isOpen, setIsOpen }) => {
	const [active, setActive] = useState(null);
	const { isDark, setIsDark } = useContext(ThemeContext);
	const [nav, setNav] = useState(false);

	const [dropDown, setDropDown] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 706) {
				setNav(true);
			} else {
				setNav(false);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleClick = () => {
		setIsDark(!isDark);
	};

	return (
		<Header>
			<Header.Inner>
				<Header.LogoContainer>
					<Header.Logo>
						<Header.NavLink to='home' smooth={true} offset={-80}>
							<Title>
								<Letter>A</Letter>
								<Letter>B</Letter>
								<Letter>O</Letter>
								<Letter>L</Letter>
								<Letter>A</Letter>
								<Letter>J</Letter>
								<Letter>I</Letter>
							</Title>
						</Header.NavLink>
					</Header.Logo>
				</Header.LogoContainer>
				<Header.NavContainer>
					{data.map((item) => {
						return (
							<Header.NavLinkItem
								key={item.id}
								onMouseLeave={() => setActive(null)}
								onMouseEnter={() => setActive(item.id)}>
								<Header.NavLink
									smooth={true}
									offset={item.offset}
									to={item.link}>
									{item.title}
									<Header.UnderLine
										className={active === item.id && 'active'}
									/>
								</Header.NavLink>
							</Header.NavLinkItem>
						);
					})}
				</Header.NavContainer>
				{nav && (
					<Header.Hamburger
						size={32}
						easing='ease-in'
						toggle={setIsOpen}
						toggled={isOpen}
					/>
				)}

				{!nav && (
					<Header.Switch>
						<Header.SwitchButton>
							<Header.DropDownIcon
								dropdown={dropDown}
								onClick={() => setDropDown(!dropDown)}
							/>
						</Header.SwitchButton>
						<AnimatePresence initial={false}>
							{dropDown && (
								<Header.DropDown
									initial={{
										opacity: 0,
										x: 0,
										y: 0,
									}}
									animate={{
										opacity: 1,
										x: 0,
										y: 15,
										transition: {
											type: 'spring',
											damping: 30,
											duration: 0.6,
										},
									}}
									exit={{
										opacity: 0,
										x: 0,
										y: 10,
										transition: {
											duration: 0.6,
											delay: 0.1,
										},
									}}>
									<Header.SwitchContainer>
										<Header.SwitchBall onClick={handleClick} isDark={isDark} />
									</Header.SwitchContainer>
								</Header.DropDown>
							)}
						</AnimatePresence>
					</Header.Switch>
				)}
			</Header.Inner>
		</Header>
	);
};

export default HeaderContainer;
