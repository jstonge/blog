<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

	const sortedPosts = [...data.posts].sort((a, b) => b.date - a.date)
	
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="full-width-section">
	<h2>Blog entries</h2>
	
	<div class="table-header table-layout">
		<span>Title</span>
		<span>Date</span>
		<span>Description</span>
		<span>Cover</span>
		<span>Tags</span>
	</div>
	
	<div class="divider"></div>

	<ul class="posts">
		{#each sortedPosts as post}
		  <li class="post">
			<div class="table-layout">
			<a href={post.slug} class="title">{post.title}</a>
			<p class="date">{formatDate(post.date)}</p>
			<p class="description">{post.description}</p>
			<img src={post.coverImage} alt={post.title} class="cover-image">
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
<section>
	<div class="divider"></div>
	<h2>Projects</h2>
	
	<div>
		<h3 tabindex="-1" dir="auto">
			<a href="https://jstonge.observablehq.cloud/hello-research-groups/">
				<code>Hello-Research-Groups</code>
			</a> - <p class="status">Status: Ongoing</p>
		</h3>
		<img src="https://raw.githubusercontent.com/jstonge/blog/main/thumbnails/stories/cgs-ver-abstract.webp" alt="hello-research-group" class="cover-image" style="margin-top:1rem; margin-bottom:1rem">
		<p><a href="https://github.com/jstonge/hello-research-groups" style="text-decoration: underline; text-underline-offset: .2rem;">Source</a> ·  A collection of entries, tied together by the idea of defining, modeling, and measuring social groups.</p>
	</div>
		
	<hr>
</section>

<style>
	.status {
		margin-top: 2rem;
		font-size: var(--font-size-fluid-3);
		display: inline-block; /* Ensure the tag is only as wide as its content */
		padding: var(--size-1) var(--size-3);
		border: 1px solid var(--border);
		border-radius: var(--radius-round);
		margin: var(--size-2); 
	}

	h2 {
      margin: 0;
      padding: 0;
      font-weight: 300;
	  margin-bottom: 5vh;
    }

	h3 {
		font-size: 1.25em;
		line-height: 1.25;
    }

	.divider {
        border-top: 1px solid #000;
		padding: 1rem;
    }

	.full-width-section {
		width: 90vw;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
		padding: var(--size-7);
		box-sizing: border-box;

	}

	.table-header {
		display: grid;
		justify-items: left;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		font-size: var(--font-size-fluid-3);
		font-weight: 600;
		color: var(--text-3-dark);
		padding-bottom: var(--size-7);
		margin-left: 2vw;
	}

	.table-layout {
		width: 70rem;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		column-gap: 2vw;
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
		width: 7vw;
	}

	.description {
		color:  var(--text-3-dark);
		font-size: var(--font-size-fluid-2);
	}

	.cover-image {
        width: 250px;
        height: 150px;
        object-fit:contain;
        border-radius: 0px;
        border: 1px solid var(--border);
        margin-right: var(--size-5);
		padding: var(--size-0) var(--size-1);
		background-color: white;
    }

	.tags {
		margin-top: 0;
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
