import React, { useState } from 'react';
import styles from './styles.module.scss';

const Input = ({ id, name, value, setUserParam, ...other }) => {
	const [inputValue, setInputValue] = useState(value);
	return (
		<div className={styles['input-wrapper']}>
			<label className={styles.label} htmlFor={id}>{name}</label>
			<br />
			<input
				className={`${styles.input} ${inputValue.length === 0 ? styles['input_error'] : ''}`}
				id={id}
				{...other}
				type="text"
				value={inputValue}
				onChange={(e) => {
					const currentValue = e.target.value;
					setUserParam((prevState) => {
						return {
							...prevState,
							[name]: currentValue
						};
					});
					setInputValue(currentValue);
				}}
			/>
		</div>
	);
};

export default Input;