import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);

	const [formValue, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formValue;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			console.log('Formulario correcto');
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not invalid'));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError('Email is not invalid'));
			return false;
		}

		dispatch(removeError());
		return true;
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
						id="passwordTwo"
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
					{msgError && <div className="form__error">{msgError}</div>}
				</form>
			</div>
		</div>
	);
};