<script lang="ts">
	import Sparkline from '$lib/components/graphs/Sparkline/index.svelte';
	import { type Point, type PointsWithHeader, type StringInterpolator } from '$lib/types/Sparkline';

	// Planning:
	// - Calculate stroke color for percentage changes
	// - Tooltip for timeframe
	// - X and Y axes (should this just go in Sparkline instead?)
	interface Props {
		pointsMap: Map<string, PointsWithHeader>;
	}
	let { pointsMap }: Props = $props();
	let selectedPoints = $state<Point[]>([]);
	let selectedInterpolator = $state<StringInterpolator>(() => {
		return '';
	});
	let selectedIdx = $state(-1);
	let shownValue = $state<string>('');

	// Effect 1: Set selectedPoints to the first list when pointsMap is loaded.
	$effect(() => {
		if (pointsMap === undefined) return;

		const pwh = pointsMap.values().next().value;
		if (pwh === undefined) return;
		selectedPoints = pwh.points;
		selectedInterpolator = pwh.stringFunc;
	});
	// Effect 2: When selectedPoints is first loaded or changed, update the index to be the last point.
	$effect(() => {
		if (selectedPoints.length === 0) return;
		selectedIdx = selectedPoints.length - 1;
	});
	// Effect 3: When selectedIdx is a real value, use it to access the array.
	$effect(() => {
		if (selectedIdx === -1) return;
		shownValue = selectedPoints[selectedIdx].y.toString();
	});

	// Superfluous, but looks cleaner imo.
	const setSelectedPoints = (key: string) => {
		let pwh = pointsMap.get(key);
		if (pwh === undefined) return;

		selectedPoints = pwh.points;
		selectedInterpolator = pwh.stringFunc;
	};
</script>

<div class="flex justify-between header">
	<div class="chartValue">{selectedInterpolator(shownValue)}</div>
	<div>
		{#each pointsMap.keys() as key}
			<button onclick={() => setSelectedPoints(key)}>
				{key}
			</button>
		{/each}
	</div>
</div>

<Sparkline points={selectedPoints} bind:selectedIdx snapPoint={true} />

<style>
	.header {
		align-items: flex-end;
	}

	.chartValue {
		font-size: 1.75rem;
	}

	/* TODO: This is supposedly supposed to be additive for the buttons when they're ready */
	.hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
</style>
