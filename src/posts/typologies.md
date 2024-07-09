---
title: Group typologies (WIP)
description: Compile all the (social) groups
date: '2024-07-08'
categories:
  - lit review
published: false
pinned: false
coverImage: ../thumbnails/stories/cgs-ver-abstract.webp
---
<script>
  
 	import { scaleLinear } from 'd3-scale';
  import FlickeringNetwork from '$lib/components/networks/FlickeringNetwork.svelte';
  import PersistenceNetwork from '$lib/components/networks/PersistenceNetwork.svelte';
  import ScatterPlot from '$lib/components/networks/ScatterPlot.svelte';
  import BoundariesNetwork from '$lib/components/networks/BoundariesNetwork.svelte';
  import SimpleNetwork from '$lib/components/networks/SimpleNetwork.svelte';
  import Scrolly from "$lib/components/helpers/Scrolly.svelte"
  
  let currentStep = 0;

	const coords = [
		{ x: 0,   y: 134, r:10, i:0, type: "red" },
		{ x: 43,  y: -33, r:10, i:1, type: "green"},
		{ x: 87,  y: -87, r:10, i:2, type: "green" },
		{ x: -23, y: 78,  r:10, i:3, type: "red" },
		{ x: -85, y: 0,   r:10, i:4, type: "red"},
		{ x: 104, y: 32,  r:10, i:5, type: "red" }
	];

  const edges = [
      { s: 0, t: 3 },
      { s: 1, t: 4 },
      { s: 1, t: 2 },
      { s: 4, t: 3 },
      { s: 3, t: 5 },
      { s: 4, t: 5 },
      { s: 1, t: 5 }
  ];

	let width = 300;
	let height = 400;
</script>

There are as many ways to describe social groups that there are field of studies out there. This diversity has led some people to say that building a parsimonious group typlogy is <a href="https://www.researchgate.net/publication/315973440_What_are_social_groups_Their_metaphysics_and_how_to_classify_them">hopeless</a>. That, grouping of humans are made up  anyway, and as such the exercice of grouping people is in itself a political act (Boyer p.56). Alternatively, we can follow <a href="https://doi.org/10.1007%2Fs11229-016-1185-y">Amy Thomasson (2016)</a> and assume that, yes, groups exist. We go to clubs and union meetings. They seem pretty real. But instead we ask: what if social groups concepts (themselves) serve a purpose in giving a normative structure to our collective lives. 

We review how different field of studies have looked at social groups, looking through the lens of network science. Because networks are just low quality representations of our phenomenological lives, I point out where they fail at capturing what social scientists like to talk about. 

<div class="margin-note" style="border-radius: 6px; border: 1px solid black; padding: 0.5rem;">
TODO: Add widget to toggle between simple and higher-order networks.
</div>

## Flatland


<section>
	<div class="steps">
		<Scrolly bind:value={currentStep}>
        <!-- PAIRWISE STRUCTURE -->
        <div class='step' class:active={currentStep === 0}>
          <div class="margin-note ">
            <ScatterPlot {coords} width={400} height={400} />
          </div>
          <p><span class="small">Group size</span>: How many people you can you reach in your social network? How many people would you be willing to ask to come help on moving's day, aka your Dunbar's number? <em>Related formalism: n-player games, ...</em></p>
        </div>
        <div class='step' class:active={currentStep === 1}>
        <div class="margin-note ">
          <SimpleNetwork {coords} {edges} width={400} height={400} />
        </div>
        <p><span class="small">Interconnectedness</span>: Fancy word to talk about the structure of interactions, which in network science we refer as local and global network properties.
        </p>
        </div>
        <!-- PAIRWISE DYNAMICS -->
        <div class='step' class:active={currentStep === 2}>
        <div class="margin-note ">
          <PersistenceNetwork {coords} {edges} width={400} height={400} />
        </div>
          <p><span class="small">Persistence</span>: the duration of your (face-to-face?) interactions.</p>
        </div>
        <div class='step' class:active={currentStep === 3}>
        <p><span class="small">Repetition</span>: the number of times an interaction happened over a period of time. Covary with persistence. <em>Related formalism: repeated games, burstiness</em></p>          
        </div>
        <div class='step' class:active={currentStep === 4}>
        <p><span class="small">Synchrony</span>: How nodes fire together.</p>
        <div class="margin-note ">
          <FlickeringNetwork {coords} {edges} width={400} height={400} />
        </div>
        </div>
        <div class='step' class:active={currentStep === 5}>
        <p><span class="small">Differentiation</span>: How components of the systems have different (functional) roles.</p>
        </div>
        <div class='step' class:active={currentStep === 6}>
        <p><span class="small">Context-dependence</span>: Node- and edge-features depend on what is happening on the network.</p>
        </div>
        <div class='step' class:active={currentStep === 7}>
        <div class="margin-note ">
          <BoundariesNetwork {coords} {edges} width={400} height={400} />
        </div>
        <p><span class="small">Boundaries</span>: Porosity of what comes in and out of a group. <em>Related formalism: multilevel selection theory, </em></p>
        </div>
        <!-- #########################
             #  INTENTIONALITY LAYER #
             ######################### -->
        <hr style="margin-bottom: 3vh; width: 70vw;">
        <details class="rabbit-hole">
        <summary>+ <span class="small">cultural intentionality layer</span></summary>
        Wait, why? What is happening. Welcome to the philosophical rabbit hole. As with indigenous land, we are listening to philosophers and qualitative scientists and recognizing that networks lack something deep and important; lets call it intentionality (see <a href="https://plato.stanford.edu/entries/phenomenology/">phenomenology</a> entry on Stanford Encyclopedia of Philosophy if you are in the mood. You have still time to close that window if you wish). 
        <br><br>
        Intentionality is hidden from mere mortal eyes. It is this "thing" (process? active inference? <em>res cogitans</em>? Yes, why not go all the way to Descartes. This is all the stuff after all) that we cannot get rid of in our Western ontology. <del>This sensation that we are special snowflake</del> We embrace that the idea that there is somethig to explain; that intentionality matters when it comes to explain the reducibility of groups to individuals. That is, the age old question of whether groups have, somehow, some existence that is "more" than the sum of individuals.
        <br><br>
        In practice, this means we need something more than the structure and dynamics of networks to explain human social groups. For now, this take the form of concepts from qualitative sciences that we assume, someho, emerge from our social networks.
        <br><br>
        <details class="rabbit-hole" style="margin-bottom: 3vh">
        <summary>Intentionality is cultural</summary>
        However, we won't give it all to philosophers. We are claiming that this intentionality is not that universal thing that exists beyond culture. Adopting a cultural evolutionist stance, we claim that intentionality as been enculturated, as the rest of our (human) biology (CITE Boyd & Richerson, Henrich, Laland, and the rest of the gang). As such, the hard problem is to provide a natural history of our intentionality, not that our <em>res cogitans</em> is somehow of a different kind than the rest of the natural world. See Tomesello (all of his works) for what I mean by a natural history of X.
        </details>
        </details>
        <!-- #########################
             #  INTENTIONALITY LAYER #
             ######################### -->
        <div class='step' class:active={currentStep === 8}>
        <div class="margin-note ">
          <SimpleNetwork {coords} {edges} width={400} height={400} />
        </div>
        <p><span class="small">Institutional strength & formalism</span>: institutions are group-level behaviors or beliefs that shape individual lives. These are higher-order interactions in the sense that this is a dynamics that involve groups. A group that experience <em>institutionalization</em> is a group that exhibit stronger, more formal institutions. It lives in a 2D plane because I do not want to claim that informal norms are less "strong".</p>
        </div>
        <div class='step' class:active={currentStep === 9}>
        <p><span class="small">Collective Intentionality</span>: Aboutness of groups, which might or might not be aligned with that of individuals.</p>        
        </div>
        <div class='step' class:active={currentStep === 10}>
        <div class="margin-note ">
          <SimpleNetwork {coords} {edges} width={400} height={400} />
        </div>
        <p><span class="small">Cognitive diversity</span>: Related to differentiation, but not reducible to it. We define cognitive diversity as sets of sociotechnical expertises and know-hows that interact in a way that is more than the sum of its part. This is the secret sauce of teams that are (actively?) driven by a shared goal.</p>
        </div>
        <div class='step' class:active={currentStep === 11}>
        <p><span class="small">Presence (experimental)</span>: Most of what I discussed about is derived from some literature. Here I am making this up to distinguish face-to-face from impersonal interactions. With impersonal interactions, I summon the idea of "presence in absence" (I think this is from Heidegger, but shhh). Some people (aka Searle) call that the "we-" attitude (that is in the mind of the beholder).</p>
        </div>
    </Scrolly>
  </div>
</section>

## Embracing diversity

### Anthropology

Anthropologists are interested in the structure and dynamics of kinship groups. Kinships are social groups that comprise sets of related individuals and exhibit a number of kin-based institutions, or social norms. Those institutions cut across all aspects of human lives---regulating marriages, descent, post-marital residence, family organizations and governance---making humans a deeply cultural species.

With kinship groups, there is a clear distinction between in-groups and out-groups, with ethnic markers being easily recognized by related groups. Within groups, there are clear rules about interactions that are intersect with age and sex. 

Kin-based institutions are still predominant in the world. In many countries, marrying your cousins is not taboo, elders still play important role in decision-taking, kins are allowed to police your kids' behaviors, and it is totally fine to promote your network's collective success whenever possible. All of this characterized kin-based psychology, as explored by Henrich (2020, p.37). As such, one can measure the kinship intensity of a society, with respect to what is known from tradition societies.

Anthropologists typically study <span class="small">small-ish</span> networks (compared to what is possible with modern institutions). Their networks exhibit <span class="small">persistent</span> pairwise (across individuals) and higher-order links (households, clans, federation). With the mix of <span class="small">repetition</span> and <span class="small">small size networks</span>, it is thought that indirect reciprocity can play a key role in determining the shape and dynamics of the social networks. Kinship networks have clear and explicit rules about <span class="small">boundaries</span>, that is, whose in and whose out, as well as norms that are specific to each group. Their networks are less <span class="small">stratified</span> than what is possible since the industrial revolution, potentially making governance more <span class="small">aligned</span> with individual's intentionalities.

Although it is depend on the time and place, it is not rare than tribes are at war, promoting strong <span class="small">boundaries</span>. This has many consequences, such as maintaining low within-group cultural variations, while increase between group variations. Given their governance type that is, and the number of rituals promoting synchrony, we assume that kinship's collective intentionalities ought to be more <span class="small">aligned</span> with the individuals. 

### Sociology

Sociologists are generally interested in the ways in which individuals are shaped by modern institutions, leading to all sorts of WEIRD behaviors such as suicidal epidemics and work ethics. They are interested in what happens to individuals in larger groups, that include more <span class="small">formal</span> institutions such as Western schooling systems and big religion. 

Like anthropology, sociologists have turned their gaze back on our scientific institutions. They are interested in the scientific enterprise as a WEIRD voluntary organization that has specific patterns in interconnectedness that ought to be based on shared scientific interests over kinships. They discs the emergence of formal and informal norms such as peer review, respecting big man with many citations, traveling for conferences, diminishing the values of paid works over passions, and so on.

WIP

<style>
  .small {
  font-variant: small-caps;
  }

  .rabbit-hole {
    font-size: 16px
  }

  :global(del) {
    background-color:  rgba(255, 255, 255, 0);
    color: var(--text-3-dark);
  }

  .margin-note {
      width: 200px; 
      float: right; 
      margin-left: 20px;
      margin-right: -220px;
      position: relative;
      top: 0; 
  }

	.chart {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 200px;
	}

  @keyframes flicker {
		0% { opacity: 1; }
		50% { opacity: 0; }
		100% { opacity: 1; }
	}
	
	.flicker {
		animation: flicker infinite;
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