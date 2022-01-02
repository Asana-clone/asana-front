import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';

const iconType = {
	plus: BiPlus,
};

const getIconType = (name: string): IconType => iconType[name];

interface Props {
	typeName: string;
	color: string;
}

const Icons: React.FC<Props> = ({ typeName }) => {
	const Icon = getIconType(typeName);
	return <Icon size={'1.5rem'} style={{ cursor: 'pointer', marginRight: '0.5rem' }} />;
};

export default Icons;
