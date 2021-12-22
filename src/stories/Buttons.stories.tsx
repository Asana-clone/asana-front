import React from 'react';
import Button from '../components/UI/atoms/Button';
// import { text } from '@storybook/addon-knobs';

export default {
	title: 'Buttons|default',
	component: Button,
};

export const button = () => {
	return (
		<Button size="15px" onClick={() => {}}>
			버튼
		</Button>
	);
};