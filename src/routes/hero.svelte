<script>
    import { onMount, onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  

  let visible = false;
  let taglineIns = "";
  onMount(() => {
    // Simulate your animation duration and delay
    setTimeout(() => {
      visible = true;
    }, 'Golems & Humans'); // Adjust timing based on your animation

    // Simulate your tagline animation or rendering
    setTimeout(() => {
      taglineIns = " models"; // Assuming this is when your tagline animation or rendering completes
    }, 5000); // Adjust timing based on your animation
  });

  onDestroy(() => {
    // Clean up any transitions or effects if needed
  });
  
</script>

<section class="banner" id="home">
    <div class="title-text">
      {#if visible}
        <div class="centered" out:fly={{ y: -20, duration: 400 }}>
          {#each 'Golems & Humans' as char, i}
            <span in:fade|global={{ delay: 1000 + i * 150, duration: 400 }}>{char}</span>
          {/each}
        </div>
        <div class="subtitle">
            <span class:is-del={taglineIns} in:fly={{ y: 20, duration: 1200, delay: taglineIns ? 0 : 4300 }}>
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
  </section>
  
<style>
    section {
      margin-bottom: 4em;
    }

    :global(del) {
      text-decoration: none;
      background-image: linear-gradient(currentColor, currentColor);
      background-repeat: no-repeat;
      background-size: 0 0.1em;
      background-position: 0 50%;
      transition: background-size 1s ease-in;
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
    }
  
    ins.is-visible {
      opacity: 1;
    }

    :global(.nowrap) {
      white-space: nowrap;
    }

  :global(del) {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-repeat: no-repeat;
    background-size: 0 0.1em;
    background-position: 0 50%;
    transition: background-size 1s ease-in;
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
      position: absolute;
      top: 55%;
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

  .underscore {
    text-decoration: underline;
  }

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

  @media screen and (max-width: 768px) {
      .centered {
          font-size: 8vw;
      }

      .subtitle {
          font-size: 3.75vw;
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


