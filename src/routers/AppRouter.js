import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { login } from '../actions/auth';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLoggedIn]);

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={AuthRouter} />

					<PrivateRoute
						isAuthenticated={isLoggedIn}
						path="/private"
						component={DashboardRoutes}
					/>

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};