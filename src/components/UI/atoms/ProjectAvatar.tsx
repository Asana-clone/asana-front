import React from 'react';
import styled from '@emotion/styled';

interface ProjectAvatarProps {
	background?: string;
	img?: string;
	width?: string;
	height?: string;
	onClick: () => void;
}

const ProjectAvatar: React.FC<ProjectAvatarProps> = ({ background, img, onClick, children }) => {
	const HandleClick = (): void => onClick();

	return (
		<>
			<ProjectAvatarEle background={background} img={img} onClick={HandleClick}>
				{children}
			</ProjectAvatarEle>
		</>
	);
};

ProjectAvatar.defaultProps = {
	background: '#bb0012',
	img: 'https://image-upload-mingizuk.s3.ap-northeast-2.amazonaws.com/0515_1_sli2.jpeg',
	onClick: () => {},
	width: '5rem',
	height: '5rem',
};

const ProjectAvatarEle = styled('button')<ProjectAvatarProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	background-color: ${(props) => props.background};
	border: none;
	border-radius: 1rem;
	cursor: pointer;
	&:hover {
		opacity: 70%;
	}
`;

export default ProjectAvatar;
