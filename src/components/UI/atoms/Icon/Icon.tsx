import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from './selection.json'; // 본인 경로

interface IconProps {
	color: string;
	size: string;
	icon: string;
}

const Icon: React.FC<IconProps> = ({ color, size, icon }) => {
	return (
		<div>
			<IcomoonReact iconSet={iconSet} color={color} size={size} icon={icon} />
		</div>
	);
};

export default Icon;
