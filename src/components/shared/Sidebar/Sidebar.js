import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../../actions/auth';

export const Sidebar = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<>
			<div className="sidebar__links">
				<NavLink to="/private/home" className="sidebar__link">
					<h3>Home</h3>
				</NavLink>
				<NavLink to="/private/products" className="sidebar__link">
					<h3>Products</h3>
				</NavLink>
			</div>
			<button className="sidebar__button" onClick={handleLogout}>Logout</button>
		</>
	);
};