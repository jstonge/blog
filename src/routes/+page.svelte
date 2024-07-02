<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

	// const sortedPosts = [...data.posts].sort((a, b) => b.pinned - a.pinned)
	
	const pinnedPosts = data.posts.filter(post => post.pinned);
	const regularPosts = data.posts.filter(post => !post.pinned);
</script>



<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<!-- Pinned posts section -->
	<div class="hero">
		<h2>Pinned blog posts:</h2>
	</div>
	<div class="pinned-posts">
		{#each pinnedPosts as post}
		  <div class="post pinned">
			<a href={post.slug} class="title">{post.title}</a>
			<p class="date">{formatDate(post.date)}</p>
			<p class="description">{post.description}</p>
			<div class="tags">
				{#each post.categories as category}
					<span class="surface-4">&num;{category}</span>
				{/each}
			</div>
		  </div>
		{/each}
	</div>

	<hr class="divider">

	<!-- Regular posts section -->
	<ul class="posts">
		{#each regularPosts as post}
		  <li class="post">
			<a href={post.slug} class="title">{post.title}</a>
			<p class="date">{formatDate(post.date)}</p>
			<p class="description">{post.description}</p>
			<div class="tags">
				{#each post.categories as category}
					<span class="surface-4">&num;{category}</span>
				{/each}
			</div>
		  </li>
		{/each}
	  </ul>
</section>

<style>
	.pinned-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--size-7);
    margin-bottom: var(--size-7);
  }

  .posts {
    display: grid;
    gap: var(--size-7);
  }

  .post {
    max-inline-size: var(--size-content-3);
  }

  .post:not(:last-child) {
    border-bottom: 1px solid var(--border);
    padding-bottom: var(--size-7);
  }

  .title {
    font-size: var(--font-size-fluid-3);
    text-transform: capitalize;
  }

  .date {
    color: var(--text-2);
  }

  .description {
    margin-top: var(--size-3);
  }
  

  /* Highlighting for pinned posts */
  .post.pinned {
    border: 2px solid var(--highlight-color);
    background-color: var(--highlight-background);
    padding: var(--size-6);
    border-radius: var(--radius-medium);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 0 10px var(--highlight-glow-color);
  }

  .post.pinned .title {
    color: var(--highlight-title);
    font-weight: bold;
  }

  .post.pinned .date {
    color: var(--highlight-date);
  }

  .post.pinned .description {
    color: var(--highlight-description);
  }

  .title {
    font-size: var(--font-size-fluid-1); /* Adjusted font size */
    text-transform: capitalize;
  }

  .description {
    margin-top: var(--size-3);
    font-size: var(--font-size-fluid-2); /* Adjusted font size for description */
  }

  /* Divider line styling */
  .divider {
    border: none;
    border-top: 2px solid var(--border);
    margin: var(--size-7) 0;
  }

  .hero {
	display: flex;
	flex-direction: column;
	align-items: left;
	margin: 3rem 0 1.5rem;
	}

  .hero h2 {
	/* margin: 2rem 0; */
	max-width: none;
	font-size: 1.5vw;
	font-weight: 200;
	line-height: 1;
	}

	.tags {
		display: flex;
		gap: var(--size-1);
		margin-top: var(--size-3);
	}

	.tags > * {
		padding: var(--size-1) var(--size-3);
		border-radius: var(--radius-round);
	}

</style>
