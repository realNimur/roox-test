import React from 'react';
import styles from './styles.module.scss';

const Button = ({ children, variant, ...other }) => {
	const classes = variant ? styles[`button_${variant}`] : '';
	return (
		<button type="button" disabled={variant === 'disabled'}
						className={`${styles.button} ${classes}`} {...other}>{children}</button>
	);
};

export default Button;