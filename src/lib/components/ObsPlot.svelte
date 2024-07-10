<script>
    import * as Plot from '@observablehq/plot';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    /** @type {Plot.PlotOptions}*/
    export let options;

    export let fixedWidth = false;

    let width = 400;

    $: hash = JSON.stringify({ ...options, width });

    /** @type {(HTMLElement | SVGElement) & Plot.Plot} */
    let plot;

    function myplot(node) {
        node.removeChild(node.children[0]);
        plot = Plot.plot({ ...options, ...(fixedWidth ? {} : { width }) });
        node.appendChild(plot);
        plot.addEventListener('click', () => {
            dispatch('click', plot.value);
        });
    }
</script>

{#key hash}
    <div class="plot" style="">
        <div bind:clientWidth={width} use:myplot {...$$restProps} />
        {#if $$slots.default}
            <div style="position: absolute;left:0;top:0"><slot {plot} /></div>
        {/if}
    </div>
    <slot name="below" {plot} />
{/key}

<style>
	.plot { position: relative; }
	.plot :global(h2) { font-size: 22px; margin-bottom: 10px }
	.plot :global(h3) { font-weight: normal; font-size: 14px; margin-top: 10px; }
  .plot :global(svg) {
		background: transparent!important;
	}
</style>