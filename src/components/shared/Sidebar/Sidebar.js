import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../../actions/auth';

export const Sidebar = () => {
	const { name } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(startLogout());
	};
	return (
		<>
			<h5 class="sidebar__title">Welcome {name}!</h5>
			<div>
				<NavLink to="/private/home" className="linkLight">
					<h3>Home</h3>
				</NavLink>
				<NavLink to="/private/products" className="linkLight">
					<h3>Products</h3>
				</NavLink>
			</div>
			<button class="sidebar__button" onClick={handleLogout}>Logout</button>
		</>
	);
};