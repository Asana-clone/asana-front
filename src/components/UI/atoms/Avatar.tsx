import React from 'react';
import styled from '@emotion/styled';

interface AvatarProps {
	color: string;
	size?: string;
	children: string;
}

const Avatar: React.FC<AvatarProps> = ({ children, color, size }) => {
	const nickname = children.slice(0, 2);
	return (
		<>
			<AvatarCircle color={color} size={size}>
				{nickname}
			</AvatarCircle>
		</>
	);
};

Avatar.defaultProps = {
	children: 'kyuung',
	color: '#DDA211',
	size: '36px',
};

const AvatarCircle = styled('div')<AvatarProps>`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.color};
	border-radius: 36px;
	cursor: pointer;
`;

export default Avatar;
