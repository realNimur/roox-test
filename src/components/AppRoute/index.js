import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sort from '../Sort';
import { appRoutes } from '../../routes';
import styles from './styles.module.scss';


export const SortContext = createContext('');

const AppRoute = () => {
	const [sort, setSort] = useState('');
	return (
		<SortContext.Provider value={{ sort, setSort }}>
			<div className={styles.app}>
				<BrowserRouter>
					<Sort />
					<Routes>
						{
							appRoutes.map(({ url, Component }) =>
								<Route key={url} path={url} element={<Component />} />
							)
						}
					</Routes>
				</BrowserRouter>
			</div>
		</SortContext.Provider>
	);
};

export default AppRoute;