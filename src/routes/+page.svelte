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

<section class="full-width-section">
	
	<!-- Pinned posts section -->
	<div class="hero">
		<h2>Highlight:</h2>
	</div>
	
	<div class="table-header table-layout">
		<span>Title</span>
		<span>Date</span>
		<span>Description</span>
		<span>Tags</span>
	</div>

	<hr class="header-divider"> 
	
	<div class="pinned-posts">
		{#each pinnedPosts as post}
		  <div class="post pinned">
			<div class="table-layout">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
				<div class="tags">
					{#each post.categories as category}
						<p class="surface-4">&num;{category}</p>
					{/each}
				</div>
			</div>
		  </div>
		{/each}
	</div>

	<hr class="divider">

	<!-- Regular posts section -->
	<ul class="posts">
		{#each regularPosts as post}
		  <li class="post">
			<div class="table-layout">
			<a href={post.slug} class="title">{post.title}</a>
			<p class="date">{formatDate(post.date)}</p>
			<p class="description">{post.description}</p>
			<div class="tags">
				{#each post.categories as category}
					<p class="surface-4">&num;{category}</p>
				{/each}
			</div>
			</div>
		  </li>
		{/each}
	  </ul>
</section>

<style>
	
	.full-width-section {
		width: 70rem;
		padding: var(--size-7);
		box-sizing: border-box;
	}

	.pinned-posts {
		display: grid;
		/* grid-template-columns: repeat(3, 1fr); */
		gap: var(--size-7);
		margin-bottom: var(--size-7);
	}
	
	.table-layout {
		width: 70rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--size-7);
		margin-bottom: var(--size-3);
	}

	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-7);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		color:  var(--text-3-dark);
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
	}

	.date {
		color:  var(--text-3-dark);
		font-size: var(--font-size-fluid-2);
	}

	.description {
		color:  var(--text-3-dark);
		font-size: var(--font-size-fluid-2);
	}
	

	/* Highlighting for pinned posts */
	.post.pinned {
		/* border: 2px solid var(--highlight-color);
		background-color: var(--highlight-background);
		padding: var(--size-6);
		border-radius: var(--radius-medium);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 0 10px var(--highlight-glow-color); */
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


  /* Divider line styling */
	.header-divider {
		border: none;
		border-top: 2px solid var(--border);
		margin: var(--size-4) 0;
	}
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
	margin: 1rem 0;
	max-width: none;
	font-size: 1.2vw;
	font-weight: 200;
	line-height: 1;
	}

	.tags {
		margin-top: var(--size-1);
	}
	
	.tags > * {
		font-size: var(--font-size-fluid-3);
		display: inline-block; /* Ensure the tag is only as wide as its content */
		padding: var(--size-1) var(--size-3);
		border: 1px solid var(--border);
		border-radius: var(--radius-round);
		margin: var(--size-1) var(--size-2) var(--size-1) var(--size-2); 
	}

</style>
