<script lang="ts">
	import './global.css';

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
