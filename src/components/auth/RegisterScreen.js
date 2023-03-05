import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
	return (
		<div className='form'>
			<h1 className='form__title'>Register</h1>
			<form className='form__container'>
				<label className="form__label" for="name">Name</label>
				<input
					id="name"
					type="text"
					name="name"
					className="form__input"
					autoComplete="off"
				/>
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
					name="password-one"
					className="form__input"
					autoComplete="off"
				/>
				<label className="form__label" for="password">Confirm password</label>
				<input
					id="password"
					type="password"
					name="password-two"
					className="form__input"
					autoComplete="off"
				/>
				<div className='form__footer'>
					<Link to="/auth/login">Already registered?</Link>
					<button type="submit" className="form__button form__button--secondary">
					    Register
					</button>
				</div>
			</form>
		</div>
	);
};