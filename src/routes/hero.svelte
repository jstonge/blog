<script>
    import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

    let visible = false;
	onMount(() => {
		visible = true;
	});

</script>

<section class="banner" id="home">
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
</section>

<style>
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
    font-size: 5vw; /* Adjust as needed */
    font-family: 'Overpass';
    letter-spacing: 0.12em;
    color: var(--text-3-dark);
    font-weight: 400;
    z-index: 1; /* Ensure it's above the posts list */
	}

    .subtitle {
        position: absolute;
        top: calc(45% + 10rem); /* Adjust as needed */
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 2vw; /* Smaller font size */
        letter-spacing: 0.1em;
        color: var(--text-3-dark);
        font-weight: 200;
        z-index: 1; /* Ensure it's above the posts list */
    }


	.centered span {
		will-change: filter;
	}
</style>