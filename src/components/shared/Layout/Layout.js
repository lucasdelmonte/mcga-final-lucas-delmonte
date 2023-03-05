import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Section from '../Section/Section';

import { Sidebar } from '../Sidebar/Sidebar';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<aside class="sidebar">
				<Sidebar />
			</aside>
			<section class="section">
				<Section container={children} />
			</section>
			<Footer />
		</>
	);
};