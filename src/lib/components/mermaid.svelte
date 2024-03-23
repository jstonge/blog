<script>
  import mermaid from "mermaid";
  import { onMount } from "svelte";

  export let theme = 'neutral';

  onMount(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: theme
    });
  });
</script>

<div class="mermaid">
  <slot></slot>
</div>