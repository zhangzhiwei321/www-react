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
				<a className="record" href="http://beian.miit.gov.cn/?token=72a719e6-69e0-4a1f-8c46-82fd767bc80c">京ICP备18046886号-1</a>
			</div>
		);
	};

}

export default withRouter(App);
