import React, { useState } from 'react';
import styled from '@emotion/styled';
import Grid from '../atoms/Grid';
import { BiPlus } from 'react-icons/bi';
import Text from '../atoms/Text';
import Icons from '../atoms/Icons';

interface AddButtonProps {
	text: string;
	isDotradius?: boolean;
	iconType?: string;
	position?: 'start' | 'center';
	onClick: () => void;
	lineColor?: string;
}

const AddButton: React.FC<AddButtonProps> = ({
	text,
	isDotradius,
	onClick,
	position,
	iconType,
	lineColor,
}) => {
	const [background, setBackground] = useState('#ffffff');
	const [color, setColor] = useState('#6D6E6F');
	const HandleClick = (): void => onClick();

	return (
		<button
			onClick={HandleClick}
			onMouseEnter={() => {
				setBackground('#EFEEEE');
				setColor('black');
			}}
			onMouseLeave={() => {
				setBackground('#ffffff');
				setColor('#6D6E6F');
			}}
			style={{ border: 'none', backgroundColor: background, borderRadius: '0.5rem' }}
		>
			<Grid
				position={position}
				isCursor={true}
				background={'inherit'}
				height="2.5rem"
				width="15rem"
			>
				{isDotradius ? (
					<Dotradius>
						<BiPlus size={'1.5rem'} style={{ cursor: 'pointer' }} />
					</Dotradius>
				) : (
					<Icons color={`${lineColor}`} typeName={`${iconType}`} />
				)}
				{lineColor === 'black' ? (
					<Text weight="500" color={color}>
						{text}
					</Text>
				) : (
					<Text weight="500" color={lineColor}>
						{text}
					</Text>
				)}
			</Grid>
		</button>
	);
};

AddButton.defaultProps = {
	text: 'Add some..',
	isDotradius: false,
	position: 'center',
	iconType: 'plus',
	lineColor: 'black',
};

const Dotradius = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35px;
	height: 35px;
	border: 1px dashed #6d6e6f;
	border-radius: 50%;
	margin-right: 0.5rem;
`;

export default AddButton;
