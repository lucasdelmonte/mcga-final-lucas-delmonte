import React from 'react';

const Header = (props) => {
	return (
		<header className="header">
			<div className="header__logo">	
				<h4 className="header__text">Teraflop Computacion</h4>
			</div>
			<div className="header__information">	
				<h4 className="header__text">03/05/2023</h4>
			</div>
		</header>
	);
};

export default Header;