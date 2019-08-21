import React from 'react';
import { Navbar } from './components/Navbar'
import {
	DatePicker
} from 'antd';

import './App.scss';

function App() {
	return (<div className="App" >
		<header className="App-header">
			<div className="App-logo"></div>
			<div className="App-logo App_logo"></div>
			<Navbar></Navbar>
		</header >
		<article>
			<DatePicker></DatePicker>
			<h2>ლ(′◉❥◉｀ლ)</h2>
		</article>
	</div>
	);
}

export default App;
