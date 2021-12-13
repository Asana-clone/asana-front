import React from 'react';
import styled from 'styled-components';

interface AvatarProps {
	nickname: string;
	color: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
	const { nickname } = props;
	return (
		<>
			<AvatarCircle>{nickname.slice(0, 2)}</AvatarCircle>
		</>
	);
};

Avatar.defaultProps = {
	nickname: 'kyuung',
	color: '#DDA211',
};

const AvatarCircle = styled.div`
	background-color: ${(props) => props.color};
	width: 36px;
	height: 36px;
`;

export default Avatar;
