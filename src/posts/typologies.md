---
title: Group typologies as networks (WIP)
description: Compile all the (social) groups
date: '2024-07-08'
categories:
  - lit review
  - networks
  - GMEs
published: false
pinned: false
coverImage: ../thumbnails/stories/cgs-ver-abstract.webp
---
<script>
  import { onMount } from 'svelte';
  
 	import { scaleLinear } from 'd3-scale';
  import * as Plot from '@observablehq/plot';
  
  import FlickeringNetwork from '$lib/components/networks/FlickeringNetwork.svelte';
  import SimpleGME from '$lib/components/networks/SimpleGME.svelte';
  import ScatterGME from '$lib/components/networks/ScatterGME.svelte';
  import PersistenceNetwork from '$lib/components/networks/PersistenceNetwork.svelte';
  import ScatterPlot from '$lib/components/networks/ScatterPlot.svelte';
  import BoundariesNetwork from '$lib/components/networks/BoundariesNetwork.svelte';
  import CompositionNetwork from '$lib/components/networks/CompositionNetwork.svelte';
  import SimpleNetwork from '$lib/components/networks/SimpleNetwork.svelte';
  
  import ObservablePlot from '$lib/components/ObsPlot.svelte';
  import Scrolly from "$lib/components/helpers/Scrolly.svelte"
  
  // import { Cite } from '@citation-js/core';
  // import '@citation-js/plugin-doi';
  // import '@citation-js/plugin-csl';
  
  // let Bahrami2022Z = new Cite("10.2139/ssrn.4200629").format('citation', {format: 'html'})
  // let ThomassonOnto2016 = new Cite("10.1007/s11229-016-1185-y").format('citation', {format: 'html'})
  // let Battiston2020 = new Cite("10.1016/j.physrep.2020.05.004").format('citation', {format: 'html'})
  
  let currentStep = 0;
  let currentForm = 0;

  function handleClick() {
    currentForm = (currentForm + 1) % 4;
  } 

	const coords = [
		{ x: 0,   y: 134, r:10, i:0, group: "red",   type: "circle" },
		{ x: 43,  y: -33, r:10, i:1, group: "green", type: "square"},
		{ x: 87,  y: -87, r:10, i:2, group: "green", type: "square" },
		{ x: -23, y: 78,  r:10, i:3, group: "red",   type: "circle" },
		{ x: -85, y: 0,   r:10, i:4, group: "red",   type: "square"},
		{ x: 104, y: 32,  r:10, i:5, group: "red",   type: "square" },
    { x: 87,  y: -27, r:10, i:2, group: "green", type: "square" }
	];
	
  // We use colors for hyperedges, which mean we duplicate nodes. Also hulls are not allowed for pairwise edges...
  const coords_hons = [
		{ x: 0,   y: 134, r:10, i:0, group: "red",   type: "circle" },
		{ x: 43,  y: -33, r:10, i:1, group: "yellow", type: "square"},
		{ x: 43,  y: -33, r:10, i:1, group: "green", type: "square"},
		{ x: 87,  y: -87, r:10, i:2, group: "green", type: "square" },
		{ x: -23, y: 78,  r:10, i:3, group: "red",   type: "circle" },
		{ x: -85, y: 0,   r:10, i:4, group: "yellow",   type: "square"},
		{ x: -85, y: 0,   r:10, i:4, group: "red",   type: "square"},
		{ x: 104, y: 32,  r:10, i:5, group: "yellow",   type: "square" },
		{ x: 104, y: 32,  r:10, i:5, group: "red",   type: "square" },
    { x: 87,  y: -27, r:10, i:2, group: "green", type: "square" }
	];

  const edges = [
      { s: 0, t: 3 },
      { s: 1, t: 4 },
      { s: 1, t: 2 },
      { s: 4, t: 3 },
      { s: 3, t: 5 },
      { s: 1, t: 6 },
      { s: 1, t: 4 },
      { s: 2, t: 6 },
      { s: 4, t: 5 },
      { s: 1, t: 5 }
  ];

	let width = 400;
	let height = 400;
  
  const padding = { top: 20, right: 15, bottom: 20, left: 25 };

  $: xScale = scaleLinear()
		.domain([Math.min(...coords.map(d => d.x)), Math.max(...coords.map(d => d.x))])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([Math.min(...coords.map(d => d.y)), Math.max(...coords.map(d => d.y))])
		.range([height - padding.bottom, padding.top]);
  
  $: console.log(currentForm)
</script>


There are as many ways to describe social groups that there are field of studies out there. This diversity has led some people to say that building a parsimonious group typlogy is <a href="https://www.researchgate.net/publication/315973440_What_are_social_groups_Their_metaphysics_and_how_to_classify_them">hopeless</a>. That, grouping of humans are made up  anyway, and as such the exercice of grouping people is in itself a political act (Boyer p.56). Alternatively, we can follow <a href="https://doi.org/10.1007%2Fs11229-016-1185-y">Thomasson (2016)</a> and assume that, yes, groups exist. We go to clubs and union meetings. They seem pretty real. But instead we ask: what if social groups concepts (themselves) serve a purpose in giving a normative structure to our collective lives. 

We review how different human sciences are focusing on varying aspects of our normative lives at differents points in time and space and organizational scale. We cut through the diversity of viewpoint through the lens of network science; how all of this mumbo-jumbo can be expressed as different types of human interactions. But because networks are just low quality representations of our phenomenological lives, I try to point out where they fail at capturing what social scientists like to talk about. 


## Flatland

<div class="margin-note" style="display: flex; justify-content: center; align-items: center; margin-top: 1vh;">
  {#if currentForm === 0} 
  <button on:click={() => handleClick()}>Make it a network </button>
  {:else if currentForm === 1}
  <button on:click={() => handleClick()}>Make it higher-order </button>
  {:else if currentForm === 2}
  <button on:click={() => handleClick()}>Make it a master equation </button>
  {:else if currentForm == 3}
  <button on:click={() => handleClick()}>Make it simpler</button>
  {/if}
</div>

<div class="caution">
We use opacity to indicate when particular properties are relevant to different network representations. This is work in progress. 
</div>
<section>
	<div class="steps">
		<Scrolly bind:value={currentStep}>
        <!-- 
              ##################
              # 1. SCATTERPLOT #
              ##################
        -->
        <div class='step' class:active={currentStep === 0}>
          {#if currentForm === 0}
            <div class="margin-note ">
              <ScatterPlot {coords} {width} {height} />
            </div>
            <p><span class="small">Group size</span>: Without a network, people are just particles floating around. They can still do stuff, perhaps based on some average of the systems (mean-field). But right now, they are not even differentiated. They are no even jiggling around, which would be a sign of energy.</p>
          {:else if currentForm == 1}
           <p><span class="small">Group size</span>: How many people are in the system? What happens when you grow that number? With simple game-theoretic models of cooperation, more people playing the games means reciprocity get diluted. As a result, it becomes harder to kick start altruistic behaviors. <em>Related formalism: n-player games, ...</em></p>
          {:else if currentForm == 2}
            <p><span class="small">Group size</span>: How many people you can you reach in your social network? How many people would you be willing to ask to come help on moving's day, aka your Dunbar's number? <em>Related formalism: n-player games, ...</em></p>
          {:else if currentForm == 3}
            <p><span class="small">Group size</span>: How many people you can you reach in your social network? How many people would you be willing to ask to come help on moving's day, aka your Dunbar's number? <em>Related formalism: n-player games, ...</em></p>
          {/if}
        </div>
        <!-- 
              #########################
              # 2. INTERCONNECTEDNESS #
              #########################
        -->
        <div class='step' class:active={currentStep === 1}>
        {#if currentForm === 0}
          <p style={currentStep === 1 ? "opacity:0.3;" : "opacity:1;"}><span class="small">Interconnectedness</span>: Fancy word to talk about the structure of interactions, which in network science we refer as local and global network properties.</p>
        {:else if currentForm === 1}
          <div class="margin-note ">
            <SimpleNetwork {coords} {edges} {width} {height} />
          </div>
          <p><span class="small">Interconnectedness</span>: With social networks, the world opens up. You can calculate local- and global-properties of the network. Social (simple) networks are characterized by particular metrics, such as average degree distribution, density, etc. 
          </p>
        {:else if currentForm === 2}
          <div class="margin-note ">
            <div class="chart">
              <ObservablePlot 
              options={{ axis: null, height, width, margin: 10,
                marks: [
                    Plot.text(coords, {
                        x: d => xScale(d.x)+10, y: d => yScale(-d.y)+13, label: "i", fontSize: 10  }),
                    Plot.hull(coords_hons, {
                        x: d => xScale(d.x), y: d => yScale(-d.y), fill: "group", fillOpacity: 0.2, strokeWidth: 2,
                        }),
                    Plot.dot(coords, {
                        x: d => xScale(d.x), y: d => yScale(-d.y), r: 4, stroke: "black", fill: "grey" })
                ]
            }} />
            </div>
          </div>
          <p><span class="small">Interconnectedness</span>: Same people, but we assume three hyperedges. By adopting this network representation, we assume that interactions are group-based; two groups of two and one involving four people. Consider the case of coauthors on paper; by assuming group interactions, we say the group effort is different than the set of pairwise interactions that could produce the hyperedges. How exactly is an open question.</p>
        {:else if currentForm === 3}
          <div class='step' class:active={currentStep === 1}>
            <div class="margin-note">
              <ScatterGME height={150}/>
            </div>
            <p><span class="small">Interconnectedness</span>: Using GMEs, we now track the probability distribution of groups to be in any possible configuration of individual states. What does that mean? Say that we have ten groups (cliques really, which are maximally connected hyperedges) in our system. Each group contains two individuals, who can be in one of two states. Instead of counting hyperedges, we now ask about the probability of finding each group in particular state, namely (0,0), (1,0), (1,1). Here the probabilities are 30%, 50%, 20%. </p>
          </div>
        {/if}
        </div>
        <!-- 
              #########################
              # 3. PersistenceNetwork #
              #########################
        -->
        {#if currentForm == 0}
          <div class='step' class:active={currentStep === 2}>
          <p style={currentStep === 2 ? "opacity:0.3;" : "opacity:1;"}><span class="small">Persistence</span>: It is hard to talk about interconnectedness without the underlying assumptions of group persistence.</p>
          </div>
        {:else if currentForm === 1}
          <div class='step' class:active={currentStep === 2}>
          <p><span class="small">Persistence</span>: the duration of your interactions. But what do we mean. Does the interaction represents the duration of the face-to-face interactions, or long-lasting relationships (in the aggregate). It depends on the network interpretation.</p>
          <div class="margin-note ">
              <PersistenceNetwork {coords} {edges} width={400} height={400} />
          </div>
        </div>
        {:else if currentForm === 2}
          <div class='step' class:active={currentStep === 1}>
          <p><span class="small">Persistence</span>: Same ambiguity than in the pairwise world; are we talking about a group meeting face to face or some underlying group that meet to, say, carry on the paper.</p>
        </div>
        {:else if currentForm === 3}
          <div class='step' class:active={currentStep === 1}>
            <p><span class="small">Persistence</span>: Groups in GMEs are assumed to be maximally connected hyperedges, or cliques. For instance, household or workplace. This representation is group-based in that we start from the assumption that individuals are part of relevant units. As such, they must persist in time. Doing so allow us to ask equation about group-based interactions; similar to what we are doing with normal networks. Households interact with one another, while being in a particular state.</p>
        </div>
        {/if}
        <!-- 4. RepetitionNetwork -->
        {#if currentForm === 0}
          <div class='step' class:active={currentStep === 3}>
            <p style={currentStep === 3 ? "opacity:0.3;" : "opacity:1;"}><span class="small">Repetition</span>: the number of times an interaction happened over a period of time. Related to persistence in that many short-lasting interactions is very different than a few, long-lasting interactions (Tinder vs. Monogamy). <em>Related formalism: repeated games, burstiness</em></p>          
          </div>
        {:else if currentForm === 1}
            <div class='step' class:active={currentStep === 3}>
              <p><span class="small">Repetition</span>: the number of times an interaction happened over a period of time. Related with persistence. <em>Related formalism: repeated games, burstiness</em></p>          
            </div>
        {:else if currentForm === 2}
            <div class='step' class:active={currentStep === 1}>
              <p><span class="small">Repetition</span>: the number of times an interaction happened over a period of time. Related with persistence. <em>Related formalism: repeated games, burstiness</em></p>          
            </div>
        {:else if currentForm === 3}
            <div class='step' class:active={currentStep === 1}>
              <p><span class="small">Repetition</span>: In principle, we could talk the number of times group interact over a period of time. But as with many simpler models, we assume a mean-field theory across group interactions to simplify the maths.</p>          
            </div>
        {/if}
        <!-- 
              ####################################
              # 5. FlickeringNetwork (Synchrony) #
              ####################################
        -->
        <div class='step' class:active={currentStep === 4}>
          {#if currentForm === 0}
            <p style={currentStep === 4 ? "opacity:0.3;" : "opacity:1;"}><span class="small">Synchrony</span>: How nodes fire together. <em>Related formalism: Kuramoto models</em></p>
          {:else if currentForm === 1}
            <div class="margin-note ">
              <FlickeringNetwork {coords} {edges} width={400} height={400} />
            </div>
            <p><span class="small">Synchrony</span>: How nodes fire together. <em>Related formalism: Kuramoto models</em></p>
          {:else if currentForm === 2}
            <p><span class="small">Synchrony</span>: How does synchrony of, say, three-body interactions (3-node hyperedges) differs from that of pairwise networks. Do they synchronize more easily or is it harder to fire together. Are there more ways to get multistable states on the long run? What about motifs with more than 3-node hyperedges? <em>Related formalism: Higher-order Kuramoto models</em></p>
          {:else if currentForm === 3}
            <p><span class="small">Synchrony</span>:</p>
          {/if}
        </div>
        <!-- 
              ###########################
              # 6. DifferentiationNetwork 
              ###########################
        -->
        <div class='step' class:active={currentStep === 5}>
          {#if currentForm === 0}
            <p><span class="small">Differentiation</span></p>
          {:else if currentForm === 1}
            <p><span class="small">Differentiation</span>: How components of the systems have different (functional) roles. It can take many forms. <em>Leadership</em> is a role that is recurrent, which can be informed by different style of hierarchies (more or less steep). There could be another dimension here, namely specialization. The degree to which you only do one job.</p>
          {:else if currentForm === 2}
            <p><span class="small">Differentiation</span>: How components of the systems have different (functional) roles.</p>
          {:else if currentForm === 3}
            <p><span class="small">Differentiation</span>: How components of the systems have different (functional) roles.</p>
          {/if}
        </div>
        <!-- 
              ##########################
              #    7.Composition       #
              ##########################
        -->
        <div class='step' class:active={currentStep === 6}>
          {#if currentForm === 0}
          <p><span class="small">Composition</span>:.</p>
          {:else if currentForm === 1}
          <p><span class="small">Composition</span>:.</p>
          {:else if currentForm === 2}
          <p><span class="small">Composition</span>: Individuals can be in different states, aka suceptible or infected.</p>
          <div class="margin-note ">
              <CompositionNetwork {coords} {edges} width={400} height={400} />
          </div>
          {:else if currentForm === 3}
            <div class="margin-note">
              <SimpleGME height={1200}/>
            </div>
          <p><span class="small">Composition</span>: Groups changing states can be represented as probability flow. As you might have realized, GMEs assume the presence of group-structure population, which influence (dare I say, cause) individuals to be in a particular state. In doing so, we can model how group behaviors coevolve with individual behaviors. For instance, household behaviors impact the likelihood, often in a nonlinear manner, of individuals getting infected.</p>
        {/if}
        </div>
        <!--   
                ########################
                # 8. BoundariesNetwork #
                ########################
        -->
        <div class='step' class:active={currentStep === 7}>
        {#if currentForm == 0}
          <p style={currentStep === 7 ? "opacity:0.3;" : "opacity:1;"}><span class="small">Boundaries</span>: Porosity of what comes in and out of a group. <em>Related formalism: multilevel selection theory, </em></p>
        {:else if currentForm == 1}
          <p><span class="small">Boundaries</span>: Porosity of what comes in and out of a group. <em>Related formalism: multilevel selection theory, </em></p>
          <div class="margin-note ">
            <BoundariesNetwork {coords} {edges} width={400} height={400} />
          </div>
        {:else if currentForm === 2}
          <p><span class="small">Boundaries</span>: Porosity of what comes in and out of a group. <em>Related formalism: multilevel selection theory, </em></p>
          <div class="margin-note ">
              <div class="chart">
                <ObservablePlot 
                  options={{ axis: null, height, width, margin: 10,
                    marks: [
                        Plot.text(coords, {
                            x: d=>xScale(d.x)+10, y: d=>yScale(-d.y)+13, label: "i", fontSize: 10  }),
                        Plot.hull(coords_hons, {
                            x: d=>xScale(d.x), y: d=>yScale(-d.y), fill: "group", fillOpacity: 0.2, strokeWidth: 2,
                            }),
                        Plot.dot(coords, {
                            x: d=>xScale(d.x), y: d=>yScale(-d.y), r: 4, stroke: "black", symbol: "type", fill: "grey" })
                    ]
                }} />
                </div>
            </div>
        {:else if currentForm === 3}
          <p><span class="small">Boundaries</span>: Porosity of what comes in and out of a group. <em>Related formalism: multilevel selection theory, </em></p>
        {/if}
        </div>
        <!-- 
              ##########################
              # 9. Context-Depdendence #
              ##########################
        -->
        <div class='step' class:active={currentStep === 8}>
        {#if currentForm === 0}
            <p style={currentStep === 6 ? "opacity:0.3;" : "opacity:1;"}><span class="small">Context-dependence</span>: Node- and edge-features depend on what is happening on the network.
            </p>
          {:else if currentForm === 1}
            <p><span class="small">Context-dependence</span>: Node- and edge-features depend on what is happening on the network.</p>
          {:else if currentForm === 2}
            <p><span class="small">Context-dependence</span>: Node- and edge-features depend on what is happening on the network.</p>
          {:else if currentForm === 3}
            <p><span class="small">Context-dependence</span>: Depending on how the group is doing, people can choose to rewire to some other groups with some probability. This ought to resonate with WEIRD, characterize by their mobility, compared to less WEIRD population. </p>
          {/if}
        </div>
        <!-- 
              #############
              # INTERLUDE #
              #############
        -->
        <hr style="margin-bottom: 3vh">
        <details class="rabbit-hole" open="true">
        <summary>+ <span class="small">intentional layer</span></summary>
        Welcome to the philosophical rabbit hole. You still have time to hide this window if you are not in the mood. 
        <br><br>
        Philosophers argue that humans are special in that they can turn mere collection of individual actions into something more. What is meant by more? Some individual actions or dynamic properties of the graphs that can't be defined by individuals alone. 
        <br><br>
        For instance, think about behaviors motivated by normative expectations, or how group members expect one another to behave according to the ways of the group. What is meant here is that some actions and beliefs depend on how people derive meaning from assumed set of rules, which might different across members of the groups. If group memberships depend on the ability of individuals to follow the rules that the groups have established, but 
        <!-- Consider the act of friends' walking together; this is not just about moving at the same pace in the same direction. There is a joint commitment, or shared intentionality that is involved in this action. Philosophers like to say that "walking together" is what remains when you subtract the fact that two persons acted individually from the action of walking together. They refer to this broad idea as collective intentionality (CI). -->
        <br><br>
        Why is CI a problem for network science? 
        <br><br>
          <details class="rabbit-hole" style="margin-bottom: 3vh">
          <summary>+Intentionality is cultural</summary>
          However, we won't give it all to philosophers. We are claiming that this intentionality is not that universal thing that exists beyond culture. Adopting a cultural evolutionist stance, we claim that intentionality as been enculturated, as the rest of our (human) biology (CITE Boyd & Richerson, Henrich, Laland, and the rest of the gang). As such, the hard problem is to provide a natural history of our intentionality, not that our <em>res cogitans</em> is somehow of a different kind than the rest of the natural world. See Tomesello (all of his works) for what I mean by a natural history of X.
          </details>
        </details>
        <!--   
                ###########################
                # 9. Institutionalization #
                ###########################
        -->
        <div class='step' class:active={currentStep === 9}>
          {#if currentForm === 0}
          <p><span class="small">Institutional strength & formalism</span></p>
          {:else if currentForm === 1}
          <div class="margin-note ">
            <SimpleNetwork {coords} {edges} width={400} height={400} />
          </div>
          <p><span class="small">Institutional strength & formalism</span></p>
          {:else if currentForm === 2}
          <p><span class="small">Institutional strength & formalism</span>: institutions are group-level behaviors or beliefs that shape individual lives. These are higher-order interactions in the sense that this is a dynamics that involve groups. A group that experience <em>institutionalization</em> is a group that exhibit stronger, more formal institutions. It lives in a 2D plane because I do not want to claim that informal norms are less "strong".</p>
          {:else if currentForm === 3}
          <p><span class="small">Institutional strength & formalism</span>: Adopting a group-level perspective makes it easier to model institutionalization process. Now groups, not individuals, decide to scale up the level of policies that can change individual behaviors, in turn influencing composition.</p>
          {/if}
        </div>
        <!-- CognitiveDiversity -->
        <div class='step' class:active={currentStep === 11}>
        <div class="margin-note ">
          <SimpleNetwork {coords} {edges} width={400} height={400} />
        </div>
        <p><span class="small">Cognitive diversity</span>: Related to differentiation, but not reducible to it. We define cognitive diversity as sets of sociotechnical expertises and know-hows that interact in a way that is more than the sum of its part. This is the secret sauce of teams that are (actively?) driven by a shared goal.</p>
        </div>
    </Scrolly>
  </div>
</section>

## Cutting through social sciences using network science

Now we are leaving flatland and entering the messy world of reality, from the lens of different fields of study. We seek to map field of study onto related social groups, expressed as network types. 

<details style="margin-top: 2vh;">
<summary>Case study: Chimps, interconnectivity, and cumulative culture</summary>
<a href="https://www.biorxiv.org/content/biorxiv/early/2023/08/28/2023.08.14.553272.full.pdf">Gunasekaram et al. (2023)</a> provide a cool study of the relationship between interconnectedness of chimps communities and the cumulative cultural learning. Cumulative culture is defined as behaviors that are complex enough they can no longer be reinvented from scratch. Culture is defined as a set of behavioral traditions transmistted via social learning (as opposed to trials and errors). The gist is that if chimps are really good social learners (they can imitate), and that they are surrounded by a pool of (cultural) behaviors, this might drive incremental changes in complex behaviors. 

What is the network? The nodes are communities, but with behavioral traditions being overlayed with different shapes; and colors indicate nodes attributes. There are two kinds of interactions; (i) migration being traced with genetic flow and (i) shared behaviors. Interactions are pairwise, but they show subspecies as hyperedges (for illustration purposes). They note that only females are migrating because of the chimps' social structure, and only once. Behaviors are discretized as non-tool behaviors, 'simple' unitary tool use, or 'complex' toolset behaviors. 

The authors hypothesized that foraging behaviors without tools or with simple tools should exhibit weak associations with interconnectivity, while complex toolsets should be explained by migration between groups and localized based on within-region (group) interactions.

Based on the prediction of sharing behaviors, they find that complex tool behaviors correlate with strong within-group interactions, together with some between-group interactions (stimulating the diversity of cultural transmission). They also discuss how complex behaviors might have evolved from simpler forms of the same behaviors, via repurposing or incremental change.

Where are the groups? Hidden in the nodes, and as boundaries around subspecies. The grouping matters because it influences migration patterns, as mapped by genetic flow. Does that count as group effects? Maybe? The authors show that tool-making in chimps depend on group-level interactivity. By having between-group exchanges, some behaviors can be more complex than chimps figuring out on their own by trials and errors. 

That said, between-group exchanges is not the same group as group interactions, as defined in flatland. The chimps are not assumed to put their <em>mind together</em> to unlock new tools. As such, the groups were, arguably, reducible to the set of pairwise interaction. In other words, it was probably fine to sum up individual behaviors into an aggregate. 

You can think of this case study as baseline for social groups that are reducible to their constituents. How do we get from there to corporate entities that optimize their group-level interests, even though they might be mis-aligned with the intentions of individuals running the companies.
</details>

### Anthropology

<div class="tags">
		{#each ['kinship groups', 'ethnolinguistic groups', 'sex and age grouping'] as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
</div>

Anthropologists are interested in the structure and dynamics of kinship groups. Kinships are social groups that comprise sets of related individuals and exhibit a number of kin-based institutions, or social norms. Those institutions cut across all aspects of human lives---regulating marriages, descent, post-marital residence, family organizations and governance---making humans a deeply cultural species.

With kinship groups, there is a clear distinction between in-groups and out-groups, with ethnic markers being easily recognized by related groups. Within groups, there are clear rules about interactions that are intersect with age and sex. 

Kin-based institutions are still predominant in the world. In many countries, marrying your cousins is not taboo, elders still play important role in decision-taking, kins are allowed to police your kids' behaviors, and it is totally fine to promote your network's collective success whenever possible. All of this characterized kin-based psychology, as explored by Henrich (2020, p.37). As such, one can measure the kinship intensity of a society, with respect to what is known from tradition societies.

Anthropologists typically study <span class="small">small-ish</span> networks (compared to what is possible with modern institutions). Their networks exhibit <span class="small">persistent</span> pairwise (across individuals) and higher-order links (households, clans, federation). With the mix of <span class="small">repetition</span> and <span class="small">small size networks</span>, it is thought that indirect reciprocity can play a key role in determining the shape and dynamics of the social networks. Kinship networks have clear and explicit rules about <span class="small">boundaries</span>, that is, whose in and whose out, as well as norms that are specific to each group. Their networks are less <span class="small">stratified</span> than what is possible since the industrial revolution, potentially making governance more <span class="small">aligned</span> with individual's intentionalities.

Although it is depend on the time and place, it is not rare than tribes are at war, promoting strong <span class="small">boundaries</span>. This has many consequences, such as maintaining low within-group cultural variations, while increase between group variations. Given their governance type that is, and the number of rituals promoting synchrony, we assume that kinship's collective intentionalities ought to be more <span class="small">aligned</span> with the individuals. 

See <a href="https://pubmed.ncbi.nlm.nih.gov/22281599/">[1]</a>

### Sociology

<div class="tags">
		{#each ['voluntary orgs.', 'society'] as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
</div>

Sociologists are generally interested in the ways in which individuals are shaped by modern institutions, leading to all sorts of WEIRD behaviors such as suicide epidemics (Durkheim), gift economics (Mauss) and work ethics (Weber). They are interested in what happens to individuals in larger groups, that include more <span class="small">formal</span> institutions such as Western schooling systems and big religion. 

Like anthropology, sociologists have turned their gaze back on our scientific institutions. They are interested in the scientific enterprise as a WEIRD voluntary organization that has specific patterns in interconnectedness that ought to be based on shared scientific interests over kinships. They discs the emergence of formal and informal norms such as peer review, respecting big man with many citations, traveling for conferences, diminishing the values of paid works over passions, and so on.

WIP

### Organizational sciences

<div class="tags">
		{#each ['voluntary orgs.', 'firms', 'organograms', 'supply-chain'] as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
</div>

Organizational scientists don't shy away of calling organzations rational systems. They discuss corporate culture, how organizations evolve, and how organizations evolve. Organization have goals, performed by a set of purposeful and coordinated actors. 

Organizational scientists ask questions about how specific types of groups promote some individuals but not others; and how this impact the overall culture of an organization. They dive into administrative behaviors (H. Simon), and how to make sense of bureaucraties and institutionalization process (groups of people scaling up by adopting formal rules). This is the realm of impersonal relationships, binded together by corporate behemoths.

WIP

### Collective action theorists

<div class="tags">
		{#each ['public goods', 'Ostromology'] as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
</div>

How do groups of people address rational (or selfish) behaviors with respect to openly available resources? Not so long ago, the commonly held view was that selfish behaviors would inevitably lead to the depletion of common-pool resources. The thinking was that everybody would be better off fishing a bit less. But since individuals seek to maximize their personal gains, they will end up depleting the resources. Thus, top-down institutions were thought to be essentials in promoting sustainability. The question was which one; institutions promoting free-market or that of centralized governements who sought to regulate the market.

Collective action theory offered a third approach on the topic. They showed that people are able self-organize to make sure common-pool resources are sustainable, without necessary the need of top-down institutions. Collection theory led to a rich literature on public good games, and under which conditions can self-governance can insure the sustainability of common-pool resources. That is, how groups can reach optimum group investment. Here, the groups are defined as set of individuals that cannot be easily prevented to access shared resources, aka fisheries, forest, and even free and open-source software.

_refs_: <a href="https://wiki.santafe.edu/images/e/e8/PublicGoods.pdf">[2]</a>,<a href="https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=ef0d07a4cca1d8eaa4c0b8f6bf922b3c18cf5e7f">[3]</a>,<a href="https://arxiv.org/pdf/1011.1293">[4]</a>, <a href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2012.0997">[5]</a>, 


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

  .tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
  
</style>