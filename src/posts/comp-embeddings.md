---
title: Computational Embeddings
description: Visualizing similarity using umap+hdbscan
date: '2024-5-10'
categories:
  - framework
  - pan & zoom
  - d3
published: true
pinned: false
coverImage: https://raw.githubusercontent.com/jstonge/blog/main/thumbnails/stories/comp-embeddings.webp
---

This is a small [observable notebook](https://observablehq.com/@jstonge/computational-embeddings) for visualizing the s2orc's embeddings of papers with mention of the 'computational' keyword. 

<div class="container" style="margin-top: 5vh;"> 
<iframe
  class="responsive-iframe" 
  src="https://observablehq.com/embed/@jstonge/computational-embeddings@latest?cell=*">
</iframe>
</div>

<style>
.container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 800px;
  width: 90vw;
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
  transform: translateX(-23%);
  box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
}
</style>
