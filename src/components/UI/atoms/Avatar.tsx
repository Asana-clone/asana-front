import React from 'react';

interface AvatarProps {
	nickname: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
	const { nickname } = props;
	return (
		<>
			<div>{nickname.slice(0, 2)}</div>
		</>
	);
};

Avatar.defaultProps = {
	nickname: 'kyuung',
};

export default Avatar;
