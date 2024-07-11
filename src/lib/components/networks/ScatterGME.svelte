<script>

export let circlesData1 = [
    { cx: 130, cy: 150, r: 10, fill: "black" },
    { cx: 150, cy: 130, r: 10, fill: "white" }
  ];

  const largeCircles1 = [
    { cx: 60, cy: 60, r: 40 },
    { cx: 80, cy: 80, r: 40 },
    { cx: 100, cy: 100, r: 40 }
  ]
</script>

<svg width="200" height="200">
  
  {#each largeCircles1 as largeCircle}
    <circle
      cx={largeCircle.cx}
      cy={largeCircle.cy}
      r={largeCircle.r}
      stroke="black"
      stroke-width="2"
      fill= "white"  />
      
      {#each circlesData1 as smallCircle}
        <circle
          cx={largeCircle.cx - largeCircle.r + smallCircle.cx - 100}
          cy={largeCircle.cy - largeCircle.r + smallCircle.cy - 100}
          r={smallCircle.r}
          fill='black'
        />
      {/each}
  {/each}
  
  
</svg>
