<script lang="ts">
	import { untrack } from 'svelte';
	import {
		type Point,
		FILL_DOT_OPACITY,
		FILL_DOT_RADIUS,
		FILL_DOT_SPACING,
		STROKE_WIDTH,
		TRANSITION_DURATION
	} from './types';
	import { calculateColor, calculatePath, closePath, interpolateColor } from './utils';

	import { interpolatePath } from 'd3-interpolate-path';

	interface Props {
		points: Point[];
	}
	let { points }: Props = $props();
	let path = $state<string>('');
	let strokeColor = $state<string>('');

	let width: number = $state(0);
	let height: number = $state(0);

	let isFirstRender = $state(true);
	$effect(() => {
		if (points.length === 0) return;

		untrack(() => {
			if (isFirstRender) {
				path = calculatePath(points, width, height);
				strokeColor = calculateColor(points);
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
		const interpolateFunc = interpolatePath(path, calculatePath(points, width, height));

		const currColor = strokeColor;
		const nextColor = calculateColor(points);

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
				path = calculatePath(points, width, height);
				strokeColor = nextColor;
			}
		};

		// Kick off the first invocation of animate()
		animationID = requestAnimationFrame(animate);
	};

	const FILL_PATTERN_ID = 'fill-pattern';
</script>

<div>
	<div id="sparkline" bind:clientWidth={width} bind:clientHeight={height}>
		<svg width="100%" height="100%">
			<defs>
				<pattern
					id={FILL_PATTERN_ID}
					patternUnits="userSpaceOnUse"
					width={FILL_DOT_SPACING}
					height={FILL_DOT_SPACING}
					x="0"
					y="0"
				>
					<g>
						<rect fill="transparent" height={FILL_DOT_SPACING} width={FILL_DOT_SPACING}></rect>
						<circle
							fill={strokeColor}
							fill-opacity={FILL_DOT_OPACITY}
							cx="1"
							cy="1"
							r={FILL_DOT_RADIUS}
						></circle>
					</g>
				</pattern>
			</defs>

			<path
				d={path}
				stroke={strokeColor}
				stroke-width={STROKE_WIDTH}
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
			/>
			<path fill="url(#{FILL_PATTERN_ID})" d={closePath(path, width, height)} />
		</svg>
	</div>
</div>

<style>
	#sparkline {
		height: 320px;
	}
</style>
