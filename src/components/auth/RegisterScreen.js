import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
	const [formValue, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formValue;

	const handleRegister = (e) => {
		e.preventDefault();
		console.log(name, email, password, password2);
	};

	return (
		<div className='container'>
			<div className='form'>
				<h1 className='form__title'>Register</h1>
				<form className='form__container' onSubmit={handleRegister}>
					<label className="form__label" for="name">Name</label>
					<input
						id="name"
						type="text"
						name="name"
						className="form__input"
						autoComplete="off"
						onChange={handleInputChange}
						value={name}
					/>
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
						name="password-one"
						className="form__input"
						autoComplete="off"
						onChange={handleInputChange}
						value={password}
					/>
					<label className="form__label" for="password">Confirm password</label>
					<input
						id="password"
						type="password"
						name="password-two"
						className="form__input"
						autoComplete="off"
						onChange={handleInputChange}
						value={password2}
					/>
					<div className='form__footer'>
						<Link to="/auth/login">Already registered?</Link>
						<button type="submit" className="form__button form__button--secondary">
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};