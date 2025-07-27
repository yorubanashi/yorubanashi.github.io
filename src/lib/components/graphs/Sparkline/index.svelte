<script lang="ts">
	import { untrack } from 'svelte';
	import { type Point, TRANSITION_DURATION } from './types';
    import { calculatePath, calculateSettings } from './utils';

    import { interpolatePath } from 'd3-interpolate-path';

	interface Props {
		points: Point[];
	}
	let { points }: Props = $props();
    let path = $state<string>("");

    let width: number = $state(0);
    let height: number = $state(0);
    
    let settings = $derived(calculateSettings(points));

    let previousPoints: Point[] | undefined = undefined;
    $effect(() => {
        untrack(() => {
            if (previousPoints === undefined) {
                // First time? Skip the transition, directly set the path, & set previous points.
                previousPoints = points;
                path = calculatePath(points, width, height);
                return;
            }

            transition(previousPoints, points)
        });

        previousPoints = points;
    });

    let animationID = $state<number>(0);
    const transition = (prev: Point[], curr: Point[]) => {
        const start = Date.now();
        const interpolateFunc = interpolatePath(calculatePath(prev, width, height), calculatePath(curr, width, height));

        const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / TRANSITION_DURATION, 1);

            let interpolated = interpolateFunc(progress);
            path = interpolated;

            if (progress < 1) {
                animationID = requestAnimationFrame(animate);
            } else {
                // Once progress is at 100%, set path to final path that was just passed in.
                path = calculatePath(curr, width, height);
            }
        };

        // Kick off the first invocation of animate()
        animationID = requestAnimationFrame(animate);
    };
</script>

<div>
    <div id="sparkline" bind:clientWidth={width} bind:clientHeight={height}>
        <svg width="100%" height="100%">
            <path
                d={path}
                stroke={settings.color}
                stroke-width={settings.strokeWidth}
                stroke-linecap={settings.strokeLinecap}
                stroke-linejoin={settings.strokeLinejoin}
                fill={settings.fill}
            />
        </svg>
    </div>
</div>

<style>
    #sparkline {
        height: 320px; 
    }
</style>
