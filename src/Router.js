import React, { Component } from 'react';
import {
	HashRouter,
	BrowserRouter,
	Switch,
	Route,
	Router,
	Link,
	withRouter
} from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './App';
import Home from './view/Home';
import About from './view/About';
class BasicRouter extends Component {
	constructor(props) {
		super(props);
		console.log(this)
	};

	render() {
		return (
			<BrowserRouter>
				<Navbar nav={this.props}></Navbar>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/index" component={App} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/about" component={About} />
				</Switch >
			</BrowserRouter>
		)
	}

}
export default BasicRouter;
