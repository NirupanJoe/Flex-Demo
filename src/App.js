import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import FlexDemo from './components/flexDemo';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{FlexDemo()}
		</div>
	);
};

export default App;
