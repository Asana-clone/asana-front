import React from 'react';

interface ProGressProps {
	value: number;
}

const Progress: React.FC<ProGressProps> = ({ value }) => {
	return <progress value={value} max="100" />;
};

export default Progress;
