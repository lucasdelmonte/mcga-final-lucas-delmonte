import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/auth/login" component={LoginScreen} />
				<Route path="/auth/register" component={RegisterScreen} />
				<Navigate to="/auth/login" />
			</Routes>
		</div>
	);
};