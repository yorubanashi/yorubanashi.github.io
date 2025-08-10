<!-- Exercise -->

<script lang="ts">
	import type { Point } from '$lib/types/Sparkline';
	import SparklineWithHeader from '$lib/components/graphs/SparklineWithHeader/index.svelte';

	interface MileTime {
		time: string;
		mile: number;

		timeSeconds?: number;
	}
	interface DailyRun {
		date: string;
		times: MileTime[];
		notes: string;

		dateMS?: number;
	}
	interface RunningResponse {
		running: DailyRun[];
	}

	interface Props {
		data: RunningResponse;
	}
	let { data }: Props = $props();

	let derivedData = $derived.by((): DailyRun[] => {
		return data.running.map((dr) => {
			dr.times.forEach((time) => {
				const [min, sec] = time.time.split(':').map(Number);
				time.timeSeconds = min * 60 + sec;
			});
			dr.dateMS = new Date(dr.date).getTime();
			return dr;
		});
	});

	// The || fallback shouldn't be used, but I didn't want to create a bunch of types for the post-derived form...
	type RunToPoint = (mts: MileTime[]) => number;
	const milesRun: RunToPoint = (mts) => {
		return mts.at(-1)?.mile || 0;
	};
	const averagePace: RunToPoint = (mts) => {
		const lastMT = mts.at(-1);
		if (lastMT === undefined) return -1;
		if (lastMT.timeSeconds === undefined) return -1;

		return lastMT.mile / (lastMT.timeSeconds / 3600);
	};
	const dataToPoints = (callback: RunToPoint): Point[] => {
		return derivedData.map((dr): Point => {
			return { x: dr.dateMS || 0, y: callback(dr.times) };
		});
	};

	let currentPoints = $state<Point[]>(dataToPoints(milesRun));
</script>

<button
	onclick={() => {
		currentPoints = dataToPoints(milesRun);
	}}>Miles Run</button
>
<button
	onclick={() => {
		currentPoints = dataToPoints(averagePace);
	}}>Average Pace</button
>
<SparklineWithHeader points={currentPoints} />
