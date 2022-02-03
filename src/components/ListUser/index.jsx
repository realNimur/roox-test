import React, { useContext, useEffect, useState } from 'react';
import UserItem from '../UserItem';
import axios from 'axios';
import styles from './styles.module.scss';
import Loader from '../Loader';
import { SortContext } from '../AppRoute';

const ListUser = () => {
	const { sort } = useContext(SortContext);
	const [userList, setUserList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(function (response) {
				setUserList(response.data);
			})
			.catch(function (error) {
				alert(error);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);

	const sortFn = (param) => {
		let paramString = param === 'city' ? ['address', 'city'] : ['company', 'name'];
		const sortedList = userList.slice().sort((a, b) =>
			a[paramString[0]][paramString[1]].localeCompare(b[paramString[0]][paramString[1]])
		);
		setUserList(sortedList);
	};

	useEffect(() => {
		sortFn(sort);
	}, [sort]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={styles['list-user']}>
			<h3 className={styles['list-user__caption']}>Список пользователей</h3>
			{
				userList.map((user) => {
					const { id, name, address: { city }, company: { name: company } } = user;
					return <UserItem key={id} id={id} company={company} city={city} fullName={name} />;
				})
			}
			<p className={styles['list-user__sign']}>Найдено {userList.length} пользователей</p>
		</div>
	);
};

export default ListUser;