import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Contact } from '../components/index';
import Map from './MapContainer';

const ContactContainer = () => {
	const { isDark } = useContext(ThemeContext);

	return (
		<Contact id='contact' isDark={isDark}>
			<Contact.Inner>
				<Contact.UpperDiv>
					<Contact.IconDiv>
						<Contact.Icon />
					</Contact.IconDiv>
					<Contact.Text>CONTACT</Contact.Text>
				</Contact.UpperDiv>
				<Contact.Grid>
					<Contact.Form>
						<Contact.InputDiv>
							<Contact.Input
								isDark={isDark}
								type='text'
								required
								onClick={() => {}}
							/>
							<Contact.InputLabel isDark={isDark}>Name</Contact.InputLabel>
							<Contact.Animation />
						</Contact.InputDiv>
						<Contact.InputDiv>
							<Contact.Input
								isDark={isDark}
								type='text'
								required
								onClick={() => {}}
							/>
							<Contact.InputLabel isDark={isDark}>Subject</Contact.InputLabel>
							<Contact.Animation />
						</Contact.InputDiv>
						<Contact.InputDiv>
							<Contact.Input
								isDark={isDark}
								type='email'
								required
								onClick={() => {}}
							/>
							<Contact.InputLabel isDark={isDark}>Email</Contact.InputLabel>
							<Contact.Animation />
						</Contact.InputDiv>
						<Contact.InputDiv ta>
							<Contact.TextArea
								isDark={isDark}
								type='text'
								required
								onClick={() => {}}
							/>
							<Contact.InputLabel isDark={isDark} ta>
								Message
							</Contact.InputLabel>
							<Contact.Animation />
						</Contact.InputDiv>
						<Contact.Button>SEND</Contact.Button>{' '}
					</Contact.Form>
					<Contact.Map>
						<Map />
					</Contact.Map>
				</Contact.Grid>
			</Contact.Inner>
		</Contact>
	);
};

export default ContactContainer;
