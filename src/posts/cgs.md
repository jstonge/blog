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
  
  $: currentForm = 0;

  function handleClick() {
    currentForm = (currentForm + 1) % 6;
  }

	const price_ineq = "\
  \\begin{aligned}\
     \\bar{w} \\triangle p_g = \\text{cov} (w_{g}, p_{g})+E(w_{g} \\triangle p_{g})\
  \\end{aligned}";
	
  const price_ineq_nestd = "\
  \\begin{aligned}\
     \\bar{w} \\triangle p &= \\text{cov} (w_{g}, p_{g}) + E(\\text{cov}(w_{ig}, p_{ig}))\\\\\
                           &= \\text{var}(p_g)\\beta(w_g,p_g)+E(var(p_{ig})\\beta(w_{ig},p_{ig}))\
  \\end{aligned}";
	
  const price_ineq_gardner = "\
  \\begin{aligned}\
     \\triangle E_{i\\in I}(z_i) = \\text{cov}_{i\\in I} (w_{i}, z_{i})+ E_{i \\in I}(w_{i} \\triangle z_i)\
  \\end{aligned}";
  
  const price_ineq_mixed = "\
  \\begin{aligned}\
     \\bar{w} \\triangle p = E(p_i w_i)-E(p_i)E(w_i)=\\text{cov}(w_i,p_i)\
  \\end{aligned}";
	
  const hamilton_rule = "\
  \\begin{aligned}\
     rb > c\
  \\end{aligned}";


</script>

With cultural group selection (CGS), anthropologists seek to explain a key feature of human societies; large-scale collaboration among unrelated individuals. To solve that cooperation problem, they recycle inclusive fitness into a  (cultural) multilevel selection theory. Building on cultural evolution theory, they defend the thesis that <em>group-level cultural traits</em> (i) exist and (ii) they could play a key role in explaining humans are weird, evolutionarily speaking.

First, what are group-level cultural traits? This idea is best understood in terms of an  story. Bear with me. In his book on the <em>The WEIRDest People in the World</em> (that's us), Joe Henrich tells the story of how Ilahita, a traditional society from New Guinea, became extraordinarily big for that time and place (≫300 people). 
How? Stories. Many stories entangled with behaviors, imbued with emotional strenght, that lead to interactions among distantly related households. 

<img src="https://raw.githubusercontent.com/jstonge/blog/main/static/tambaran-spirit-house.webp" alt="share-or-take" class="margin-note"/>

For instance, every household raises pigs, but they find that eating their own pigs is disgusting because it would be like eating one of their own's kid. This means that groups must exchange pigs at communal ceremonies. Not only that, but those ceremonies involve rites of passage for boys to become men, which mean they can marry, learn about secret ritual knowledge, and climb the political ladder. 
The catch is that those rites must be performed by an opposite ritual group, meaning your success isn't solely dependent on your own group. I won't go into the details of all the norms (go read that chapter in Henrich's book, it is way better than Netflix), but there are more. Here's the best of; infusing terrors in their rites of passages because the Tambaran gods demand it (including going out and killing men from enemy communities), undertaking large community works (with some music-making and synchronous dance involved), and finally the ability to punish people who are doing ritual performance wrong. 

Ok, you might be wondering, how is this blog post geared towards physicists. The answer is that it was a trick to force you into the reality of studying groups in anthropology.

From a network perspective, the idea of exchanging pigs with other groups does not really make sense at node-level. This is about how _groups_ should behave towards each other. Yet, this is ingrained in individual psychology; people choose to punish one another because they don't do what the gods want. My point is that group-level cultural traits make a lot of sense when we put on our anthropological hat; these are stories and behaviors that are best explained at group-level, albeit, yes, they might be motivated at individual-level.

#### Cultural group selection, actually

The most straighforward way to understand cultural group selection is by going back to its inception; population genetics. Population genetic models are all about keeping track of copies of different alleles that might increase or decrease fitness. 


<br>
<button on:click={() => handleClick()}>Toggle Price's Interpretation</button>

<!-- Start Multiverse -->

{#if currentForm == 1}

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_ineq_gardner}/> 
  <br><small>(Price equation; <a href="https://royalsocietypublishing.org/doi/10.1098/rstb.2019.0361">Gardner 2021</a>)</small>
  </div>
</div>

<p>In a nutshell, we are thinking about the covariance between average group fitness and average group allele frequency.</p>

{:else if currentForm == 2}

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_ineq}/> 
  <br><small>(Price equation with subpopulations as groups of individuals. The term on the RHS is the expectation of the product of the change in allele frequency in group <em>g</em> and mean fitness in group <em>g</em>; McElreath & Boyd 2008 p.231)</small>
  </div>
</div>

<p>In a nutshell, we are thinking about the assemblage of two different population, and how the first assemblage maps onto the second after a single timestep. As Gardner says, it shows the driving forces behind evolution. We have the unit of selection, or the "particle" type indexed by <em>i</em>. There is the arena of selection, which is the aggregation unit notated by <em>l</em>. There is the character under selection, which is notated by <em>z</em>. And there is the target of selection, which is notated by <em>w</em>. This is the thing whose covariance with <em>z</em> drive natural selection.</p>

{:else if currentForm == 3}

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_ineq_mixed}/> 
  <br><small>(Special form of the price equation with diploid individuals, aka number of 'particles' in 'subpopulations' is always 2. Thus, average change in allele frequency within individuals tends to zero; McElreath & Boyd 2008, see p.229)</small>
  </div>
</div>

<p>In a nutshell, we are thinking about the assemblage of two different population, and how the first assemblage maps onto the second after a single timestep.</p>

{:else if currentForm == 4}

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_ineq_nestd}/> 
  <br><small>(Change in frequency of the allele where we first average across individuals within groups, then across groups within the population. The second line shows the regression of individual/group fitness on individual/group allele frequency. Selection occurs when there is variation in character value. No meiotic drive and ignored mutation were assumed. McElreath & Boyd 2008, see p.231)</small>
  </div>
</div>

<p>In a nutshell, we are thinking about the selection within and between groups with this expression. To have altruism, you need variation among groups, aka large <em>var(p<sub>g</sub>)</em>, while variance within groups is small..</p>
{:else if currentForm == 5}

<div class='model-container' style="text-align: center;"> <br>
    <div>Change in the average character value between parent and offspring</div> = <div>Covariance of fitness and character value across parents (selection)</div> - <div>Average of the product of fitness and the character difference between parent and offspring (non-selective transmission)</div><small>Gardner</small>
</div>

{:else} 

<div class="parent-container">
  <div class='model-container' style="text-align: center;"><br>The change in the <span style="color:red">average value of character among the 'parents'</span> and the average value of character among the 'offsprings'.<br>  
  <br><small>(Price equation in plain english)</small>
  </div>
</div>

<p>In a nutshell, we are thinking about the assemblage of two different population, and how the first assemblage maps onto the second after a single timestep.</p>

{/if}


<!-- <div class="margin-note">
  <Katex math={"\
    \\begin{aligned}\
    \\bar{w} \\triangle p &= \\sum_g \\frac{n_g}{N} w_g(p_g-p)\\\\\
                          &+ \\sum_g\\frac{n_g}{N}w_g(p_g^\\prime-p_g)\
    \\end{aligned}\
  "}/>
</div> -->

#### I want more!

Cultural group selection is connected to the following topics in McElreath & Boyd's book:
- Reciprocity and collective action (ch. 4.5) 
  - Altruistic punishment; second-order dilemma (punishing those who failed to punish; ch. 4.5.2). Second-order dilemma could be a nice use of adaptive higher-order interactions.
  - More generally, n-person games (ch.4.5.1) and repeated interactions (ch. 4.1.1)
- Costly signal theory; what if people fake their intent (ch.5.1)


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
