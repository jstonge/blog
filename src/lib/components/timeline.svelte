<script>
    import data from "./data/pubs.js";
  
    import { scaleLinear } from "d3-scale";
    import { max } from "d3-array";
  
    let width = 400,
      height = 400;
  
    const margin = { top: 25, right: 20, bottom: 30, left: 10 };
    const radius = 10;
  
    $: innerWidth = width - margin.left - margin.right;
    let innerHeight = height - margin.top - margin.bottom;
  
    $: xScale = scaleLinear()
      .domain([0, 100])
      .range([0, innerWidth]);
  
    let yScale = scaleLinear()
      .domain([0, max(data, d => d.hours)])
      .range([innerHeight, 0]);
  </script>
  
  <main>
  <div
    class="chart-container"
    bind:clientWidth={width}
  >
    <svg {width} {height}>
      <g class="inner-chart" transform="translate({margin.left}, {margin.top})">
          {#each data.sort((a, b) => a.grade - b.grade) as d, index}
            <circle 
              cx={xScale(d.grade)}
              cy={yScale(d.hours)}
              fill="purple"
              stroke="black"
              r={radius}
              opacity={0.85}
            />
          {/each}
      </g>
    </svg>
  </div>
  </main>
  
  <style>
    :global(.tick text, .axis-title) {
      font-weight: 400; /* How thick our text is */
      font-size: 12px; /* How big our text is */
    }

    main {
      max-width: 768px;
      margin: auto;
      padding: 8px;
    }
  
    .chart-container {
      position: relative;
    }

  
  </style>