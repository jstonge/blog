---
title: Group-based master equations as (many) repeated games
description: Public good games as group-based master equations.
date: '2024-07-16'
categories:
  - lit review
published: false
pinned: false
coverImage: ../thumbnails/stories/cgs-ver-abstract.webp
---

<script>
  import Katex from '$lib/components/Katex.svelte';
</script>

<div class="tip">This post is part of a series on understanding the models of cultural group selection (CGS), and how they relate to cooperative modeling in group-based master equations. We draw from statististical physics of public good games (<a href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2012.0997">Perc et al. 2013</a>), cultural group selection (<a href="https://academic.oup.com/chicago-scholarship-online/book/33152">McElreath & Boyd 2008, ch.6</a>), and (<a href="https://www.semanticscholar.org/reader/83e460021fba8d281106ada60050b53ccf7499f8">St-Onge et al. 2023</a>). See <a href="https://jstonge.vercel.app/cgs">this</a> blog post for an introduction to the formalism of CGS.</div>

Public good games (PGG) are <em>n-persons</em> games that involve a collective action dilemma; that is, individuals would do better as a group if they all collaborated but each individuals are better off by defecting. 

In PGG, we typically imagine that each round a group of <em>n</em> individuals is drawn from a large population to play the game, and that the cost and benefits depend on <em>n</em>. How exactly is the fun part. The simplest approach is to say that benefits are evenly shared among the group, or <em>b/n</em>. From the get-go we note that as the number of cooperators increase you get a smaller share. 

In <em>repeated</em> scenario, the group ought to play again together in the next round with probability <em>w</em>. As with other models of reciprocity, the relative cost-benefits ratio is heavily impacted even by that possibility. In collective action problems, it might depend on some threshold about how many people collaborated in the previous round (analogous to the infamous Axelrod's Tit-for-Tat strategy). 

Following <a href="">McElreath & Boyd 2007, ch 4.5</a>, let <em>T<sub>i</sub></em> be the strategy of individuals <em>i</em>. We won't go in the details, but the idea is to specify what happens when that or that happens. For instance, what if <em>T<sub>i</sub></em> always reciprocate on the first round, then it depends on <em>i</em> other individuals having cooperated on the previous round. You can play with assumptions about how many people should have collaborated for <em>i</em> to collaborate. 

Assuming <em>i</em> collaborate when everybody do their part, you ask what happens when you let a mutant loose in that sea of conditional cooperators. In the book, we find that this strategy is stable against systematic defection when

<div class="container">
  <Katex math={"\\frac{b-c}{1-w} > \\frac{n-1}{n}b"}/>
</div>

The key insight here is that provided you have a Tit-for-Tat strategy fighting against defectors, altruism is harder to kick start with larger groups because it gets harder and harder to get everybody on board. One way out of this conundrum is altruistic punishment, which has been explored at large by the game theory aficionados.

### Adding structure to the problem

<div style="width: 90%; margin-top: 2vh; margin-bottom: 2vh;">
  <img src="https://raw.githubusercontent.com/jstonge/blog/main/static/ohtsukiSimple2006.webp"/>
  <figcaption class="container"><b>Fig. 1 Ohtsuki et al. 2006</figcaption>
</div>
Having a structured population is another way to get assortment; with cooperators interacting more often than not they are going to meet repeatedly, favoring the evolution of cooperation (<a href="https://www.semanticscholar.org/paper/A-simple-rule-for-the-evolution-of-cooperation-on-Ohtsuki-Hauert/ee557d8918504b3098de11e696b9b5c484702ae1">Ohtsuki et al. 2006</a>). Starting in the 2000s, scale-free networks were all the hype in that literature; that is, if degree distribution <em>k</em> is dependent on 
<Katex math={"d(k) \\sim k^{-\\gamma}"}/> with exponent <Katex math={"2 \\leq \\gamma \\leq 3"}/>, individuals are strongly correlated (<a href="https://www.semanticscholar.org/paper/Scale-free-networks-provide-a-unifying-framework-of-Santos-Pacheco/824f6e30654db760358e59719779fb7285d18332">Santos and Pacheco 2005</a>). A well known results by Ohtsuki et al. (2006) is that cooperation can evolve simply with <Katex math={"b/c \\gt k"}/>, or if the cost-benefit ratio exceeds the average numbers of neighbours <em>k</em>. 

<div class="margin-note">
  <img src="https://raw.githubusercontent.com/jstonge/blog/main/static/rsif20120997f08.webp"/>
  <figcaption class="container"><b>Fig. 8 Perc et al. 2013</figcaption>
</div>

It was not long before physicists started exploring how features of pairwise interactions generalize to higher-order networks (<a href="https://www.nature.com/articles/nature06940">Santos et al. 2008</a><a href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2012.0997">Perc et al. 2013</a>, <a href="https://www.nature.com/articles/s41562-020-01024-1">Alvarez-Rodriguez et al. 2021</a>). In this case, public good games are simply taken to be group interactions played on structured populations. And much of the early modeling efforts was to see how this choice of structures impact results from pairwise land. 

With group interactions, we now have degree heterogeneity in how many games people will play based on number of neighbours of individuals, or <em>k<sub>i</sub></em>. For instance, the focal node in the plot above has <em>k=4</em>, meaning it is assume to play four games with different subsets of individuals (and with groups of different sizes). Santos et al. (2008) found that a fix costs of playing a game facilitate the emergence of cooperation compared to pairwise networks. They attribute this phenomenon to the social diversity entails by being involved in games with many groups of people, leading to a "diversity of investments".

The realm of PGGs can be splited across at least three different communities; (B) biology-is-enough (Nowak et al), (C) culture-inclined people (Boyd, Richerson, Bowles, Gintis, et al.), and (P) physics of PGGs (Perc, Gómez-Gardeñes, Moreno et al). There is also the common-pool resources people (CPR; Ostrom et al.), which are more interested in how communities self-organize to promote public goods sustainability. Lastly, there are people who are interested in what is happenning out there, both in laboratories and across cultures. We come back to them later. They all share the common premise that groups in collective action problem are defined by people participating to public good games; you select <em>n</em> individuals from your population to play a game, then you see what mechanism can lead to a an evolutionary stable state of the altruistic behaviors. They agree that cooperation in larger groups is something to be explained, as it does not result from classical game theory. They tend to disagree on the answer. A solution proned by (B) and (P) is that more structured populations together with classical mechanisms altruistic behaviors (aka reciprocity) can explain large-scale cooperation.  

All PGGs share that there is a cost  <Katex math="\alpha(p_c)" /> and benefit function <Katex math="\beta(p_c)" /> and <Katex math="p_c" /> is the fraction of cooperators. PGGs are interested in the change in the fraction of cooperators under the effect of Darwinian selection, encapsulate by the replicator dynamics <Katex math="\dot x = x(1-x)[W_C(x)-W_D(x)]"/> [TODO explain that, before moving to GMEs]

#### The probability flow of PPGs

Instead of following the fraction of cooperators in the population, we first 

<div class="container">
<Katex math={"\\dot{G}_{C,D} = "}/>
</div>


#### I want more

After the original scenarios from the last century, PGG experienced an evolutionary radiation. Here are a few ways one could go from here:

 + Stochasticity (<a href="https://www.semanticscholar.org/paper/Emergence-of-cooperation-in-public-goods-games-Kurokawa-Ihara/d21ada3854f672e62a9c2a1563afa0cd0d988beb?sort=total-citations">Kurokawa et al. 2009</a>)
 + Stochasticity + public resources depend on cooperative strategies: cooperative strategies benefit from sustainability, aka public good as a function of strategy (<a href="https://www.semanticscholar.org/paper/Evolution-of-cooperation-in-stochastic-games-Hilbe-Simsa/ff49474432459bf295a7d2a775b1719c4fa09755">Hilbe et al. 2018</a>)
 + Continuous cooperation: cooperation and defection is a spectrum (<a href="https://www.semanticscholar.org/paper/Revisiting-%22The-evolution-of-reciprocity-in-sizable-Takezawa-Price/14dda9965c8f540fa713e260544aab2620f486da">Takezawa & Price 2010</a>)
 + Inequality in payoffs: people differs in costs and how much they benefit from public goods (<a href="https://www.semanticscholar.org/paper/Evolution-of-cooperation-in-stochastic-games-Hilbe-Simsa/ff49474432459bf295a7d2a775b1719c4fa09755">Hauser et al. 2019</a>)
 + Volunteering: people remains anonymous facilitate cooperation in sizable groups, even if interactions are not repeated (<a href="https://www.semanticscholar.org/paper/Volunteering-as-Red-Queen-Mechanism-for-Cooperation-Hauert-Monte/d6b69b64de3f3aecdb87b9863d3a6f089fa03d3b">Hauert et al. 2002</a>)
 + Multiple PGG: people can play different public good games at once (<a href="https://www.semanticscholar.org/paper/An-Institutional-Mechanism-for-Assortment-in-an-of-Smaldino-Lubell/aa2adf8477adaabd6336636f3ae8fd573e18a848">Smaldino & Lubel 2011</a>)

<!-- <div class="table-container">
  <table class="tg"><thead>
    <tr>
      <th class="tg-0pky"></th>
      <th class="tg-0pky"><span style="font-weight:400;font-style:normal">quick and dirty</span></th>
      <th class="tg-0pky">good coding practices</th>
    </tr></thead>
    <tbody>
      <tr>
        <td class="tg-0pky"><span style="font-weight:400;font-style:normal">quick and dirty</span></td>
        <td class="tg-0pky">0</td>
        <td class="tg-0pky">b/n</td>
      </tr>
      <tr>
        <td class="tg-0pky">good coding practices</td>
        <td class="tg-0pky">b/n - c</td>
        <td class="tg-0pky">b/n - c/2</td>
      </tr>
    </tbody>
  </table>
</div> -->



<style>
  .container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;    /* Center vertically */
    margin-top: 2vh;
  }

  /* .tg  {
    border-collapse:collapse;
    border-spacing:0;
  }

  .tg td{
    border-color:black;
    border-style:solid;
    border-width:1px;
    font-family:Arial, sans-serif;
    font-size:14px;
    overflow:hidden;
    padding:10px 5px;
    word-break:normal;
    }

  .tg th{
    border-color:black;
    border-style:solid;
    border-width:1px;
    font-family:Arial, sans-serif;
    font-size:14px;
    font-weight:normal;
    overflow:hidden;
    padding:10px 5px;
    word-break:normal;
    }

  .tg .tg-0pky{
    border-color:inherit;
    text-align:left;
    vertical-align:top
    } */

  /* Style for margin note */
  .margin-note {
      font-size: 12px;
      width: 30vw;  /* Set the width of the image */
      float: right;  /* Align the image to the right */
      margin-top: 2vw; /* Space between the text and the image */
      margin-left: 2vw; /* Space between the text and the image */
      position: relative; /* Position relative to its normal position */
  }

</style>