import React from 'react';

interface ButtonProps {
	text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { text } = props;
	return (
		<div>
			<button>{text}</button>
		</div>
	);
};

export default Button;
