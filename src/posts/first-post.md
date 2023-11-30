---
title: Rethinking
description: Rethinking everything.
date: '2023-4-14'
categories:
  - bayesian
published: true
---

<script>
  import Mermaid from '$lib/components/mermaid.svelte'
  import Katex from '$lib/components/Katex.svelte';
  
  const m1_array = [
    "D_i|A_i = 1 &\\sim \\text{Exponential}(\\lambda_i)", 
    "D_i|A_i = 0 &\\sim \\text{Exponential-CCDF}(\\lambda_i)",
    "\\lambda_i &= 1/\\mu",
    "\\log \\mu_i &= \\alpha_{\\text{CID}[i]}"
  ];

	const m1 = "\\begin{aligned}" + m1_array.join("\\\\") + "\\end{aligned}";

</script>

McElreath's _Statistical Rethinking_ is a journey into statistical madness.  
<img src="Golem.png" alt="drawing" class="margin-note"/>
When systems do not comply to random controlled experiments, we need to do our best. 
This book is doing its best for us to do our best. 
But i keep going back to it, as this book (and accompanying lectures) keeps evolving and getting better. 
This is my place to keep track of my notes and thoughts that this book inspires me.


<h2>The Golem</h2>


Statistical model as golem is a great metaphor because it forces you to think from the model's perspective. Similar to when we debug, the first step is to realize that the unwanted behaviors might not be a bug but exactly what you are asking for.


<h2>The Best DAWGs</h2>

1. [Context & discrimination](https://www.youtube.com/watch?v=Zi6N3GLUJmw&list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus&index=9&t=4432s)

<Mermaid>
  graph LR
  X[Status] --> Z(Context)
  Z --> Y[Event]
  X --> Y
</Mermaid>

e.g.

<Mermaid>
  graph LR
  X[Gender] --> Z(Department)
  Z --> Y[Admission]
  X --> Y
</Mermaid><br>

2. next DAWG...


<h2>The Best Models</h2>

1. [Censored Cats](https://www.youtube.com/watch?v=Zi6N3GLUJmw&list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus&index=9&t=4432s)


<div style="text-align: center;"> <Katex math={m1}/> <div>

<style>

  h2 {
    margin: 1.5rem 0 1rem 0;
    font-size: 2rem;
  }

  .margin-note {
      width: 200px;  /* Set the width of the image */
      float: right;  /* Align the image to the right */
      margin-left: 20px; /* Space between the text and the image */
      margin-right: -280px; /* Pull the image into the right margin */
      position: relative; /* Position relative to its normal position */
      top: 0; /* Align the top of the image with the top of the paragraph */
  }
</style>