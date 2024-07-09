<script>
	import { scaleLinear } from 'd3-scale';

	export let coords;
	export let edges;
	export let width = 800;
	export let height = 800;

	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	$: xScale = scaleLinear()
		.domain([Math.min(...coords.map(d => d.x)), Math.max(...coords.map(d => d.x))])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([Math.min(...coords.map(d => d.y)), Math.max(...coords.map(d => d.y))])
		.range([height - padding.bottom, padding.top]);

	function getRandomDelay() {
		return Math.random() * 2 + 's'; // delay between 0 and 2 seconds
	}

	function getRandomDuration() {
		return Math.random() * 1 + 0.5 + 's'; // duration between 0.5 and 1.5 seconds
	}
</script>

<style>
	@keyframes flicker {
		0% { opacity: 1; }
		50% { opacity: 0; }
		100% { opacity: 1; }
	}
	
	.flicker {
		animation: flicker infinite;
	}
</style>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg width={width} height={height}>
		<g class="edges">
			{#each edges as edge, i}
				<line 
					x1={xScale(coords[edge.s].x)} 
					y1={yScale(coords[edge.s].y)} 
					x2={xScale(coords[edge.t].x)} 
					y2={yScale(coords[edge.t].y)} 
					stroke="black"
					class="flicker"
					style={`animation-duration: ${getRandomDuration()}; animation-delay: ${getRandomDelay()};`}
				/>
			{/each}
		</g>
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