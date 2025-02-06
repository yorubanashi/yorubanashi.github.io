<!-- TODO: Pass in a string in Markdown and generate content? -->
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

	#container :global(h1) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	#container :global(h2) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	#container :global(h3) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	#container :global(div) {
		margin-top: 0px;
		margin-bottom: 1em;
	}

	#container :global(ul) {
		margin-top: 0px;
		margin-bottom: 1em;
		padding-inline-start: 30px;
	}

	#container :global(ul ul) {
		margin-bottom: 0em;
	}

	#container :global(li) {
		margin-top: 0.25em;
		margin-bottom: 0px;
	}

	#container :global(a) {
		color: var(--font-color-href);
	}
</style>
