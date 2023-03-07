import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValue, handleInputChange] = useForm({
		email: 'delmontelucas678@gmail.com',
		password: '123456',
	});

	const { email, password } = formValue;

	const handleLogin = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startLoginEmailPassword(email, password));
			console.log('Correct form');
		}
	};

	const isFormValid = () => {
		if (!validator.isEmail(email)) {
			console.log('Email is not invalid');
			return false;
		} else if (password.length < 5) {
			console.log('Password should be at least 6 characters');
			return false;
		}

		return true;
	};

	return (
		<div className='container'>
			<div className='form'>
				<h1 className='form__title'>Login</h1>
				<form className='form__container' onSubmit={handleLogin}>
					<label className="form__label" for="email">Email</label>
					<input
						id="email"
						type="text"
						name="email"
						className="form__input"
						autoComplete="off"
						onChange={handleInputChange}
						value={email}
					/>
					<label className="form__label" for="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						className="form__input"
						autoComplete="off"
						onChange={handleInputChange}
						value={password}
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