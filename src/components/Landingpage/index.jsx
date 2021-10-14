import { Box, Container } from './styles';
import { Zoom } from 'react-reveal';

const Landingpage = ({ fixed }) => {
	return (
		<Box className={fixed ? 'show' : 'hide'}>
			<Container>
				<Zoom top cascade when={fixed}>
					<span>ABOLAJI</span>
				</Zoom>
			</Container>
		</Box>
	);
};

export default Landingpage;
