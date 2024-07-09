---
title: Timeline coauthors
description: Rethinking everything.
date: '2023-6-14'
categories:
  - measuring groups
published: true
pinned: true
coverImage: https://raw.githubusercontent.com/jstonge/hello-research-groups/main/docs/assets/measuring.webp
---

I wrote a small [observable framework entry](https://jstonge.observablehq.cloud/hello-research-groups/results/timeline) for visualizing the evolution of both coauthors and papers for a given author. What I like about it is that we can see a wide variability of patterns of coauthorships and productivity, that we know are closely related. 

<br>
<div class="container"> 
<iframe
  class="responsive-iframe" 
  src="https://jstonge.observablehq.cloud/hello-research-groups/results/timeline">
</iframe>
</div>

In addition to the dodge dot plots, there is a timeseries of number of coauthors, with dots colored by relative academic age of coauthors. The line is the output of a bayesian switchpoint that looks for two different poisson rates.  It works well in some cases, but not others.

p.s. This project is part of a larger project of quantifying research groups in science. The source code can be found [here](https://raw.githubusercontent.com/jstonge/hello-research-groups/main/docs/results/timeline.md).

<style type="text/css">

.container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 600px;
  width: 800px;
  max-width: 1200px;
  margin: auto;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transform: translateX(-10%);
  box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
}


</style>
