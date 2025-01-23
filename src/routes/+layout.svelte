<script lang="ts">
	import Blog from '$lib/components/blog/Blog.svelte';
	import type { SvelteWalkResponse } from '$lib/types/svelte';

	interface Props {
		data: SvelteWalkResponse;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

<Blog dir={data.dir}>
	{@render children?.()}
</Blog>

<style>
	:global(:root) {
		--background-color: rgb(15, 15, 15);
		--font-family: Roboto, Arial, sans-serif;
		--font-color: rgb(241, 241, 241);
		--font-color-secondary: rgb(170, 170, 170);
		--font-color-href: rgb(62, 166, 255);
		--font-size: 16px;
	}

	:global(body) {
		scrollbar-color: var(--font-color-secondary);
		margin: 0;

		background-color: var(--background-color);
		font-size: var(--font-size);
		font-family: var(--font-family);
		letter-spacing: 0.33px;
		color: var(--font-color);
	}

	:global(button) {
		font-size: var(--font-size);
	}

	:global(input[type='text']) {
		font-size: inherit;
		font-family: inherit;
		color: var(--font-color);
		letter-spacing: 0.33px;
	}

	/* Helper class styles */

	:global(.flex) {
		display: flex;
	}

	:global(.align-center) {
		align-items: center;
	}

	:global(.justify-between) {
		justify-content: space-between;
	}
</style>
