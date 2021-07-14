import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import FlexSelect from './components/flexSelect';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div>Count: { FlexSelect() }</div>
		</div>
	);
};

export default App;
