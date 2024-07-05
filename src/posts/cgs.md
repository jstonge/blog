---
title: Cultural group selection for group-enthusiast physicists
description: Why bother with cultural group selection?
date: '2024-7-05'
categories:
  - fleeting note
  - groups
  - data viz
published: false
pinned: false
coverImage: ../thumbnails/stories/cgs-ver-abstract.webp
---

<script>
  import Katex from '$lib/components/Katex.svelte';
  
	const price_ineq = "\
  \\begin{aligned}\
     \\bar{w} \\triangle p = \\text{cov} (w_i, p_i)+\\sum_i\\frac{w_i}{N}w_i(p_{i}^{\\prime}-p_i)\
  \\end{aligned}";
	
  const hamilton_rule = "\
  \\begin{aligned}\
     rb > c\
  \\end{aligned}";
</script>

With cultural group selection (CGS), anthropologists seek to explain a key feature of human societies; large-scale collaboration among unrelated individuals. To solve that cooperation problem, they reframed inclusive fitness theory in terms of (cultural) multilevel selection theory. Building on cultural evolution theory, they defend the thesis that <em>group-level cultural traits</em> (i) exist and (ii) they could play a key role in explaining humans are weird, evolutionarily speaking.

First, what are group-level cultural traits? This idea is best understood in terms of an  story. Bear with me. In his book on the <em>The WEIRDest People in the World</em> (that's us), Joe Henrich tells the story of how Ilahita, a traditional society from New Guinea, became extraordinarily big for that time and place (≫300 people). 
How? Stories. Many stories entangled with behaviors, imbued with emotional strenght, that lead to interactions among distantly related households. 

<img src="https://raw.githubusercontent.com/jstonge/blog/main/static/tambaran-spirit-house.webp" alt="share-or-take" class="margin-note"/>

For instance, every household raises pigs, but they find that eating their own pigs is disgusting because it would be like eating one of their own's kid. This means that groups must exchange pigs at communal ceremonies. Not only that, but those ceremonies involve rites of passage for boys to become men, which mean they can marry, learn about secret ritual knowledge, and climb the political ladder. 
The catch is that those rites must be performed by an opposite ritual group, meaning your success isn't solely dependent on your own group. I won't go into the details of all the norms (go read that chapter in Henrich's book, it is way better than Netflix), but they have more such as infusing terrors in their rites of passages because the Tambaran gods demand it (including going out and killing men from enemy communities), undertaking large community works (with some music-making and synchronous dance involved), and finally the ability to punish people who are doing ritual performance wrong. 



<!-- First, evolutionary biologists thought they solve the problem of cooperation by developing inclusive fitness.<img src="https://raw.githubusercontent.com/jstonge/blog/main/static/share-or-take-primer.webp" alt="share-or-take" class="margin-note"/> Inclusive fitness is the idea that evolution can get away with altruistic behaviors, or behaviors that you give away your individual fitness (aka reproduction), by stating the following:

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={hamilton_rule}/> 
  <br><small>Hamilton's rule</small>
  </div>
</div>

That is, if <em>r</em> is high enough, then the benefits of sacrificing individual fitness can get bigger than the cost. What is <em>r</em>? The naive take is that it stands for <r>relatedness</r>, but not exactly. It is a measure of how actors' genotypes predict recipients' genotype, across many individuals (McElreath & Boyd 2008).  

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_ineq}/> 
  <br><small>Price equation</small>
  </div>
</div>

Where do groups come in? Groups matter because they let you interact with individuals with the same genotype than yours more often than not. As such, it can favor altruistic behaviors because a group with many altruist will have a higher average fitness than a group of selfish individuals. But what happens when there is mixing? Mixing means that selfish individuals might end up in a highly cooperative groups, taking advantage of it. Over generations, altruism will fade away as selfishness take over. -->

<style>
  .margin-note {
      width: 300px;  /* Set the width of the image */
      height: 500px;
      float: right;  /* Align the image to the right */
      margin-left: 20px; /* Space between the text and the image */
      margin-right: -220px; /* Pull the image into the right margin */
      position: relative; /* Position relative to its normal position */
      top: 0; /* Align the top of the image with the top of the paragraph */
  }

  .parent-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;    /* Center vertically */
  }

  
  .model-container {
    font-size: var(--font-size-fluid-1);
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    margin: 2rem 0 2rem 0;
    border: 1px solid black;
    border-radius: 6px;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 1);
    display: inline-block;
  }
</style>
