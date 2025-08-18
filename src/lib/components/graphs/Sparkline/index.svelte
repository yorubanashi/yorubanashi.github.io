<script lang="ts">
	import { interpolatePath } from 'd3-interpolate-path';
	import { untrack } from 'svelte';

	import FillPattern from './FillPattern.svelte';
	import LineScrub from './LineScrub.svelte';
	import {
		FILL_PATTERN_ID,
		PADDING_X,
		PADDING_Y,
		STROKE_WIDTH,
		TRANSITION_DURATION
	} from '$lib/consts/Sparkline';
	import { bisectCenter, invert } from '$lib/d3/array';
	import { interpolateColor } from '$lib/d3/interpolate';
	import {
		calculateBounds,
		calculateColor,
		calculateCoords,
		calculatePath,
		closePath
	} from '$lib/d3/path';
	import { type Point } from '$lib/types/Sparkline';

	interface Props {
		points: Point[];
		snapPoint?: boolean;

		// Bindable properties for SparklineWithHeader
		width?: number;
		selectedIdx?: number;
		showScrubber?: boolean;
		xPosition?: number;
	}
	let {
		points,
		snapPoint = true,
		width = $bindable(0),
		selectedIdx = $bindable(),
		showScrubber = $bindable(false),
		xPosition = $bindable(0)
	}: Props = $props();
	let bounds = $derived(calculateBounds(points, PADDING_Y));
	let xs = $derived(points.map((point) => point.x));

	let path = $state<string>('');
	let strokeColor = $state<string>('');

	// let width: number = $state(0);
	let height: number = $state(0);

	// DREAM: Redraw paths when browser is resized
	let isFirstRender = $state(true);
	$effect(() => {
		if (points.length === 0) return;

		untrack(() => {
			if (isFirstRender) {
				path = calculatePath(points, bounds, width, height, PADDING_X);
				strokeColor = calculateColor(bounds);
				isFirstRender = false;
			} else {
				transition(points);
			}
		});
	});

	// Used to cancel the current animation, if another one kicks of during this one
	// Unlikely, so unused right now...
	let animationID = $state<number>(0);
	const easeOutQuart = (x: number) => {
		return 1 - (1 - x) ** 4;
	};
	const transition = (points: Point[]) => {
		const start = Date.now();
		const interpolateFunc = interpolatePath(
			path,
			calculatePath(points, bounds, width, height, PADDING_X)
		);

		const currColor = strokeColor;
		const nextColor = calculateColor(bounds);

		const animate = () => {
			const elapsed = Date.now() - start;
			const progress = Math.min(elapsed / TRANSITION_DURATION, 1);
			const easedProgress = easeOutQuart(progress);

			path = interpolateFunc(easedProgress);
			// Given the low transition duration, the color interpolation is probably overkill and could be removed.
			strokeColor = interpolateColor(currColor, nextColor, easedProgress);
			if (progress < 1) {
				animationID = requestAnimationFrame(animate);
			} else {
				// Once progress is at 100%, set path to final path that was just passed in.
				path = calculatePath(points, bounds, width, height, PADDING_X);
				strokeColor = nextColor;
			}
		};

		// Kick off the first invocation of animate()
		animationID = requestAnimationFrame(animate);
	};

	let focusedPoint = $state<Point>();
	// DREAM: Scrub handlers: maybe we should have a dedicated Svelte component wrap this one?
	let sparklineRef = $state<HTMLDivElement>();
	const onMouseEnter = () => {
		showScrubber = true;
	};
	const onMouseLeave = () => {
		showScrubber = false;
		selectedIdx = points.length - 1;
	};
	const onMouseMove = (event: MouseEvent) => {
		if (sparklineRef === undefined || points.length === 0) return;

		const chartPos = Math.max(0, event.clientX - sparklineRef.getBoundingClientRect().left);
		const xVal = invert(bounds.minX, bounds.maxX, width, chartPos);
		const idx = bisectCenter(xs, xVal);
		selectedIdx = idx;

		if (snapPoint) {
			const point = points[idx];
			const coords = calculateCoords(point, bounds, width, height, PADDING_X);
			if (coords.x === width) {
				coords.x -= PADDING_X;
			}
			xPosition = coords.x;
			focusedPoint = { x: coords.x, y: coords.y };
		} else {
			xPosition = chartPos;
		}
	};
</script>

<!-- I'm struggling a bit with this one... -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	id="sparkline"
	bind:this={sparklineRef}
	bind:clientWidth={width}
	bind:clientHeight={height}
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
	onmousemove={onMouseMove}
>
	<svg class="no-pointers" width="100%" height="100%">
		<defs>
			<FillPattern color={strokeColor} />
		</defs>

		<path
			d={path}
			stroke={strokeColor}
			stroke-width={STROKE_WIDTH}
			stroke-linecap="round"
			stroke-linejoin="round"
			fill="none"
		/>

		{#if showScrubber && snapPoint && focusedPoint !== undefined}
			<circle fill={strokeColor} cx={focusedPoint.x} cy={focusedPoint.y} r={STROKE_WIDTH * 2}
			></circle>
		{/if}
		<path fill="url(#{FILL_PATTERN_ID})" d={closePath(path, width, height)} />
	</svg>

	<LineScrub color={strokeColor} {height} show={showScrubber} showMask={!snapPoint} {xPosition} />
</div>

<style>
	/* DREAM: Adjustable height and width? */
	#sparkline {
		position: relative;
		height: 320px;
	}

	.no-pointers {
		pointer-events: none;
	}
</style>
