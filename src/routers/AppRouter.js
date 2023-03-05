import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Routes
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { MainScreen } from '../components/main/MainScreen';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/auth" component={<AuthRouter/>} />
					<Route exact path="/" component={<MainScreen/>} />
					<Redirect to="/auth/login" />
				</Routes>
			</div>
		</Router>
	);
};