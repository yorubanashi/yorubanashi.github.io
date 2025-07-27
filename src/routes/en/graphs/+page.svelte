<!-- Graphs Demo -->

<script lang="ts">
	import type { Point } from '$lib/components/graphs/Sparkline/types';
	import Sparkline from '$lib/components/graphs/Sparkline/index.svelte';

	interface StockDataPoint {
		date: string;
		price: number;
	}
	interface StockDataSet {
		stock: string;
		prices: StockDataPoint[];
	}
	interface StockDataResponse {
		stock: StockDataSet[];
	}

	interface Props {
		data: StockDataResponse;
	}
	let { data }: Props = $props();

	const stockToPoints = (ds: StockDataSet): Point[] => {
        return ds.prices.map((dp: StockDataPoint): Point => {
            let seconds = (new Date(dp.date)).getTime() / 1000
            return { x: seconds, y: dp.price };
        });
	};

	let stockToggle = $state(false);
</script>

<!-- This is firing twice occasionally; fix by adding a timeout? -->
<button onclick={() => { stockToggle = !stockToggle }}>Switch DataSet</button>

<Sparkline points={stockToggle ? stockToPoints(data.stock[0]) : stockToPoints(data.stock[1])} />
