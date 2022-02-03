import React, { useEffect, useState } from 'react';
import Button from '../Button';
import ProfileInfo from '../ProfileInfo';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.scss';
import Loader from '../Loader';

const Profile = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [comment, setComment] = useState('');
	const [userParam, setUserParam] = useState({});
	const [readOnly, setReadOnly] = useState(true);

	const validateQuery = (obj) => {
		const array = Object.values(obj);
		for (let i = 0; i < array.length; i++) {
			if (array[i] === '') {
				return false;
			}
		}
		return true;
	};

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => {
				const { name, username, email, address: { street, city, zipcode }, phone, website } = res.data;
				setUserParam({
					name,
					username,
					email,
					street,
					city,
					zipcode,
					phone,
					website,
				});
			})
			.catch((e) => {
				alert(e.message);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={styles['profile']}>
			<div className={styles['profile-header']}>
				<h3 className={styles['profile-caption']}>Профиль пользователя</h3>
				<Button
					variant={'blue'}
					onClick={() => {
						setReadOnly(!readOnly);
					}}
				>
					Редактировать
				</Button>
			</div>
			<ProfileInfo
				readOnly={readOnly}
				userParam={userParam}
				setUserParam={setUserParam}
				comment={comment}
				setComment={setComment}
			/>
			<div className={styles['profile-footer']}>
				<Button
					variant={(readOnly) ? 'disabled' : 'green'}
					onClick={() => {
						const resJson = JSON.stringify({ ...userParam, comment });
						const isValidate = validateQuery(userParam);
						if (isValidate) {
							console.log(resJson);
						}
					}}
				>Отправить</Button>
			</div>
		</div>
	);
};

export default Profile;