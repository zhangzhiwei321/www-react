import React from 'react';
import {
	HashRouter,
	BrowserRouter,
	Switch,
	Route,
	Router,
	HashHistory,
	Link
} from 'react-router-dom';
import App from './App';
const BasicRouter = () => ( <
	BrowserRouter >
	<
	Switch >
	<
	Route exact path = "/"
	component = {
		App
	}
	/> <
	Route exact path = "/app"
	component = {
		App
	}
	/> < /
	Switch > <
	/BrowserRouter>
)
export default BasicRouter
