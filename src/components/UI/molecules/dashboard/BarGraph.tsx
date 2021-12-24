import React from 'react';
import * as d3 from 'd3';

interface Props {}

const BarGraph: React.FC<Props> = () => {
	const ChartZone = React.useRef(null);
	var data = [1, 10, 12];
	var width = 500,
		scaleFactor = 10,
		barHeight = 20;

	React.useEffect(() => {
		var graph = d3
			.select(ChartZone.current)
			.append('svg')
			.attr('width', width)
			.attr('height', 500)
			.attr('fill', 'blue');

		var bar = graph
			.selectAll('g')
			.data(data)
			.enter()
			.append('g')
			.attr('transform', (d, i) => `translate(${i * barHeight},-1)`);

		bar.append('rect')
			.attr('width', barHeight - 1)
			.attr('height', (d) => d * scaleFactor);

		// bar.append('text')
		// 	.attr('x', function (d) {
		// 		return d * scaleFactor;
		// 	})
		// 	.attr('y', barHeight / 2)
		// 	.attr('dy', '.35em')
		// 	.text(function (d) {
		// 		return d;
		// 	});
	}, []);
	return (
		<>
			<div ref={ChartZone}></div>
		</>
	);
};

export default BarGraph;
