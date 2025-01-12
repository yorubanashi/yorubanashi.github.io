<script lang="ts">
    interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div id="container">
    {@render children()}
</div>

<style>
	/* https://stackoverflow.com/questions/46086483/how-to-apply-styles-to-slot-element-in-svelte */
	#container > :global(:first-child) {
		margin-top: 0;
	}

    /* #container :global(h1) {
        font-size: 40px;
    } */
</style>
