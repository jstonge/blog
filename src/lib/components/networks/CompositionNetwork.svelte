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
</script>


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
				/>
			{/each}
		</g>
		<g class="nodes">
			{#each coords as c, i}
				<g>
					{#if c.type === "circle"}
						<circle cx={xScale(c.x)} cy={yScale(c.y)} r="4" stroke="black" fill="grey"/>
					{:else}
						<rect x={xScale(c.x)} y={yScale(c.y)} width=8 height=8 stroke="black" fill="grey" transform="translate({-5}, {-5})"/>
					{/if}
					<text x={xScale(c.x) + 6} y={yScale(c.y) + 3} font-size="10" fill="black">{i}</text>
				</g>
			{/each}
		</g>
	</svg>
</div>