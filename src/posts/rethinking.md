---
title: Rethinking
description: Rethinking everything.
date: '2023-4-14'
categories:
  - bayesian
published: false
pinned: false
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

2. [Varying confound](https://www.youtube.com/watch?v=sgqMkZeslxA&list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus&index=13)

<Mermaid>
  graph LR
  U[Neighborhood] --> Z
  U -->Y
  Z --> Y[Children]
  X[Granparents] --> Z(Parents)
  X --> Y
  style U fill:#5343ff
  linkStyle 1 stroke:#5343ff
  linkStyle 0 stroke:#5343ff
</Mermaid><br>

e.g. 

<Mermaid>
  graph LR
  q[quality] --> C
  q --> M
  C --> M[NAS member]
  G[Gender] --> C[Citations]
  G --> M
  style q fill:#5343ff
  linkStyle 1 stroke:#5343ff
  linkStyle 0 stroke:#5343ff
</Mermaid><br>

3. [Oceanic tool](https://www.youtube.com/watch?v=jokxu18egu0&list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus&index=10)

<Mermaid>
  graph LR
  P[Population] --> T[Tools]
  P --> C[Contact]
  L[Location] --> P
  L --> C
  L --> T
  C --> T
</Mermaid><br>

4. [Survival Analysis](https://www.youtube.com/watch?v=Zi6N3GLUJmw&list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus&index=9)

<Mermaid>
  graph LR
  P[Population] --> T[Tools]
  P --> C[Contact]
  L[Location] --> P
  L --> C
  L --> T
  C --> T
</Mermaid><br>


<h2>The Best Models</h2>

1. [Censored Cats](https://www.youtube.com/watch?v=Zi6N3GLUJmw&list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus&index=9)

<div class='model-container' style="text-align: center;"> <br> <Katex math={m1}/> </div>

<h2>The Best Distribution</h2>


1. [Gamma Distribution](https://www.youtube.com/watch?v=Zi6N3GLUJmw&list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus&index=10)


|        Type         |               Description                |
|:-------------------:|:---------------------------------------- |
|                     | MaxEnt distributions for _waiting times_ |
| `Generative Story`  |      X things required before event      |
| `Outcome variables` |              days to event               |


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

  .model-container {
      margin: 1.5rem 0 1rem 0;
      position: relative;
      border: 1px solid black;
      border-radius: 6px;
      box-shadow: 1px 1px 30px rgba(252, 220, 252, 1);
    }

</style>