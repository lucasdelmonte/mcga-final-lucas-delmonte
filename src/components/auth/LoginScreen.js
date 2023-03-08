import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);

	const [formValue, handleInputChange] = useForm({
		email: 'delmontelucas678@gmail.com',
		password: '123456',
	});

	const { email, password } = formValue;

	const handleLogin = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startLoginEmailPassword(email, password));
		}
	};

	const isFormValid = () => {
		if (!validator.isEmail(email)) {
			dispatch(setError('Email is not invalid'));
			return false;
		} else if (password.length < 5) {
			dispatch(setError('Password should be at least 6 characters'));
			return false;
		}

		dispatch(removeError());
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
					{msgError && <div className="form__error">{msgError}</div>}
				</form>
			</div>
		</div>
	);
};