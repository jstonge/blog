<script>
	import { scaleLinear } from 'd3-scale';

	export let coords;
	export let width = 800;
	export let height = 800;

	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	$: xScale = scaleLinear()
		.domain([Math.min(...coords.map(d => d.x)), Math.max(...coords.map(d => d.x))])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([Math.min(...coords.map(d => d.y)), Math.max(...coords.map(d => d.y))])
		.range([height - padding.bottom, padding.top]);
</script>


<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg width={width} height={height}>
		<g class="nodes">
			{#each coords as c, i}
				<g>
					<circle 
						cx={xScale(c.x)} 
						cy={yScale(c.y)} 
						r="4" 
						stroke="black" 
						fill="grey" 
					/>
					<text x={xScale(c.x) + 6} y={yScale(c.y) + 3} font-size="10" fill="black">{i}</text>
				</g>
			{/each}
		</g>
	</svg>
</div>