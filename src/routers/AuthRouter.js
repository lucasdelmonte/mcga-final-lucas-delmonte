import React from 'react';
import { Redirect, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/auth/login" component={LoginScreen} />
				<Route path="/auth/register" component={RegisterScreen} />
				<Redirect to="/auth/login" />
			</Routes>
		</div>
	);
};