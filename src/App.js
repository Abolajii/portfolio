import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Landingpage from './components/Landingpage';
import {
	HeaderContainer,
	HeroContainer,
	AboutContainer,
	DropDownContainer,
	ServicesContainer,
	ProjectContainer,
	ContactContainer,
	CopyrightsContainer,
} from './container';
import ThemeContextProvider from './context/ThemeContext';

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [fixed, setFixed] = useState(false);
	const [shownext, setShowNext] = useState(!false);

	const setFixedBlock = () => {
		setFixed(true);
		setShowNext(false);
	};

	const removeFixedBlock = () => {
		setFixed(false);
		setShowNext(true);
	};

	useEffect(() => {
		setFixedBlock();

		setTimeout(removeFixedBlock, 7000);
	}, []);
	return (
		<>
			<ThemeContextProvider>
				<Landingpage fixed={fixed} setFixed={setFixed} />

				{shownext && (
					<>
						<DropDownContainer setIsOpen={setIsOpen} isOpen={isOpen} />
						<HeaderContainer isOpen={isOpen} setIsOpen={setIsOpen} />
						<HeroContainer />
						<AboutContainer />
						<ServicesContainer />
						<ProjectContainer />
						<ContactContainer />
						<CopyrightsContainer />
					</>
				)}
			</ThemeContextProvider>
		</>
	);
};

export default App;
