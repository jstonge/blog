<script>
  export let circlesData1 = [
    { cx: 130, cy: 150, r: 10, fill: "black" },
    { cx: 150, cy: 130, r: 10, fill: "white" }
  ];

  const largeCircles1 = [
    { cx: 60, cy: 60, r: 40 },
    { cx: 80, cy: 80, r: 40 },
    { cx: 100, cy: 100, r: 40 }
  ];

  // Additional sets of circles data
  export let circlesData2 = [
    { cx: 130, cy: 150, r: 10, fill: "black" },
    { cx: 150, cy: 130, r: 10, fill: "white" }
  ];

  const largeCircles2 = [
    { cx: 60, cy: 220, r: 40 },
    { cx: 80, cy: 240, r: 40 },
    { cx: 100, cy: 260, r: 40 },
    { cx: 120, cy: 280, r: 40 },
    { cx: 140, cy: 300, r: 40 }
  ];

  export let circlesData3 = [
    { cx: 130, cy: 150, r: 10, fill: "black" },
    { cx: 150, cy: 130, r: 10, fill: "white" }
  ];

  const largeCircles3 = [
    { cx: 60, cy: 380, r: 40 },
    { cx: 80, cy: 400, r: 40 }
  ];
</script>

<svg width="200" height="500" xmlns="http://www.w3.org/2000/svg">
  <!-- First Set of Large Circles -->
  {#each largeCircles1 as largeCircle}
    <circle
      cx={largeCircle.cx}
      cy={largeCircle.cy}
      r={largeCircle.r}
      stroke="black"
      stroke-width="2"
      fill="white"
    />
    {#each circlesData1 as smallCircle}
      <circle
        cx={largeCircle.cx - largeCircle.r + smallCircle.cx - 100}
        cy={largeCircle.cy - largeCircle.r + smallCircle.cy - 100}
        r={smallCircle.r}
        fill='white'
        stroke='black'
        stroke-width='1'
      />
    {/each}
  {/each}

  <!-- Second Set of Large Circles -->
  {#each largeCircles2 as largeCircle}
    <circle
      cx={largeCircle.cx}
      cy={largeCircle.cy}
      r={largeCircle.r}
      stroke="black"
      stroke-width="2"
      fill="white"
    />
    {#each circlesData2 as smallCircle}
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

  <!-- Third Set of Large Circles -->
  {#each largeCircles3 as largeCircle}
    <circle
      cx={largeCircle.cx}
      cy={largeCircle.cy}
      r={largeCircle.r}
      stroke="black"
      stroke-width="2"
      fill="white"
    />
    {#each circlesData3 as smallCircle}
      <circle
        cx={largeCircle.cx - largeCircle.r + smallCircle.cx - 100}
        cy={largeCircle.cy - largeCircle.r + smallCircle.cy - 100}
        r={smallCircle.r}
        fill="black"
        stroke='black'
        stroke-width='1'
      />
    {/each}
  {/each}
</svg>
