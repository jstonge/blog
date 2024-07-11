<script>
	
	export let width = 200;
	export let height = 300;
	// Define the input data
	export let circlesData = {
    Circle1: [
      { cx: 130, cy: 150, r: 10, fill: "white" },
      { cx: 150, cy: 130, r: 10, fill: "white" }
    ],
    Circle2: [
      { cx: 130, cy: 150, r: 10, fill: "black" },
      { cx: 150, cy: 130, r: 10, fill: "white" }
    ],
    Circle3: [
      { cx: 130, cy: 150, r: 10, fill: "black" },
      { cx: 150, cy: 130, r: 10, fill: "black" }
    ]
  };

  // Utility function to get larger circle coordinates
  const getLargeCircleCoordinates = (index) => ({
    cx: 100,
    cy: 100 + index * 200,
    r: 40
  });

  // Define the larger circle data
  const largeCircles = [
    getLargeCircleCoordinates(0),
    getLargeCircleCoordinates(1),
    getLargeCircleCoordinates(2)
  ];
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
  <svg width={width} height={height}>
    <defs>
      <marker id="right-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="black" />
      </marker>
      <marker id="left-arrow" markerWidth="10" markerHeight="10" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M9,3 L0,6 L0,0 z" fill="black" />
      </marker>
    </defs>

    <!-- RIGHT ARROWS -->
    {#each { length: largeCircles.length - 1 } as _, i}
      <line 
        id={`line-right-${i}`}
        x1={largeCircles[i].cx + 10} 
        y1={largeCircles[i].cy + 50} 
        x2={largeCircles[i + 1].cx + 10} 
        y2={largeCircles[i + 1].cy - 50} 
        stroke="black" 
        stroke-width="2"
        marker-end="url(#right-arrow)"
      />
      <!-- Light flow animation -->
      <circle r="3" fill="yellow">
        <animateMotion repeatCount="indefinite" dur="2s">
          <mpath href={`#line-right-${i}`} />
        </animateMotion>
      </circle>
    {/each}

    <!-- LEFT ARROWS -->
    {#each { length: largeCircles.length - 1 } as _, i}
      <line 
        id={`line-left-${i}`}
        x1={largeCircles[i + 1].cx - 10} 
        y1={largeCircles[i + 1].cy - 50} 
        x2={largeCircles[i].cx - 10} 
        y2={largeCircles[i].cy + 50} 
        stroke="black" 
        stroke-width="2"
        marker-end="url(#left-arrow)"
      />
      <!-- Light flow animation -->
      <circle r="3" fill="yellow">
        <animateMotion repeatCount="indefinite" dur="2s">
          <mpath href={`#line-left-${i}`} />
        </animateMotion>
      </circle>
    {/each}

    {#each largeCircles as largeCircle, index}
      <circle
        cx={largeCircle.cx}
        cy={largeCircle.cy}
        r={largeCircle.r}
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      {#each Object.values(circlesData)[index] as smallCircle}
        <circle
          cx={largeCircle.cx - largeCircle.r + smallCircle.cx - 100}
          cy={largeCircle.cy - largeCircle.r + smallCircle.cy - 100}
          r={smallCircle.r}
          fill={smallCircle.fill}
          stroke={smallCircle.fill === 'white' ? 'black' : 'none'}
          stroke-width={smallCircle.fill === 'white' ? '1' : '0'}
        />
      {/each}
    {/each}
  </svg>
</div>
