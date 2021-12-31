import React from 'react';
import * as d3 from 'd3';

interface Props {}

const DonutGraph: React.FC<Props> = () => {
	const ChartZone = React.useRef(null);
	const data = [10, 20, 30, 40, 50, 60];

	React.useEffect(() => {}, []);
	return (
		<>
			<div ref={ChartZone}></div>
		</>
	);
};

export default DonutGraph;
