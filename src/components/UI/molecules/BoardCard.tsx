import React, { useState } from 'react';
import { AiFillDownCircle } from 'react-icons/ai';
import Text from '../atoms/Text';
import styled from '@emotion/styled';
import Button from '../atoms/Button';
import { AiOutlineUser, AiTwotoneCalendar } from 'react-icons/ai';
import Grid from '../atoms/Grid';
import Avatar from '../atoms/Avatar';

interface BoardCardProps {
	desc: string;
	isComplete: boolean;
	assignee?: string;
}

const BoardCard: React.FC<BoardCardProps> = ({ desc, isComplete, assignee }) => {
	const [complete, setComplete] = useState(isComplete);
	const [hover, setHover] = useState(false);
	const changeStatus = () => {
		complete ? setComplete(false) : setComplete(true);
	};

	return (
		<>
			<BoardBox onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				{complete ? (
					<div onClick={changeStatus} style={{ marginRight: '0.5rem', height: '1rem' }}>
						<AiFillDownCircle size="22px" color="green" />
					</div>
				) : (
					<div onClick={changeStatus} style={{ marginRight: '0.5rem', height: '1rem' }}>
						<AiFillDownCircle size="22px" color="gray" />
					</div>
				)}
				<Text>{desc}</Text>
				{hover && (
					<div style={{ position: 'absolute', bottom: '0.5rem', left: '1rem' }}>
						<Grid
							width="1rem"
							kind="FC"
							background="none"
							height="3.5rem"
							positionSub="space-between"
						>
							<Button size="24px" onClick={() => {}}>
								<AiOutlineUser size="22px" />
							</Button>
							<Button size="24px" onClick={() => {}}>
								<AiTwotoneCalendar size="22px" />
							</Button>
						</Grid>
					</div>
				)}
				<div style={{ position: 'absolute', bottom: '0.5rem', left: '1rem' }}>
					{assignee && (
						<Avatar size="24px" color="yellow">
							ayuung
						</Avatar>
					)}
				</div>
			</BoardBox>
		</>
	);
};

const BoardBox = styled('article')`
	position: relative;
	display: inline-flex;
	justify-content: start;
	align-items: start;
	width: 15rem;
	min-height: 5rem;
	max-height: 6.5rem;
	background-color: '#fff';
	border: 1px solid lightgray;
	border-radius: 1rem;
	padding: 1rem 1rem 3rem 1rem;
	cursor: pointer;
	overflow-y: hidden;
	margin-bottom: 1rem;
`;

export default BoardCard;
