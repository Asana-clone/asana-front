import React from 'react';

interface CalendarProps {
	test: string;
}

const Calendar: React.FC<CalendarProps> = (props) => {
	const { test } = props;
	return (
		<>
			<p>{test} Board</p>
		</>
	);
};

export default Calendar;
