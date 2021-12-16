import React, { useState } from 'react';
import { AiFillDownCircle } from 'react-icons/ai';
import Text from '../atoms/Text';
import styled from '@emotion/styled';
import Button from '../atoms/Button';
import { AiOutlineUser, AiTwotoneCalendar } from 'react-icons/ai';
import Grid from '../atoms/Grid';

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
						<AiFillDownCircle size="20px" color="green" />
					</div>
				) : (
					<div onClick={changeStatus} style={{ marginRight: '0.5rem', height: '1rem' }}>
						<AiFillDownCircle size="20px" color="gray" />
					</div>
				)}
				<Text>{desc}</Text>
				{hover && (
					<div style={{ position: 'absolute', bottom: '0.5rem' }}>
						<Grid
							width="4.5rem"
							position="space-between"
							padding="0 1rem"
							background="none"
						>
							<Button onClick={() => {}}>
								<AiOutlineUser size="18px" />
							</Button>
							<Button onClick={() => {}}>
								<AiTwotoneCalendar size="18px" />
							</Button>
						</Grid>
					</div>
				)}
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
	max-height: 7rem;
	background-color: '#fff';
	border: 1px solid lightgray;
	border-radius: 1rem;
	padding: 1rem;
	cursor: pointer;
	overflow-y: scroll;
	overflow-y: hidden;
	margin-bottom: 1rem;
`;

export default BoardCard;
