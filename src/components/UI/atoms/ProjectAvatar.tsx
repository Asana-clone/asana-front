import React from 'react';
import styled from '@emotion/styled';
import ProjectToolTip from '../molecules/ProjectToolTip';
import { useNavigate } from 'react-router-dom';

interface Members {
	nickName: string;
	role: string;
}
interface Props {
	background?: string;
	img?: string;
	size?: string;
	margin?: string;
	members: Members[];
	isTooltip?: boolean;
}

const ProjectAvatar: React.FC<Props> = ({
	background,
	img,
	size,
	children,
	margin,
	members,
	isTooltip,
}) => {
	const [hoverStatus, setHoverStatus] = React.useState(false);
	const navigate = useNavigate();

	return (
		<>
			<ProjectAvatarEle
				background={background}
				img={img}
				size={size}
				margin={margin}
				onClick={() => {
					navigate(`/overview/${1}`);
				}}
				members={members}
				onMouseEnter={() => setHoverStatus(true)}
				onMouseLeave={() => setHoverStatus(false)}
			>
				{children}
				{isTooltip && hoverStatus && <ProjectToolTip members={members} />}
			</ProjectAvatarEle>
		</>
	);
};

ProjectAvatar.defaultProps = {
	background: '#bb0012',
	img: 'https://image-upload-mingizuk.s3.ap-northeast-2.amazonaws.com/0515_1_sli2.jpeg',
	size: '5rem',
	isTooltip: false,
};

const ProjectAvatarEle = styled('button')<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	background-color: ${(props) => props.background};
	margin: ${(props) => props.margin && `0 ${props.margin}`};
	border: none;
	border-radius: 1rem;
	cursor: pointer;
	position: relative;
`;

export default ProjectAvatar;
