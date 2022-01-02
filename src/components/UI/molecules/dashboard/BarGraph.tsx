import React from 'react';
import * as d3 from 'd3';

interface Props {}

const BarGraph: React.FC<Props> = () => {
	const ChartZone = React.useRef(null);
	const data = [1, 50, 12, 40];
	const width = 500,
		height = 500,
		scaleFactor = 10,
		barHeight = 20;

	React.useEffect(() => {
		const graph = d3
			.select(ChartZone.current)
			.append('svg')
			.attr('width', width)
			.attr('height', height);

		const bar = graph.selectAll('rect').data(data);

		bar.enter()
			.append('rect')
			.attr('height', (d, i) => {
				return d;
			})
			.attr('width', 20)
			.attr('x', (d, i) => {
				return i * 25;
			})
			.attr('y', (d, i) => {
				return height - d;
			});
	}, []);
	return (
		<>
			<div ref={ChartZone}></div>
		</>
	);
};

export default BarGraph;
