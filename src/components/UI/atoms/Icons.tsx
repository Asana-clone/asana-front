import React from 'react';
import { BiPlus, BiPencil, BiMenuAltRight, BiTrash } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';

const iconType = {
	plus: BiPlus,
	rename: BiPencil,
	delete: BiTrash,
	addSection: BiMenuAltRight,
};

const getIconType = (name: string): IconType => iconType[name];

interface Props {
	typeName: string;
	color: string;
}

const Icons: React.FC<Props> = ({ typeName, color }) => {
	const Icon = getIconType(typeName);
	return (
		<Icon color={color} size={'1.5rem'} style={{ cursor: 'pointer', marginRight: '0.5rem' }} />
	);
};

export default Icons;
