import React from 'react';
import styled from '@emotion/styled';

const ScrollX: React.FC = (children) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	display: flex;
	width: 18.3rem;
	flex-direction: column;
	justify-content: start;
	align-itmes: center;
	max-height: 100vh;
	margin-right: 1.5rem;
	overflow-y: scroll;
`;

export default ScrollX;
