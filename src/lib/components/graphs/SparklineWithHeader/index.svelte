<script lang="ts">
	import Pressable from './Pressable.svelte';
	import Sparkline from '$lib/components/graphs/Sparkline/index.svelte';
	import {
		type Point,
		type PointsWithHeader,
		type StringInterpolator,
		StrokeColor
	} from '$lib/types/Sparkline';
	import Arrow from './Arrow.svelte';
	import DateMarker from './DateMarker.svelte';

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
	let selectedKey = $state<string>('');
	// Metadata about the data point that is currently selected/hovered/focused.
	let selectedTime = $state<number>(0);
	let shownValue = $state<string>('');
	let diff = $state<number>(0);
	let difference = $state<string>('');

	// Binded state w/ Sparkline
	let width = $state(0);
	let selectedIdx = $state(-1);
	let showScrubber = $state(false);
	let xPosition = $state(0);

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
		// DREAM: Fix hack to prevent DateMarker from showing the latest date during the ease-out transition
		if (showScrubber === true) selectedTime = selectedPoints[selectedIdx].x;

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
			<Arrow {diff} />
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

<DateMarker date={selectedTime} chartWidth={width} show={showScrubber} {xPosition} />

<Sparkline
	points={selectedPoints}
	snapPoint={true}
	bind:width
	bind:selectedIdx
	bind:showScrubber
	bind:xPosition
/>

<style>
	.header {
		align-items: flex-end;
		padding-bottom: 8px;
	}

	.chartValue {
		font-size: 2rem;
		line-height: 1;
	}

	.difference {
		line-height: 1.4;
	}
</style>
