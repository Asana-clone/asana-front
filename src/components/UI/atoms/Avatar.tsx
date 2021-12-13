import React from 'react';
import styled from '@emotion/styled';

interface AvatarProps {
	nickname: string;
	color: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
	const { nickname, color } = props;
	return (
		<>
			<AvatarCircle color={color}>{nickname.slice(0, 2)}</AvatarCircle>
		</>
	);
};

Avatar.defaultProps = {
	nickname: 'kyuung',
	color: '#DDA211',
};

const AvatarCircle = styled.div`
	width: 36px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.color};
	border-radius: 36px;
`;

export default Avatar;
