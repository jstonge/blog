---
title: SvelteKIT
description: Trying stuff with Svelte
date: '2023-4-16'
categories:
  - sveltekit
  - svelte
published: false
---

Here i am trying different things with sveltekit

<script>
  import Counter from '$lib/components/counter.svelte'
  import ScatterPlot from '$lib/components/bar.svelte'
  import Mermaid from '$lib/components/mermaid.svelte'
</script>

## D3 + Svelte

This is a scatter plot created using svelte + d3. It glows. But this is CSS

<br>

<ScatterPlot />


## Counter

<Counter />



## Mermaid

<Mermaid>
  graph TB
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C[LetMeThink]
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
</Mermaid>

