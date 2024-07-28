
<script>
    import NavBar from "./navbar.svelte";
    import Footer from "./footer.svelte";
    import '../app.css'
    
    import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	export let data
</script>

<div class="app">
    <NavBar />
    <slot />
    <Footer />
</div>


<style>

    .app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    :global(root) {
        --primary: #333;
        --secondary: #f4f4f4;
        --dark: #333;
        --light: #f4f4f4;
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    :global(body) {
        max-width: 100%;
        overflow-x: hidden;
        height: 100%
    }
    :global(html) {
        max-width: 100%;
        overflow-x: hidden;
        height: 100%
    }

</style>

<!-- <style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style> -->
