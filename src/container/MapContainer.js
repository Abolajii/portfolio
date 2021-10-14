import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
	// const location = {
	// 	latitude: 12.8,
	// 	longitude: 29.9,
	// 	width: '100vw',
	// 	height: '100vh',
	// 	zoom: 10,
	// };

	const Map = ReactMapboxGl({
		accessToken:
			'pk.eyJ1IjoiZGV2dmJqIiwiYSI6ImNrcWd0b3JyeDAwNjUydmtjeWVpZmVkbnEifQ.4DkoWJbFuQKIJWrSnSt0Dw',
	});

	return (
		<Map
			style={`mapbox://styles/devvbj/ckqguw7390haa17pfo3ks192n`}
			containerStyle={{
				height: '100%',
				width: '100%',
			}}>
			<Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
				<Feature coordinates={[-0.48, 51.32]} />
			</Layer>
		</Map>
	);
};

export default Map;
