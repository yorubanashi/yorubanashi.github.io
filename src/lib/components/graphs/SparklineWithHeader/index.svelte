<script lang="ts">
	import Pressable from './Pressable.svelte';
	import Sparkline from '$lib/components/graphs/Sparkline/index.svelte';
	import {
		type Point,
		type PointsWithHeader,
		type StringInterpolator,
		StrokeColor
	} from '$lib/types/Sparkline';

	// Planning:
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
	let selectedKey = $state<string>('');
	let shownValue = $state<string>('');
	let diff = $state<number>(0);
	let difference = $state<string>('');
	let diffColor = $state<string>('');

	// Effect 1: Set selectedPoints to the first list when pointsMap is loaded.
	$effect(() => {
		if (pointsMap === undefined) return;

		const kv = pointsMap.entries().next().value;
		if (kv === undefined) return;
		selectedKey = kv[0];
		selectedPoints = kv[1].points;
		selectedInterpolator = kv[1].stringFunc;
	});
	// Effect 2: When selectedPoints is first loaded or changed, update the index to be the last point.
	$effect(() => {
		if (selectedPoints.length === 0) return;
		selectedIdx = selectedPoints.length - 1;
	});
	// Effect 3: When selectedIdx is a real value, use it to access the array.
	$effect(() => {
		if (selectedIdx === -1) return;
		const selectedY = selectedPoints[selectedIdx].y;
		shownValue = selectedY.toString();

		const firstY = selectedPoints[0].y;
		diff = selectedY - firstY;
		const pcnt = (diff / firstY) * 100;
		difference = `${Math.abs(diff).toFixed(2)} (${pcnt.toFixed(2)}%)`;
	});

	// Superfluous, but looks cleaner imo.
	const setSelectedPoints = (key: string) => {
		let pwh = pointsMap.get(key);
		if (pwh === undefined) return;

		selectedPoints = pwh.points;
		selectedInterpolator = pwh.stringFunc;
	};

	const getDiffColor = (): string => {
		if (diff > 0) {
			return StrokeColor.StockGreen;
		} else if (diff < 0) {
			return StrokeColor.StockRed;
		}
		return StrokeColor.StockGray;
	};
</script>

<div class="flex justify-between header">
	<div class="flex gap-4">
		<div class="chartValue">{selectedInterpolator(shownValue)}</div>

		<div class="flex flex-end" style={`color: ${getDiffColor()}`}>
			{#if diff > 0}
				<svg class="arrow" width="18" height="18" viewBox="0 0 60 60">
					<line
						x1="20"
						y1="40"
						x2="45"
						y2="15"
						stroke={StrokeColor.StockGreen}
						stroke-width="5"
						stroke-linecap="round"
					></line>
					<line
						x1="25"
						y1="15"
						x2="45"
						y2="15"
						stroke={StrokeColor.StockGreen}
						stroke-width="5"
						stroke-linecap="round"
					></line>
					<line
						x1="45"
						y1="35"
						x2="45"
						y2="15"
						stroke={StrokeColor.StockGreen}
						stroke-width="5"
						stroke-linecap="round"
					></line>
				</svg>
			{:else if diff < 0}
				<svg class="arrow" width="18" height="18" viewBox="0 0 60 60">
					<line
						x1="20"
						y1="15"
						x2="45"
						y2="40"
						stroke={StrokeColor.StockRed}
						stroke-width="5"
						stroke-linecap="round"
					></line>
					<line
						x1="25"
						y1="40"
						x2="45"
						y2="40"
						stroke={StrokeColor.StockRed}
						stroke-width="5"
						stroke-linecap="round"
					></line>
					<line
						x1="45"
						y1="20"
						x2="45"
						y2="40"
						stroke={StrokeColor.StockRed}
						stroke-width="5"
						stroke-linecap="round"
					></line>
				</svg>
			{/if}
			<div class="difference">{difference}</div>
		</div>
	</div>
	<div class="flex">
		{#each pointsMap.keys() as key}
			<Pressable
				{key}
				bind:active={selectedKey}
				text={key}
				callback={() => setSelectedPoints(key)}
			/>
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
		line-height: 1;
	}

	.arrow {
		margin-right: 0.125rem;
	}

	.difference {
		line-height: 1.4;
	}
</style>
