import React, { useState } from 'react';
import styled from '@emotion/styled';
import Grid from '../atoms/Grid';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import { IoIosArrowDown } from 'react-icons/io';

interface MemberCardProps {
	name: string;
	text: string;
	color: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, text, color }) => {
	const [background, setBackground] = useState('#fff');
	const [isHover, setIsHover] = useState(false);
	return (
		<button
			onMouseEnter={() => {
				setBackground('#EFEEEE');
				setIsHover(true);
			}}
			onMouseLeave={() => {
				setBackground('#ffffff');
				setIsHover(false);
			}}
			style={{
				border: 'none',
				backgroundColor: background,
				borderRadius: '0.2rem',
				position: 'relative',
			}}
		>
			<Grid width="15rem" height="2.5rem" background={'inherit'} isCursor>
				<Avatar color={color}>{name}</Avatar>
				<Grid width="10rem" kind="FC" margin="0 0 0 .7rem">
					<Text size="14px" color="#1E1F21">
						{name}
					</Text>
					<Text size="12px" color="#6d6e6f">
						{text}
					</Text>
				</Grid>
				{isHover ? (
					<ArrowArea>
						<IoIosArrowDown />
					</ArrowArea>
				) : (
					''
				)}
			</Grid>
		</button>
	);
};

MemberCard.defaultProps = {
	name: 'jinsung',
	text: 'Project Owner',
	color: '#DDA211',
};

const ArrowArea = styled.div`
	position: absolute;
	top: 35%;
	right: 0.3rem;
`;

export default MemberCard;
