---
title: Observable plot
description: Why bother with cultural group selection?
date: '2024-07-05'
categories:
  - data viz
published: false
pinned: false
---
<script>
	import ObservablePlot from '$lib/components/ObsPlot.svelte';
    import * as Plot from '@observablehq/plot';

    const coords = [
		{ x: 0,   y: 134, r:10, i:0, type: "red" },
		{ x: 43,  y: -33, r:10, i:1, type: "green"},
		{ x: 87,  y: -87, r:10, i:2, type: "green" },
		{ x: 87,  y: -27, r:10, i:2, type: "green" },
		{ x: -23, y: 78,  r:10, i:3, type: "red" },
		{ x: -85, y: 0,   r:10, i:4, type: "red"},
		{ x: 104, y: 32,  r:10, i:5, type: "red" }
	];
</script>

<ObservablePlot 
	options={{
        axis: null,
		height: 400,
        margin: 50,
    marks: [
        Plot.dot(coords, {
            x: "x", y: "y", fill: "type", r: 5, stroke: "black" }),
        Plot.hull(coords, {
            x: "x", y: "y", fill: "type", fillOpacity: 0.2, strokeWidth: 2,
            }),
    ]
}} />

