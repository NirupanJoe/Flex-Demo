import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import FlexSelect from './components/flexSelect';
import FlexBox from './components/flexBox';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{ FlexSelect() }
			{ FlexBox() }
		</div>
	);
};

export default App;
