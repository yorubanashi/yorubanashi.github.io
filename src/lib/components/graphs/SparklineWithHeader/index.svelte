<script lang="ts">
	import Sparkline from '$lib/components/graphs/Sparkline/index.svelte';
	import { type Point } from '$lib/types/Sparkline';

	interface Props {
		points: Point[];
	}
	let { points }: Props = $props();
</script>

<Sparkline {points} />
