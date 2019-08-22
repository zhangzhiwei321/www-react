import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
	DatePicker
} from 'antd';

import './App.scss';

class App extends Component {

	constructor(props) {
		super(props);
		console.log(props)
	}
	render(h) {
		return (
			<div className="App" >
				<header className="App-header">
					<div className="App-logo"></div>
					<div className="App-logo App_logo"></div>
				</header >
				<article>
					{/* <DatePicker></DatePicker> */}
					<h2>ლ(′◉❥◉｀ლ)</h2>
				</article>
			</div>
		);
	};

}

export default withRouter(App);
