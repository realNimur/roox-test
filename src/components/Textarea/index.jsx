import React from 'react';
import styles from './styles.module.scss';

const Textarea = ({ id, name, comment, setComment,...other }) => {
	return (
		<div className="">
			<label className={styles.label} htmlFor={id}>{name}</label>
			<br />
			<textarea
				className={styles.textarea}
				id={id}
				value={comment}
				{...other}
				onChange={(e) => setComment(e.target.value)}
			/>
		</div>
	);
};

export default Textarea;