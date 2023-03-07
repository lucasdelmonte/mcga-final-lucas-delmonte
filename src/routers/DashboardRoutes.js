import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Products } from '../components/products/Products';
import { Layout } from '../components/shared/Layout/Layout';

export const DashboardRoutes = () => {
	return (
		<>
			<Switch>
				<Route path="/private/home">
					<Layout>
						<Home />
					</Layout>
				</Route>
				<Route path="/private/products">
					<Layout>
						<Products />
					</Layout>
				</Route>
			</Switch>
		</>
	);
};