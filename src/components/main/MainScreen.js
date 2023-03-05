import React from 'react';
import { Sidebar } from '../shared/Sidebar/Sidebar';

export const MainScreen = () => {
	return (
		<>
			<div className="main__content">
				<Sidebar />

				<main>
					<h1>Main content</h1>
				</main>
			</div>
		</>
	);
};