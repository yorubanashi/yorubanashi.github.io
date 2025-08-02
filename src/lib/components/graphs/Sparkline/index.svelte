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

    let isFirstRender = $state(true);
    $effect(() => {
        if (points.length === 0) return;

        untrack(() => {
            if (isFirstRender) {
                path = calculatePath(points, width, height);
                isFirstRender = false;
            } else {
                transition(points);
            }
        });
    });

    let animationID = $state<number>(0);
    const transition = (points: Point[]) => {
        const start = Date.now();
        const interpolateFunc = interpolatePath(path, calculatePath(points, width, height));

        const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / TRANSITION_DURATION, 1);

            path = interpolateFunc(progress);
            if (progress < 1) {
                animationID = requestAnimationFrame(animate);
            } else {
                // Once progress is at 100%, set path to final path that was just passed in.
                path = calculatePath(points, width, height);
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
