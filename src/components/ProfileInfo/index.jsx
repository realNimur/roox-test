import React from 'react';
import Input from '../Input';
import Textarea from '../Textarea';
import styles from './styles.module.scss';

const ProfileInfo = ({ userParam, setUserParam, comment, setComment, readOnly }) => {
	return (
		<div className={styles['profile-info']}>
			{Object.entries(userParam).map(([param, value]) => {
				return <Input readOnly={readOnly} id={param} key={param} name={param} value={value}
											setUserParam={setUserParam} />;
			})}
			<Textarea readOnly={readOnly} comment={comment} setComment={setComment} name="comment" id={'comment'} />
		</div>
	);
};

export default ProfileInfo;