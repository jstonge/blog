---
title: Cultural group selection for group-enthusiast physicists
description: Why bother with cultural group selection?
date: '2024-07-05'
categories:
  - cultural group selection
  - game theory
published: true
pinned: true
coverImage: https://raw.githubusercontent.com/jstonge/blog/main/thumbnails/stories/cgs-ver-abstract.webp
---

<script>
  import Katex from '$lib/components/Katex.svelte';
  import Scrolly from "$lib/components/helpers/Scrolly.svelte"
  
  let currentStep = 0;
  $: currentForm = 0;

  function handleClick() {
    currentForm = (currentForm + 1) % 2;
  } 
  
  const wg = "w_g = \\frac{1}{n_g} \\sum_i w_{ig}";

  const wbar_change_p = "\\bar{w} \\triangle p";
  const wg_change_pg = "w_{g} \\triangle p_{g}";
  const wig_change_pig = "w_{ig} \\triangle p_{ig}";
  
  const covar_wg_pg = "\\text{cov} (w_{g}, p_{g})";
  const covar_wig_pig = "\\text{cov} (w_{ig}, p_{ig})";
  const covar_eq = "\\text{cov}(x,y) = \\text{var}(x)\\beta(y,x)"

	const price_wiki = "\\bar{w} \\triangle p = \\text{cov} (w_{i}, p_{i})+ E \\big(w_i \\triangle p_i)";
	const price_diploid = "\\bar{w} \\triangle p = \\text{cov} (w_{i}, p_{i})";
	const price_mb = "\\bar{w} \\triangle p_g = \\text{cov} (w_{g}, p_{g})+E\\big[\\text{cov} (w_{ig}, p_{ig})\\big]";
	const price_mb2 = "\\bar{w} \\triangle p_g = \\text{var} (p_g) \\beta(w_{g}, p_{g})+E\\big[\\text{var}(p_{ig}) \\beta (w_{ig}, p_{ig})\\big]";
	
  const boyd_evidence = "\\frac{\\text{Group benefit}}{\\text{Individual cost}} > \\frac{1-F_{st}}{F_{st}}";
		
  const price_ineq_gardner = "\\triangle E_{i\\in I}(z_i) = \\text{cov}_{i\\in I} (w_{i}, z_{i})+ E_{i \\in I}(w_{i} \\triangle z_i)";

</script>

<div class="tip">This post is part of a series on understanding the models of cultural group selection, leading to <a href="https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/cultural-group-selection-plays-an-essential-role-in-explaining-human-cooperation-a-sketch-of-the-evidence/638ED0187A9727D9D327661A91DE0759">Boyd et al. 2016</a>'s BBS paper and Joe Henrich's latest book <a href="https://us.macmillan.com/books/9780374710453/theweirdestpeopleintheworld">The Weirdest People in the World: How the West Became Psychologically Peculiar and Particularly Prosperous (2020)</a>. The presentation of the formalism draws heavily from <a href="https://academic.oup.com/chicago-scholarship-online/book/33152">McElreath & Boyd 2008, ch.6</a>.</div>

What explains large-scale collaboration among unrelated individuals? For anthropologists, It is a mystery because reciprocity at that scale does not follow from our most beloved models in biology, aka evolutionary game theory and population genetic models. To solve this cooperation problem, they recast inclusive fitness theory into cultural group selection (CGS). Building on cultural evolution theory, they assert that (some) cultural behaviors have evolved because they provide group-level benefits, and these are crucial in explaining the evolutionary success of humans. What do they mean by that?

First, what are group-level cultural traits. In his book on the <a href="https://us.macmillan.com/books/9780374710453/theweirdestpeopleintheworld">The WEIRDest People in the World</a> (that's us Westerners), Joe Henrich tells the story of how Ilahita, a traditional society from New Guinea, got big for that time and place (≫300 people). How? A collection of stories, myths, and rites of terror that have facilitated interactions among distantly related households.

<img src="https://raw.githubusercontent.com/jstonge/blog/main/static/tambaran-spirit-house.webp" alt="share-or-take" class="margin-note"/>

For instance, every household raises pigs, but they find that eating their own pigs is disgusting because it would be like eating one of their own's kid. This means that groups must exchange pigs at communal ceremonies. Furthermore, those ceremonies involve rites of passage for boys to become men (meaning boys can marry, learn about secret ritual knowledge, and climb the political ladder). The catch is that those rites must be performed by an opposite ritual group, meaning your success isn't solely dependent on your own group. 

Once you start looking for organizational norms, there are more than you know. llahita's best of includes infusing terrors in their rites of passages because the Tambaran gods demand it (including going out and killing men from enemy communities), undertaking large community works (with some music-making and synchronous dance involved), and finally the ability to punish people who are doing ritual performance wrong. 

From a network perspective, the idea of exchanging pigs with other groups, arguably, make more sense at the level of groups than at node-level. This is about how _groups_ should behave towards each other. Of course, this is ingrained in individual psychology; people choose to punish one another because they don't do what the gods want or experience disgust at the thought of eating their own pig. But sometimes stories and behaviors can be best explained at group-level. 

But where is the math showing that, physicists ask.

#### Cultural group selection, actually

<div class="margin-note">
  <div style="display: flex; justify-content: center; align-items: center;">
    <img src = "../run-or-yell-primer.png" style="width: 70%;"/>
  </div>
  <caption style="display: flex; justify-content: center; align-items: center;"><a href="https://www.youtube.com/watch?v=iLX_r_WPrIw">Primer's blobs with behaviors contained in genes</a></caption>
</div>

CGS is rooted in population genetics. Population genetic models are all about keeping track of copies of different alleles that might increase or decrease fitness under the effect of natural selection. A key relationship (theorem? model?) in the field is the Price equation:

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_wiki}/> 
  <br><small><a href="https://en.wikipedia.org/wiki/Price_equation">Price equation</a></small>
  </div>
</div>

<div class="margin-note">
  <br>
  Recall from statistics that covariance takes different forms. It can be written as the average over the product of individual traits and fitness minus the product of their averages, <Katex math={"\\text{cov}(w_i,p_i) = E(p_i w_i) - E(p_i)E(w_i)"}/><br><br>It can also be written with a cofficient regression,<br><Katex math={"\\text{cov}(w_i,p_i) = \\text{var}(p_i)\\frac{\\text{cov}(w_i,p_i)}{\\text{var}(p_i)} = \\text{var}(p_i)\\beta(w_i,p_i)"}/>, revealing how without variance in allele frequencies you cannot have selection.
</div> 
where <em>wᵢ</em> is individual fitness and pᵢ is the trait value. When assuming diploid individuals (two sets of chromosome only), together with low mutation rate, Price's equation boils down to <Katex math={price_diploid}/>. The price equation states that the average fitness of the population times the change in <em>p</em> is given by how individual trait value and fitness deviate together from their mean across generations. See Primer's blobs for a great video on the topic.

Cultural evolutionists now make a bold move to natural selection could (in principle) favor group-level traits, even in the face of individual cost:

<img src = "../inds-to-cgs.svg" style="margin-top: 2rem;" alt="cgs"/>

<div class='margin-note' style="margin-top: 10rem;">The mean number of copies by group is <Katex math={wg}/>, where <em>n<sub>g</sub></em> and <em>p<sub>g</sub></em> is the number of individuals and the frequency of realized behavior, respectively, in group <em>g</em>.</div>

On the left, we represent a diploid individual, with its two set of genes that could be realized into one of two behaviors. In this world, we track the changes in individual allele frequency over generations, regardless of the population structure. On the right, we have two <em>individuals</em> as part of a group, each with a realized behavior. Below, we denote <em>p<sub>ig</sub></em> as the frequency of individual ᵢ with realized behavior, labeled <em>S</em>, in group <em><sub>g</sub></em>. Accordingly, <em>w<sub>ig</sub></em> refers the number of copies of that behavior in that group. 

Cultural group selection is a multilevel selection framework, which means we can decompose the above into nested components. 

<br>
<section>
	<div class="steps">
		<Scrolly bind:value={currentStep}>
        <div class='step' class:active={currentStep === 0}>
            <div class='margin-note-big'> 
              <Katex math={wbar_change_p}/> = <span style="color:#088F8F;"><Katex math={covar_wg_pg}/></span> + <Katex math={"E("+wg_change_pg+")"}/>
            </div>
          In group-land, the change of frequency of <em>S</em> is now equal to the following two terms. First, the <span style="color:#088F8F;">covariance between allele frequency in <em>g</em> and the mean fitness in group <em>g</em></span>. Yet again, we are saying that selection on groups depends on <em>var(p<sub>g</sub>)</em>, or variance in S across groups.
        </div>
        <div class='step' class:active={currentStep === 1}>
            <div class='margin-note-big'>
                <Katex math={wbar_change_p}/> = <Katex math={covar_wg_pg}/> + <span style="color:#088F8F;"><Katex math={"E("+wg_change_pg+")"}/></span>
            </div>
            The second term says that there is some change in frequency of S that comes from the average change in allele frequency within the group. In words, this change within group is an <span style="color:#088F8F;">expectation over the product of the change in allele frequency in group <em>g</em> and its mean fitness</span>. This term is where the individual component of natural selection sneaks back in. 
        </div>
        <div class='step' class:active={currentStep === 2}>
            <div class='margin-note-big'>
                <Katex math={wg_change_pg} class='margin-note'/>
                =
                <span style="color:#088F8F;"><Katex math={covar_wig_pig}/></span>
                +
                <Katex math={"\\cancel{E("+wig_change_pig+")}"}/>
            </div>
            The product of the change in allele frequency in group <em>g</em> and its mean fitness, in turn, can be thought of as the sum of a covariance and the expectation of the change in frequency of allele at individual level. This time around, the <span style="color:#088F8F;">covariance is between the allele frequency of individual <em>i</em> in group <em>g</em> and individual fitness of <em>i</em> in <em>g</em></span>.
            As we did before, if we assume no meiotic drive and low mutation rate within group at individual level (remember, this term disappear with haploid individuals), we get rid of the second term and plug back this expression in the original term. We get
        </div>
		</Scrolly>
	</div>
</section>

<div class="parent-container">
  <div class='model-container' style="text-align: center; margin-top: 5rem"> <br> <Katex math={wbar_change_p}/> = <Katex math={covar_wg_pg}/> + <Katex math={"E("+covar_wig_pig+")"}/>
  <br><small>(General form of Price equation;<br>see Mcelreath & Boyd 2008 p.229 for a more detailed derivation)</small>
  </div>
</div>

This is the core of the multilevel selection idea of CGS. Basically, you can decompose the selection effect on behavior <em>S</em> across groups and individuals, looking at which part explains variance the most, as with something like <a href="https://en.wikipedia.org/wiki/Analysis_of_variance">ANOVA</a>. Using the fact that we can write covariance such as <Katex math={covar_eq}/>, cultural evolutionists like to use the following, more practical form

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_mb2}/>
  <br><small>(Showing the regression coefficient)</small>
  </div>
</div>

what really matters is the relative strenght of selection within and between groups. The two terms have inverse signs, meaning that when one goes up the other one needs to go down. In <a href="https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/cultural-group-selection-plays-an-essential-role-in-explaining-human-cooperation-a-sketch-of-the-evidence/638ED0187A9727D9D327661A91DE0759">Boyd et al. 2016</a>, their main sketch of quantitative evidence is actually in the form of 

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={boyd_evidence}/>
  <br><small>(Showing the regression coefficient)</small>
  </div>
</div>

where <em>F<sub>st</sub></em> is the fraction of total variance that is between groups, aka <em>var(p<sub>g</sub>)</em>. The punchline should be clearer now, 

<div class="parent-container">
  <div class='model-container' style="text-align: center;">
  <em>For selection to favor group-level traits in the face of individual costs, we need a system that promote variation between groups while maintaining low variation within groups.</em>
  </div>
</div>

Anthropologists argue that group-based cultural systems are like that. 

#### Return to Ilahita

We briefly come back to Ilahita's stories to clarify a few points about the scope of CGS, mechanisms, and levels of selection. 

Beyond stories and rites of terrors, Henrich argues that Ilahita's scaling up is due to intergroup competition among (39) clans. 

Intergroup competition is hypothesized as a key driver of cultural group selection. For instance, violent conflict such as wars is a great way to preserve strong between-group competition (increasing <em>p<sub>g</sub></em>) while maintaining conformity among your rank (reducing <em>p<sub>ig</sub></em>). Other mechanisms from cultural evolution theory further promote conditions for CGS to work, such as exhibiting preferentially learning from your peers (biased social learning; further reducing <em>p<sub>ig</sub></em>). 



#### For fun and glory: the many lives of the Price's equation 

<div class="caution">WIP; i'll add more interpretations and references when I have time</div>

<br>
<button on:click={() => handleClick()}>Toggle Price's Interpretation</button>

<!-- Start Multiverse -->

{#if currentForm == 0}

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_ineq_gardner}/> 
  <br><small>(Price equation; <a href="https://royalsocietypublishing.org/doi/10.1098/rstb.2019.0361">Gardner 2021</a>)</small>
  </div>
</div>

<p>In a nutshell, we are thinking about the covariance between average group fitness and average group allele frequency.</p>

{:else if currentForm == 1}

<div class="parent-container">
  <div class='model-container' style="text-align: center;"> <br> <Katex math={price_ineq}/> 
  <br><small>(Price equation with subpopulations as groups of individuals; McElreath & Boyd 2008 p.231)</small>
  </div>
</div>

<p>In a nutshell, we are thinking about the assemblage of two different population, and how the first assemblage maps onto the second after a single timestep. As Gardner says, it shows the driving forces behind evolution. We have the unit of selection, or the "particle" type indexed by <em>i</em>. There is the arena of selection, which is the aggregation unit notated by <em>l</em>. There is the character under selection, which is notated by <em>z</em>. And there is the target of selection, which is notated by <em>w</em>. This is the thing whose covariance with <em>z</em> drive natural selection.</p>


{:else if currentForm == 2}

<div class='model-container' style="text-align: center;"> <br>
    <div>Change in the average character value between parent and offspring</div> = <div>Covariance of fitness and character value across parents (selection)</div> - <div>Average of the product of fitness and the character difference between parent and offspring (non-selective transmission)</div><small>Gardner</small>
</div>

{:else} 

<div class="parent-container">
  <div class='model-container' style="text-align: center;"><br>The change in the <span style="color:#088F8F">average value of character among the 'parents'</span> and the average value of character among the 'offsprings'.<br>  
  <br><small>(Price equation in plain english)</small>
  </div>
</div>

<p>In a nutshell, we are thinking about the assemblage of two different population, and how the first assemblage maps onto the second after a single timestep.</p>

{/if}

#### I want more!

Cultural group selection is connected to the following topics in McElreath & Boyd's book:
- Reciprocity and collective action (ch. 4.5) 
  - Altruistic punishment; second-order dilemma (punishing those who failed to punish; ch. 4.5.2). Second-order dilemma could be a nice use of adaptive higher-order interactions.
  - More generally, n-person games (ch.4.5.1) and repeated interactions (ch. 4.1.1)
- Costly signal theory; what if people fake their intent (ch.5.1)
- <a href="https://sci-hub.ru/10.1006/jtbi.2001.2515">Group Beneficial Norms Can Spread Rapidly in a Structured Population (Boyd & Richerson 2002)</a>
- <a href="https://www.pnas.org/content/pnas/114/23/6068.full.pdf">Collective action and the evolution of social norm internalization (Gavrilets & Richerson 2017)</a>
- <a href="https://scholar.harvard.edu/files/henrich/files/what_makes_us_smart_final.pdf">What makes us smart? (Henrich & Muthukrishna 2023)</a>

In the next part of the series, we look at how CGS can relate to group-based master equations.
<style>

  /* Style for margin note */
.margin-note {
    font-size: 12px;
    width: 300px;  /* Set the width of the image */
    float: right;  /* Align the image to the right */
    margin-left: 20px; /* Space between the text and the image */
    margin-right: -300px; /* Pull the image into the right margin */
    position: relative; /* Position relative to its normal position */
    top: 0; /* Align the top of the image with the top of the paragraph */
}

.margin-note-big {
    width: 300px;  /* Set the width of the image */
    float: right;  /* Align the image to the right */
    margin-left: 20px; /* Space between the text and the image */
    margin-right: -300px; /* Pull the image into the right margin */
    position: relative; /* Position relative to its normal position */
    top: 0; /* Align the top of the image with the top of the paragraph */
}

/* Parent container style */
.parent-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;    /* Center vertically */
}

/* Model container style */
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

/* Scrollytelling stuff */

.step {
    height: 18vh;
    opacity: 0.3;
}

.step.active {
    opacity: 1;
}

section {
    position: relative;
}

.steps {
    position: relative;
    z-index: 2;
}

.sticky {
    position: sticky;
    margin-top: 30px;
    height: 90vh;
    top: 5vh; /* (100vh - 90vh) / 2 */
    z-index: 1;
    margin-bottom: 1rem;
    /* width: 100px;  Set the width to a fixed value */
    float: right;  /* Align the image to the right */
}

.reference-step {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1rem;
}
</style>