import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const UserItem = ({ id, fullName, city, company }) => {
	return (
		<div className={styles['user-item']}>
			<p className={styles['user-item__value']}><span className={styles['user-item__param']}>ФИО:</span>{fullName}</p>
			<p className={styles['user-item__value']}><span className={styles['user-item__param']}>город:</span>{city}</p>
			<div className={styles['user-item__footer']}>
				<p className={styles['user-item__value']}><span className={styles['user-item__param']}>компания:</span>{company}
				</p>
				<Link to={`/user/${id}`} className={styles['user-item__link']}>Подробнее</Link>
			</div>
		</div>
	);
};

export default UserItem;