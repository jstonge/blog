<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { windowHeight } from "../stores/global.js";

  let visible = false;
  onMount(() => {
      visible = true;
  });
</script>

<section 
  style="min-height: {$windowHeight ? `${$windowHeight * 1.01}px` : '101vh'}; perspective: 100vw;" 
  class="banner" 
  id="home">
  <div class="hero-container">
      <div class="title-text">
          {#if visible}
          <div class="centered" out:fly={{ y: -20, duration: 400 }}>
              {#each 'Advanced Golemology' as char, i}
              <span in:fade|global={{ delay: 1000 + i * 150, duration: 400 }}>{char}</span>
              {/each}
          </div>
          <div class="subtitle" in:fly={{ y: 20, duration: 1200, delay: 4300 }}>
              <span>Understanding the mind of computational golems (models) using statistics, interactive data visualizations, and storytelling. </span>
          </div>
          {/if}
      </div>
  </div>
</section>

<style>
  section {
      width: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      transition: height 100ms ease;
  }

  .banner {
      height: 700px;
      text-align: center;
      background: linear-gradient(90deg, #ebc7a3 0%, #87bd8b 100%);
      background-size: cover;
      margin-top: -5rem; 
      margin-bottom: 2rem;
  }

  .title-text {
      padding-top: 1rem;
  }

  .centered {
      position: absolute;
      top: 45%;
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
      position: absolute;
      top: calc(45% + 10rem);
      left: 50%;
      transform: translate(-50%, 0);
      font-size: 2vw;
      letter-spacing: 0.1em;
      color: var(--text-3-dark);
      font-weight: 200;
      z-index: 1;
  }

  .hero-container {
      line-height: 0.85;
      user-select: none;
  }

  .centered span {
      will-change: filter;
  }

  @media screen and (max-width: 768px) {
      .centered {
          font-size: 8vw;
      }

      .subtitle {
          font-size: 5.75vw;
      }
  }

  @media screen and (max-width: 468px) {
      .centered {
          font-size: 12vw;
      }

      .subtitle {
          font-size: 8vw;
      }
  }
</style>
