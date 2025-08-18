<!-- DREAM: Make this a regular SVG under static? -->

<script lang="ts">
	import { StrokeColor } from '$lib/types/Sparkline';

	interface Props {
		diff: number;
	}
	let { diff }: Props = $props();
</script>

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

<style>
	.arrow {
		margin-right: 0.125rem;
	}
</style>
