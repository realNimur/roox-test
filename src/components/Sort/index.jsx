import React, { useContext, useEffect } from 'react';
import Button from '../Button';
import styles from './styles.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { SortContext } from '../AppRoute';

const Sort = () => {
	const { setSort } = useContext(SortContext);
	const { pathname } = useLocation();

	return (
		<div className={styles.sort}>
			<p className={styles['sort__text']}>Сортировка</p>
			<Button variant={'blue'} onClick={() => setSort('city')}>по городу</Button>
			<Button variant={'blue'} onClick={() => setSort('company')}>по компании</Button>
		</div>
	);
};

export default Sort;