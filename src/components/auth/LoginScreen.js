import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValue, handleInputChange] = useForm({
		email: 'delmontelucas678@gmail.com',
		password: '123456',
	});

	const { email, password } = formValue;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	return (
		<div className='container' onSubmit={handleLogin}>
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