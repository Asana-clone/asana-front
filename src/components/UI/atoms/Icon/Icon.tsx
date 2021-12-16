import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from './selection.json'; // 본인 경로

interface IconProps {
	color: string;
	size: string;
	icon: string;
}

const Icon: React.FC<IconProps> = ({ color, size, icon }) => {
	return <IcomoonReact iconSet={iconSet} color={color} size={size} icon={icon} />;
};

export default Icon;
