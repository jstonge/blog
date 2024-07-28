<script>
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let visible = false;
  let taglineIns = "";
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 1000); 

    setTimeout(() => {
      taglineIns = "models"; // Assuming this is when your tagline animation or rendering completes
    }, 1000); 
  });

  onDestroy(() => {
    // Clean up any transitions or effects if needed
  });
</script>

<div class="hero">
  <div class="container">
    <div class="title-text">
      {#if visible}
        <div class="centered" out:fly={{ y: -20, duration: 400 }}>
          {#each 'Golems & Humans' as char, i}
            <span in:fade|global={{ delay: 10 + i * 15, duration: 200 }}>{char}</span>
          {/each}
        </div>
        <div class="subtitle">
          <span class:is-del={taglineIns} in:fly={{ y: 20, duration: 12, delay: taglineIns ? 2 : 40 }}>
            {@html `
              Understanding the coevolution of 
              <span style="text-decoration: underline;">group dynamics</span> 
              and 
              <span style="text-decoration: underline;">computational thinking</span> in science using interactive data visualization and mathematical 
              <del>golems</del>
            `}
            <ins class:is-visible={taglineIns}>{taglineIns}.</ins>
          </span>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>

.hero {
  background: linear-gradient(90deg, #ebc7a3 0%, #87bd8b 100%);
  padding: 15rem 1rem; /* Padding top and bottom - w/o it, small screen subtitle goes awry */
  height: 80vh;
  display: flex;
}

.container {
  min-height: 100%; /* Ensure the container fills the hero section */
}

.title-text {
  padding-top: 1rem;
}

.centered {
  text-align: center;
  position: relative;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5vw;
  font-family: var(--font-sans);
  letter-spacing: 0.12em;
  color: var(--text-3-dark);
  font-weight: 400;
  z-index: 1;
}

.subtitle {
  text-align: center;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 2vw;
  letter-spacing: 0.1em;
  color: var(--text-3-dark);
  font-weight: 200;
  z-index: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

/* Title animation  */

:global(del) {
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-repeat: no-repeat;
  background-size: 0 0.1em;
  background-position: 0 50%;
  color: var(--text-3-dark);
  background-color:  rgba(255, 255, 255, 0);
  transition: background-size 1.2s ease-in;
}

:global(.is-del del) {
  background-size: 100% 0.1em;
}

:global(del::before) {
  content: " [deletion start] ";
}

:global(del::after) {
  content: " [deletion end] ";
}

ins {
  text-decoration: none;
  opacity: 0;
  transition: opacity 1s ease-in 1s;
  color: var(--text-3-dark);
  background-color:  rgba(255, 255, 255, 0)
}

ins.is-visible {
  opacity: 1;
}

.centered span {
  will-change: filter;
}


/* On small screens, hide the nav and show the burger */
@media only screen and (max-width: 767px) {
  .centered {
    font-size: 8vw;
  }

  .subtitle {
    font-size: 4.5vw;
    text-align: center;
  }
  
}
</style>
