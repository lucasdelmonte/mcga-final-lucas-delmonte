import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
	return (
		<div className='container'>
			<div className='form'>
				<h1 className='form__title'>Login</h1>
				<form className='form__container'>
					<label className="form__label" for="email">Email</label>
					<input
						id="email"
						type="text"
						name="email"
						className="form__input"
						autoComplete="off"
					/>
					<label className="form__label" for="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						className="form__input"
						autoComplete="off"
					/>
					<div className='form__footer'>
						<Link to="/auth/register">Create new account</Link>
						<button type="submit" className="form__button form__button--secondary">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};