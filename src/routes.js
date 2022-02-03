import Main from './pages/Main';
import User from './pages/User';

export const MAIN_ROUTE = '/';
export const USER_ROUTE = '/user/:id';

export const appRoutes = [
	{
		url: MAIN_ROUTE,
		Component: Main
	},
	{
		url: USER_ROUTE,
		Component: User
	},
];